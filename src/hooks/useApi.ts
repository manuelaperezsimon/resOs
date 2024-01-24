import Restaurant from "@/interfaces/interfaces";
import axios from "axios";
import { useCallback } from "react";

interface Api {
  getAllItems: (url: string) => Promise<Restaurant[]>;
}

const useApi = () => {
  const getAllItems = useCallback(async (url: string) => {
    try {
      const { data } = await axios.get(url);
      return data.restaurants;
    } catch (error) {
      return;
    }
  }, []);

  const api: Api = {
    getAllItems,
  };

  return api;
};

export default useApi;
