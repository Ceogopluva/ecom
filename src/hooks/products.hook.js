import { useCustomHook } from "./custom-hook";
import { BASE_URL } from "../constants";

export const useProducts = () => {
  return useCustomHook({
    queryKey: ["products"],
    url: BASE_URL + "/products",
  });
};

export const useProduct = (id) => {
  return useCustomHook({
    queryKey: ["product"],
    url: BASE_URL + "/products/" + id,
  });
};
