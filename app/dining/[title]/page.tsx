import { DiningDynamicPage, DiningPage, Layout } from "@/components";
import React from "react";

const Dining = ({ params }: { params: { title: string } }) => {
  return <Layout component={<DiningDynamicPage title={params.title} />} />;
};

export default Dining;
