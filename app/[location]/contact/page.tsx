import { ContactPage, Layout } from "@/components";
import React from "react";

export default function Contact({ params }: { params: { location: string } }) {
  return <Layout location={params.location} component={<ContactPage />} />;
}
