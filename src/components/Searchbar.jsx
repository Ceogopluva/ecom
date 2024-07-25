import React, { useState } from "react";
import search from "./img/search.png";
import cart from "./img/cart.png";
import notify from "./img/notification.png";
import drop from "./img/drop.PNG";

function Searchbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filter, setFilter] = useState("Search By");

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowDropdown(false);
  };
  return (
    <div className="bg-white space-x-4 m-4 w-full max-h-{100px} justify-between grid sm:grid grid-cols-12 gap-4">
      <div className="relative text-gray-700 text-lg font-extrabold items-center col-span-4 mr-3 sm:block">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleIconClick}
        >
          <img src={drop} alt="drop" className="w-4 h-4" />
          {filter}
        </div>
        {showDropdown && (
          <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <div
                onClick={() => handleFilterChange("category")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Category
              </div>
              <div
                onClick={() => handleFilterChange("product name")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Product Name
              </div>
              <div
                onClick={() => handleFilterChange("price")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Price
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="text-gray-900 col-span-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Find products"
            className="border border-gray-300 rounded-lg w-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <img src={search} alt="icon" className="w-4 h-4 absolute right-3" />
        </div>
      </div>

      <div className="hidden text-gray-900 col-span-4 sm:block">
        <div className="flex justify-end">
          <img src={notify} alt="cart" className="w-10 h-10" />
          <img src={cart} alt="cart" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
