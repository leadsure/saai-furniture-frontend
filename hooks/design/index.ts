import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "@/constant";

export interface CategoryDesign {
  id: string;
  title: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
}

export const useGetDesigns = ({
  categoryTitle,
}: {
  categoryTitle: string | undefined;
}) => {
  const query = useQuery({
    queryKey: ["get-design"],
    queryFn: async () => {
      const { data } = await axios.post(`${baseUrl}/design`, { categoryTitle });

      return data as {
        designs: CategoryDesign[];
      };
    },
  });
  return { ...query, designs: query.data?.designs };
};

export const useGetDiningDesigns = () => {
  const query = useQuery({
    queryKey: ["get-dining-design"],
    queryFn: async () => {
      const { data } = await axios.post(`${baseUrl}/design/dining`);

      return data as {
        designs: CategoryDesign[];
      };
    },
  });
  return { ...query, designs: query.data?.designs };
};

export const useGetDesignByTitle = (body: object) => {
  const query = useQuery({
    queryKey: ["get-design-by-id"],
    queryFn: async () => {
      const data = (await axios.post(`${baseUrl}/design/id`, body)).data;

      return data as { design: CategoryDesign };
    },
  });

  return { ...query, design: query.data?.design };
};
