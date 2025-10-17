import CollectionsOverview from '../../components/Dashboard/CollectionsOverview';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-heading text-gray-900 tracking-wide">Mirah Dashboard</h1>
          <p className="text-gray-600">Manage your luxury collections with ease</p>
        </div>
        <button className="bg-[#c6b197] text-white px-6 py-3 rounded-lg hover:bg-[#b79d82] transition">
          Add New Collection
        </button>
      </div>
      <CollectionsOverview />
    </div>
  );
}
