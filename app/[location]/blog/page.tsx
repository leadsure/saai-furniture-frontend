import { BlogPage, Layout } from "@/components";
import React from "react";

export default function Blog({ params }: { params: { location: string } }) {
  return (
    <Layout
      location={params.location}
      component={<BlogPage location={params.location} />}
    />
  );
}
