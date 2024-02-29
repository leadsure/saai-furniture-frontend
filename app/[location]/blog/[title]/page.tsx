import { BlogPageDynamic, Layout } from "@/components";
import React from "react";

export default function BlogDetail({
  params,
}: {
  params: { location: string };
}) {
  return (
    <Layout
      location={params.location}
      component={<BlogPageDynamic location={params.location} />}
    />
  );
}
