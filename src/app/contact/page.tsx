import Contact from "@/components/Contact";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact`,
  description: `Get in touch with me`,
  openGraph: {
    type: "website",
    title: `Contact`,
    description: `Get in touch with me`,
  },
  alternates: {
    canonical: `${process.env.SITE_URL}/contact`,
  },
  // robots: "noindex, nofollow",
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
