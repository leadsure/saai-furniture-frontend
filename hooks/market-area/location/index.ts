import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "@/constant";
import { Location } from "../state";

export const useGetlocation = (body: { cityId: string }) => {
  const query = useQuery({
    queryKey: ["get-location"],
    queryFn: async () => {
      const { data } = await axios.post(
        `${baseUrl}/market-area/location`,
        body
      );

      return data as {
        locations: Location[];
      };
    },
  });
  return { ...query, data: query.data };
};
