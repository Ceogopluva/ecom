import { create } from "zustand";
import { sumItemsTotal } from "../lib/sum";
import { localforage } from "../lib/localforage";

export const useCart = create((set, get) => ({
  cart_id: "",
  items: [],
  total_price: 0,

  setCart: ({ items, total_price }) => {
    set((state) => ({ ...state, items, total_price }));
  },

  addItem: async ({ id, quantity, image, price }) => {
    const is_item_exist = get().items.find((item) => item.id === id);

    if (is_item_exist) {
      const item_total_price = (quantity + is_item_exist.quantity) * price;

      const updated_item = {
        id,
        quantity: quantity + is_item_exist.quantity,
        image,
        price,
        total_price: item_total_price,
      };

      const filtered_items = get().items.filter((item) => item.id !== id);
      const filtered_items_total_price = sumItemsTotal(filtered_items);

      set((state) => ({
        ...state,
        items: [updated_item, ...filtered_items],
        total_price: filtered_items_total_price + item_total_price,
      }));

      await localforage.setItem("cart", {
        items: [updated_item, ...filtered_items],
        total_price: filtered_items_total_price + item_total_price,
      });
      return;
    }

    // if item does not exist:
    const new_item = {
      id,
      quantity,
      image,
      price,
      total_price: quantity * price,
    };

    const items = [...get().items, new_item];
    const cart_total_price = sumItemsTotal(items);

    set({ items, total_price: cart_total_price });
    await localforage.setItem("cart", { items, total_price: cart_total_price });
  },

  removeItem: async (id) => {
    const filtered = get().items.filter((item) => item.id !== id);
    const new_total_price = sumItemsTotal(filtered);

    set((state) => ({
      ...state,
      items: filtered,
      total_price: new_total_price,
    }));

    await localforage.setItem("cart", {
      items: filtered,
      total_price: new_total_price,
    });
  },

  clear: async () => {
    set((state) => ({ ...state, items: [], total_price: 0 }));
    await localforage.setItem("cart", { items: [], total_price: 0 });
  },

  checkout: () => {
    // call payment api e.g. paystack
  },
}));
