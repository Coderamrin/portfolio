import Projects from "@/components/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Projects`,
  description: `Check out some of the projects I have worked on`,
  alternates: {
    canonical: `${process.env.SITE_URL}/projects`,
  },
  robots: "nonindex, nofollow",
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
