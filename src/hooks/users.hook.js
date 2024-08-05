import { BASE_URL } from "../constants";
import { useCustomHook } from "./custom-hook";

export const useUsers = () => {
  return useCustomHook({ queryKey: ["users"], url: BASE_URL + "/users" });
};
