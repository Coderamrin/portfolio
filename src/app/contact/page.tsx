import Contact from "@/components/Contact";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact`,
  description: `Get in touch with me`,
  robots: "noindex, nofollow",
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
