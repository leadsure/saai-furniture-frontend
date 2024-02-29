import React from "react";
import { AboutPage, Layout } from "@/components";

const About = ({ params }: { params: { location: string } }) => {
  return (
    <Layout
      location={params.location}
      component={<AboutPage location={params.location} />}
    />
  );
};

export default About;
