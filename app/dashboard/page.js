'use client';
import React, { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    slug:'', title:'', price:'', currency:'AED', category:'', description:'', image:'', images:[], sizes:[]
  });

  useEffect(() => { fetchProducts(); }, []);

  async function fetchProducts() {
    setLoading(true);
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }

  function openNew() {
    setEditing(null);
    setForm({ slug:'', title:'', price:'', currency:'AED', category:'', description:'', image:'', images:[], sizes:[] });
  }

  async function handleSave(e) {
    e.preventDefault();
    if (editing) {
      await fetch(`/api/products/${editing}`, {
        method:'PUT',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(form)
      });
    } else {
      await fetch('/api/products', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(form)
      });
    }
    fetchProducts();
    openNew();
  }

  async function handleEdit(p) {
    setEditing(p.id);
    setForm({
      slug: p.slug || '',
      title: p.title || '',
      price: p.price || '',
      currency: p.currency || 'AED',
      category: p.category || '',
      description: p.description || '',
      image: p.image || (p.images?.[0] ?? ''),
      images: p.images ?? [],
      sizes: p.sizes ?? []
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleDelete(id) {
    if (!confirm('Delete product?')) return;
    await fetch(`/api/products/${id}`, { method:'DELETE' });
    fetchProducts();
  }

  return (
    <div className="p-6 md:p-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div>
          <button onClick={openNew} className="px-4 py-2 bg-gray-900 text-white rounded">New Product</button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input required placeholder="Slug" value={form.slug} onChange={e=>setForm({...form, slug:e.target.value})} className="p-2 border" />
        <input required placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} className="p-2 border" />
        <input placeholder="Price" value={form.price} onChange={e=>setForm({...form, price:e.target.value})} className="p-2 border" />
        <input placeholder="Currency" value={form.currency} onChange={e=>setForm({...form, currency:e.target.value})} className="p-2 border" />
        <input placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} className="p-2 border" />
        <input placeholder="Main image path" value={form.image} onChange={e=>setForm({...form, image:e.target.value})} className="p-2 border" />
        <textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} className="p-2 border md:col-span-2" />
        <input placeholder='Images JSON (["/img1","/img2"])' value={JSON.stringify(form.images)} onChange={e=>{
          try{ setForm({...form, images: JSON.parse(e.target.value)}) }catch{ /* ignore parse error */ }
        }} className="p-2 border md:col-span-2" />
        <input placeholder='Sizes JSON (["S","M"])' value={JSON.stringify(form.sizes)} onChange={e=>{
          try{ setForm({...form, sizes: JSON.parse(e.target.value)}) }catch{}
        }} className="p-2 border md:col-span-2" />
        <button type="submit" className="bg-[#c6b197] text-white px-4 py-2 rounded md:col-span-2">{editing ? 'Update' : 'Create'}</button>
      </form>

      {/* Table */}
      {loading ? <p>Loading...</p> : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Slug</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p=>(
                <tr key={p.id} className="text-sm">
                  <td className="p-2 border">{p.id}</td>
                  <td className="p-2 border">{p.slug}</td>
                  <td className="p-2 border">{p.title}</td>
                  <td className="p-2 border">{p.price} {p.currency}</td>
                  <td className="p-2 border">{p.category}</td>
                  <td className="p-2 border space-x-2">
                    <button onClick={()=>handleEdit(p)} className="px-2 py-1 border rounded">Edit</button>
                    <button onClick={()=>handleDelete(p.id)} className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
