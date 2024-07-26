import React from "react";
import { useProducts } from "../hooks/fetch.hook";

function Products() {
  const { data, error, isLoading } = useProducts();

  if (error) return <div>An error has occurred</div>;
  if (isLoading) return <div>Data is loading...</div>;

  return (
    <div className="grid sm:grid-cols-4 gap-x-4 gap-y-6">
      {data?.map((product) => (
        <div
          key={product.id}
          className="max-w-5xl items-start shadow-xl rounded-lg overflow-hidden bg-white group"
        >
          <img
            src={product.image}
            alt={product.title}
            className="bg-white w-full h-[180px] object-cover group-hover:scale-[1.1] transition"
          />
          <div className="p-4">
            <article className="space-y-1 mb-4">
              <h4 className="line-clamp-1 font-extrabold">{product.title}</h4>
              <h4 className="text-sm text-neutral-500">{product.category}</h4>
              <h4 className="tracking-tight">${product.price}</h4>
              <p className="line-clamp-2 text-xs text-neutral-700 tracking-tight">
                {product.description}
              </p>
            </article>
            <div className="flex justify-between items-center gap-4">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1.5 px-4 rounded-xl text-sm">
                Buy Now
              </button>
              <button className="bg-white text-green-600 border border-green-600  font-bold py-1.5 px-4 rounded-xl text-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
