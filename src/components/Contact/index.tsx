"use client";
import sociallinks from "../../../data/social-links";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: name,
          to_name: "Amrin",
          message: message,
          reply_to: email,
        },
        options
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setData({ name: "", email: "", message: "" });
        console.log("Message sent successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <main className="px-5  max-w-[800px] mx-auto flex-1">
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-16 ">
          <form onSubmit={handleSubmit} className="w-full">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Have any question?
            </h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={3}
                placeholder="Enter your message"
                value={message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-bg w-full px-4 py-2 rounded-lg text-white hover:bg-purple-500"
            >
              Submit
            </button>
          </form>

          <div className="">
            <h3 className="text-xl font-bold mb-3">Connect with me</h3>
            <p className="text-gray-700">
              Feel free to connect with me on any of these platforms.
            </p>
            <div className="flex gap-4 pt-4">
              {sociallinks.map((item, i) => {
                return (
                  <a
                    key={i}
                    className="btn-bg p-1 rounded-md hover:scale-105 duration-300 text-white"
                    href={item.url}
                    target="_blank"
                    aria-label={`${item.name} link`}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium mt-4 mb-2 text-gray-700">
                Email
              </h3>
              <a href="mailto:coderamrin@gmail.com" className="text-gray-600">
                coderamrin@gmail.com
              </a>

              <h3 className="text-xl font-medium mt-4 mb-2 text-gray-700">
                Address
              </h3>
              <p className="text-gray-600">Feni, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
