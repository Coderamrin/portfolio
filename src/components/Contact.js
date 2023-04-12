import React from "react";
import { motion } from "framer-motion";
import Hero from "../assets/hero-img.png";

const Contact = () => {
  return (
    <section
      className="bg-primary text-gray-600 body-font relative"
      id="contact"
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
          className="lg:w-2/3 md:w-1/2 bg-gray-300  rounded-lg overflow-hidden sm:mr-10 p-10 flex   relative"
        >
          <div className="bg-white relative flex flex-wrap py-10 rounded shadow-md mb-8">
            <motion.img
              src={Hero}
              alt="placeholder"
              className="w-1/2 mx-auto mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
            />
            <div className="lg:w-1/2 px-6  mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Sankalp Residency, Pakwan circle, Bodakdev, Ahmedabad
              </p>

              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                udayl.itpath@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">8200504513</p>
            </div>
          </div>
        </div>
        <div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-2 rounded-lg"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Enter your details to reach out
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            submit
          </button>
          <p className="text-xs text-gray-500 mt-3">
            By clicking submit button i'll recieve a mail which contains your
            information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
