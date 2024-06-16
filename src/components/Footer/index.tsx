import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="pb-4 pt-16 text-center text-gray-700 ">
      Copyright &copy; {year} All rights reserved.
    </div>
  );
};

export default Footer;
