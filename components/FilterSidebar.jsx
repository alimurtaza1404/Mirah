export default function FilterSidebar({
  availability,
  setAvailability,
  priceRange,
  setPriceRange,
  sort,
  setSort,
}) {
  // You could also integrate a slider component for price range
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Filter</h3>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Availability</label>
        <select
          className="w-full border border-gray-300 rounded px-2 py-1"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="all">All</option>
          <option value="in-stock">In Stock</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Sort By</label>
        <select
          className="w-full border border-gray-300 rounded px-2 py-1"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Price Range</label>
        <div className="flex space-x-2">
          <input
            type="number"
            className="w-1/2 border border-gray-300 rounded px-2 py-1"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            placeholder="Min"
          />
          <input
            type="number"
            className="w-1/2 border border-gray-300 rounded px-2 py-1"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  );
}
