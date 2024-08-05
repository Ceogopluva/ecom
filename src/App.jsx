import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./components/Layout";
import CartPage from "./pages/cart";
import { useEffect } from "react";
import { localforage } from "./lib/localforage";
import { useCart } from "./stores/cart.store";

export default function App() {
  const cart = useCart();

  useEffect(() => {
    async function getLocalCartData() {
      const cart_data = await localforage.getItem("cart");

      if (cart_data?.items?.length) {
        cart.setCart({
          items: cart_data.items,
          total_price: cart_data.total_price,
        });
      }
    }
    getLocalCartData();
  }, [cart]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  );
}
