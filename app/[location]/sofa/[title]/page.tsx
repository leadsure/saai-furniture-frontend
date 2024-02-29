import { Layout, SofaDynamicPage, SofaPage } from "@/components";
import React from "react";

const Design = ({
  params,
}: {
  params: { location: string; title: string };
}) => {
  return (
    <Layout
      location={params.location}
      component={
        <SofaDynamicPage title={params.title} location={params.location} />
      }
    />
  );
};

export default Design;
