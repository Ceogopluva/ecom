import React from "react";
import { useProducts } from "../hooks/fetch.hook";

function Products() {
  const { data, error, isLoading } = useProducts();

  if (error) return <div>An error has occurred</div>;
  if (isLoading) return <div>Data is loading...</div>;

  return (
    <div className="grid sm:grid-cols-4 gap-4">
      {data?.map((product) => (
        <div key={product.id} className="max-w-5xl items-start p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[250px]"
          />
          <h4 className="line-clamp-1">{product.title}</h4>
          <h4>{product.category}</h4>
          <h4>${product.price}</h4>
          <p className="line-clamp-3">{product.description}</p>
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
              Add to cart
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
