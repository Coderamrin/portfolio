import Projects from "@/components/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Projects`,
  description: `My favorite projects`,
  // robots: "nonindex, nofollow",
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
