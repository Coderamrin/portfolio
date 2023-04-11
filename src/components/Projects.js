import React from "react";
import AdvanceToDo from "../assets/cssprojects.png";
import Patient from "../assets/devlog.png";
import port from "../assets/uilogs.png";

const Projects = () => {
  const projects = [
    {
      img: Patient,
      title: "Patients-App",
      desc: " A patients App which is built with React-Native core components and Async-Storage and navigation ",
      code: "https://github.com/IPS-React-Native-Intern/Patient-App/tree/Uday_Lakhana",
    },
    {
      img: port,
      title: "Portfolio",
      desc: "An advanced Portfolio website in react js using React Router and Tailwind CSS.",
      code: "https://github.com/UGlakhana45/port",
    },
    {
      img: AdvanceToDo,
      title: "css projects",
      desc: "A basic starting level Advance ToDo list project in react js with validations",
      code: "https://github.com/UGlakhana45/advance-2",
    },
  ];

  return (
    <section className=" bg-primary text-white px-5 py-32 h-screen" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-12 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5 mb-5">
            These are some of my basic projects. I have built these with React
            and Tailwind CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10 rounded-lg ">
        {projects.map((project, i) => {
          return (
            <div className="relative " key={i}>
              <img
                className="rounded-lg mb-5 mt-5"
                src={project.img}
                alt={project.title}
              />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 rounded-lg">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
