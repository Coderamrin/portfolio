import Projects from "@/components/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Projects`,
  description: `My favorite projects`,
  alternates: {
    canonical: process.env.SITE_URL!,
  },
  // robots: "nonindex, nofollow",
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
