import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "@/constant";

interface blog {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  imageUrl: string;
  links: string;
  linksUrl: string;
}

export const useGetBlog = () => {
  const query = useQuery({
    queryKey: ["get-blog"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/blog`);

      return data as {
        blog: blog[];
      };
    },
  });
  return { ...query, blogs: query.data };
};

export const useGetBlogById = (body: object) => {
  const query = useQuery({
    queryKey: ["get-blog-by-id"],
    queryFn: async () => {
      const data = (await axios.post(`${baseUrl}/blog/id`, body)).data;

      return data as { blog: blog };
    },
  });

  return { ...query, blog: query.data };
};
