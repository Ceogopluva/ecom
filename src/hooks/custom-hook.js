import { useQuery } from "@tanstack/react-query";

export const useCustomHook = ({ queryKey, url }) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const res = await fetch(url);
      const res_data = await res.json();
      return res_data;
    },
  });
};
