import { Link } from "react-router-dom";
import { useCart } from "../stores/cart.store";
import Button from "../components/button";

export default function CartPage() {
  const cart = useCart();

  return (
    <section className="px-6 pb-12">
      <ul className="space-y-4 max-w-xl mx-auto">
        <li className="flex justify-between items-start gap-4">
          <article>
            <h2 className="text-2xl font-extrabold tracking-wide mb-1">
              Shopping cart
            </h2>
            <p className="text-sm font-semibold">
              Cart total: NGN {cart?.total_price?.toFixed(2)}
            </p>
          </article>

          <button
            onClick={async () => await cart.clear()}
            className="border-2 border-red-600 rounded-lg px-2 py-1 text-sm font-semibold text-red-600 bg-red-100 active:scale-[0.97]"
          >
            X Clear cart
          </button>
        </li>

        {cart?.items?.map((item) => (
          <li
            key={item?.id}
            className="flex gap-4 items-center bg-white p-1 rounded relative"
          >
            <img
              src={item?.image}
              alt=""
              className="object-cover h-20 w-20 rounded"
            />

            <article>
              <h2 className="font-semibold tracking-tight">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="text-sm text-neutral-700">
                NGN {item?.price} | Qty. {item?.quantity}
              </p>
              <p className="text-sm text-neutral-700">
                Total: {item?.total_price}
              </p>
            </article>

            <button
              onClick={async () => await cart.removeItem(item?.id)}
              className="absolute right-3 top-2 font-bold text-red-500 text-sm"
            >
              X
            </button>
          </li>
        ))}

        {cart.items.length ? (
          <li>
            <Button className="w-full" onClick={() => cart.checkout()}>
              Checkout
            </Button>

            <div className="text-center py-3">
              <Link to="/">Continue shopping</Link>
            </div>
          </li>
        ) : (
          <div className="text-center py-12 space-y-4 border-2 border-dashed rounded-lg shadow-xl">
            <h4 className="text-3xl tracking-wide">Cart is empty!</h4>
            <p>Oops you do not have any item in your cart right now.</p>

            <div>
              <Link to="/">
                <Button>Shop now</Button>
              </Link>
            </div>
          </div>
        )}
      </ul>
    </section>
  );
}
