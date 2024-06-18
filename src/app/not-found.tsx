import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <main className="px-5 md:px-0 md:w-[815px] mx-auto flex-1 py-20">
      <Image
        src="/images/404.svg"
        width={650}
        height={650}
        alt="404"
        className="mx-auto"
      />
    </main>
  );
};

export default NotFound;
