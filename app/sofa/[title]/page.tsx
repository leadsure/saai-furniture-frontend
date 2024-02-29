import { Layout, SofaDynamicPage } from "@/components";
import React from "react";

const Design = ({ params }: { params: { title: string } }) => {
  return <Layout component={<SofaDynamicPage title={params.title} />} />;
};

export default Design;
