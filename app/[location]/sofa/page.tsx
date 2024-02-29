import { Layout, SofaPage } from "@/components";
import React from "react";

export default function Sofa({ params }: { params: { location: string } }) {
  return (
    <Layout
      location={params.location}
      component={<SofaPage location={params.location} />}
    />
  );
}
