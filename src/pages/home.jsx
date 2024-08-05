import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";

export default function HomePage() {
  return (
    <div className="bg-gray-100 w-full min-h-screen relative">
      <div className="max-w-6xl mx-auto mb-8 p-4">
        <Banner />
      </div>

      <div className="max-w-6xl mx-auto mb-8 p-4">
        <Products />
      </div>
    </div>
  );
}
