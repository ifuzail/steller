import React, { useEffect, useState } from 'react';
import filterStore from '@/store/filterStore';
import { FaCross, FaFilter } from 'react-icons/fa'; 
import { categories, companies } from '@/utils/constant';

const Topbar = ({ isFilterOpen, setIsFilterOpen }) => {
  const {
    filters,
    setCategory,
    setCompany,
    setPrice,
    setSearch,
    getFilteredProducts,
    clearFilters,
  } = filterStore();


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
    clearFilters();
  };


  return (
    <div className="lg:hidden">
      <button
        className="px-4 py-2 rounded"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        {isFilterOpen ? <FaCross /> : <FaFilter />}
      </button>
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full h-full p-4">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <select
                className="border border-gray-300 rounded py-2 mb-4 px-5 m-2"
                value={filters.category}
                onChange={handleCategoryChange}
              >
                <option value="">Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                className="border border-gray-300 rounded w-36 py-2 mb-4"
                value={filters.company}
                onChange={handleCompanyChange}
              >
                <option value="">Companies</option>
                {companies.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
              <input
                type="number"
                className="border border-gray-300 rounded px-3 py-2 mb-4 mr-4"
                value={filters.price}
                onChange={handlePriceChange}
                placeholder="Max Price"
              />
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 mb-4"
                value={filters.search}
                onChange={handleSearchChange}
                placeholder="Search"
              />
              <button
                className="bg-gray-100 text-black w-full py-2 rounded"
                onClick={handleClearFilters}
              >
                Reset Filters
              </button>
              <button
                className="mt-2 bg-emerald-500 text-white w-full py-2 rounded"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
