import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "@/constant";

export interface CategoryProps {
  id: string;
  title: string;
  description: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
  imageUrl: string;
}

export const useGetCategory = () => {
  const query = useQuery({
    queryKey: ["get-category"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/category`);

      return data as {
        categories: CategoryProps[];
      };
    },
  });
  return { ...query, categories: query.data?.categories };
};

export const useGetDiningCategory = () => {
  const query = useQuery({
    queryKey: ["get-category"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/category`);

      return data as {
        categories: CategoryProps[];
      };
    },
  });

  return { ...query, categories: query.data?.categories };
};

export const useGetCategoryById = (body: object) => {
  const query = useQuery({
    queryKey: ["get-category-by-id"],
    queryFn: async () => {
      const data = (await axios.post(`${baseUrl}/category/title`, body)).data;

      console.log(data);
      return data as { category: CategoryProps };
    },
  });

  return { ...query, category: query.data?.category };
};
