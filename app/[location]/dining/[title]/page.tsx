import { DiningDynamicPage, DiningPage, Layout } from "@/components";
import React from "react";

const Dining = ({
  params,
}: {
  params: { location: string; title: string };
}) => {
  return (
    <Layout
      location={params.location}
      component={
        <DiningDynamicPage location={params.location} title={params.title} />
      }
    />
  );
};

export default Dining;
