import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "@/constant";

export interface Location {
  id: string;
  name: string;
}

export interface City {
  id: string;
  name: string;
  locations: Location[];
}

export interface State {
  id: string;
  name: string;
  citys: City[];
}

export const useGetState = () => {
  const query = useQuery({
    queryKey: ["get-state"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/market-area/state`);

      return data as {
        states: State[];
      };
    },
  });
  return { ...query, states: query.data?.states };
};
