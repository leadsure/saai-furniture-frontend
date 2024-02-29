import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "@/constant";
import { CategoryDesign } from "../category";

export const useGetDesigns = () => {
  const query = useQuery({
    queryKey: ["get-design"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/design`);

      return data as {
        design: CategoryDesign[];
      };
    },
  });
  return { ...query, designs: query.data };
};

export const useGetDesignById = (body: object) => {
  const query = useQuery({
    queryKey: ["get-design-by-id"],
    queryFn: async () => {
      const data = (await axios.post(`${baseUrl}/design/id`, body)).data;

      return data as { design: CategoryDesign };
    },
  });

  return { ...query, design: query.data };
};
