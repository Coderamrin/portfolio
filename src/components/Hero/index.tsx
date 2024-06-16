import React from "react";
import Image from "next/image";
import sociallinks from "../../../data/social-links";

const Hero = () => {
  return (
    <section className="pt-16 md:w-[800px]">
      <div className="flex sm:items-center gap-5 flex-col sm:flex-row justify-start items-start">
        <Image
          src={"/images/profile.png"}
          width={70}
          height={70}
          alt="profile image"
          className="btn-bg rounded-full p-1"
        />

        <div>
          <h1 className="text-3xl mb-1 font-bold text-gray-800"> Hi, I am Amrin</h1>

          <p className="text-gray-600">
            Frontend Developer{" "}
            <a
              href="https://pimjo.com/"
              target="_blank"
              className="bg-gradient-to-r from-violet-500 to-purple-700 inline-block text-transparent bg-clip-text "
            >
              @Pimjo
            </a>
          </p>
        </div>
      </div>
      <p className="py-5 text-gray-600 text-lg">
        I am a Frontend Developer. I love to build beautiful and interactive
        websites.
      </p>

      <div className="flex gap-4">
        {sociallinks.map((item, i) => {
          return (
            <a
              key={i}
              className="btn-bg p-1 rounded-md hover:scale-105 duration-300 text-white"
              href={item.url}
              target="_blank"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
