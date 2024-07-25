import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://fakestoreapi.com";

export const useProducts = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(BASE_URL + "/products");
      return res.json();
    },
  });
};
