import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "@/constant";
import { City } from "../state";

export const useGetCity = () => {
  const query = useQuery({
    queryKey: ["get-city"],
    queryFn: async () => {
      const { data } = await axios.post(`${baseUrl}/market-area/city`);

      return data as {
        cities: City[];
      };
    },
  });
  return { ...query, cities: query.data?.cities };
};
