import { DiningPage, Layout } from "@/components";
import React from "react";

const Dining = ({ params }: { params: { location: string } }) => {
  return <Layout location={params.location} component={<DiningPage />} />;
};

export default Dining;
