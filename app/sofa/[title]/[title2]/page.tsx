import { Layout, SofaDynamicPage, SofaDynamicPage2 } from "@/components";
import React from "react";

const Design = ({ params }: { params: { title: string; title2: string } }) => {
  return (
    <Layout
      component={
        <SofaDynamicPage2 title={params.title} title2={params.title2} />
      }
    />
  );
};

export default Design;
