import React, { useEffect } from 'react';
import filterStore from '../store/filterStore';
import products from '@/utils/constant';

const Sidebar = () => {
  const { filters, setCategory, setCompany, setPrice, setSearch, getFilteredProducts, clearFilters } = filterStore();

  useEffect(() => {
    // Fetch filtered products whenever the filter values change
    const filteredProducts = getFilteredProducts();
    // Update the state in your main store with the filtered products
    // Update the filteredProducts state in your main store if needed
  }, [filters, getFilteredProducts]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const handleCompanyChange = (e) => {
    const company = e.target.value;
    setCompany(company);
  };

  const handlePriceChange = (e) => {
    const price = e.target.value;
    setPrice(price);
  };

  const handleSearchChange = (e) => {
    const search = e.target.value;
    setSearch(search);
  };

  const handleClearFilters = () => {
     clearFilters()
  };

  // Get unique categories and companies from the products data
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const companies = Array.from(new Set(products.map((product) => product.company)));

  return (
    <div className="fixed top-16 right-4 h-96 w-48 bg-white p-4 rounded z-10">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      
      <div className='flex flex-col items-center'>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={filters.category}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={filters.company}
          onChange={handleCompanyChange}
        >
          <option value="">All Companies</option>
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>

        <input
          type="number"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={filters.price}
          onChange={handlePriceChange}
          placeholder="Max Price"
        />

        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={filters.search}
          onChange={handleSearchChange}
          placeholder="Search"
        />
        <button className='bg-slate-900 text-white w-28 h-8 rounded' onClick={handleClearFilters}>Reset Filters</button>
        {/* Render other sidebar components */}
      </div>
    </div>
  );
};

export default Sidebar;
