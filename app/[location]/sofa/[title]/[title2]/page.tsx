import { Layout, SofaDynamicPage, SofaDynamicPage2 } from "@/components";
import React from "react";

const Design = ({
  params,
}: {
  params: { location: string; title: string; title2: string };
}) => {
  return (
    <Layout
      location={params.location}
      component={
        <SofaDynamicPage2
          location={params.location}
          title={params.title}
          title2={params.title2}
        />
      }
    />
  );
};

export default Design;
