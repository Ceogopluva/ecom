import React, { useState } from "react";
import search from "./img/search.png";
import cartImg from "./img/cart.png";
import notify from "./img/notification.png";
import drop from "./img/drop.PNG";
import { useCart } from "../stores/cart.store";
import { Link } from "react-router-dom";

function Searchbar() {
  const cart = useCart();

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
    <section>
      <div className="z-50 bg-white space-x-4 m-4 w-full max-h-{100px} justify-between items-center grid sm:grid grid-cols-12 gap-4 p-3">
        <div className="relative text-gray-700 text-lg font-extrabold items-center col-span-4 sm:block rounded">
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
            <img
              src={search}
              alt="icon"
              className="w-4 h-4 absolute right-3 object-cover"
            />
          </div>
        </div>

        <div className="hidden text-gray-900 col-span-4 sm:block relative">
          <div className="flex justify-end items-center gap-4">
            <button>
              <img src={notify} alt="cart" className="w-6 h-6 object-cover" />
            </button>

            <Link to="/cart">
              <span className="absolute bg-red-500 text-white text-xs -right-2 -top-1 font-bold px-1 h-auto w-auto flex items-center justify-center rounded-full">
                {cart?.items?.length}
              </span>
              <img src={cartImg} alt="cart" className="w-6 h-6 object-cover" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Searchbar;
