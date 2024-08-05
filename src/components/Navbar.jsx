import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <nav className="bg-green-600">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* my logo */}
        <div className="text-white text-2xl font-bold">EloraStores</div>

        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 text-white font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Return Policy</Link>
          </li>
          <li>
            <Link to="/">Free Delivery</Link>
          </li>
        </ul>
      </div>
      {/* mobile menu */}
      {menuOpen ? (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4 text-white font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Return Policy</Link>
            </li>
            <li>
              <Link to="/">Free Delivery</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
