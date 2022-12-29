import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
             Hi, My Name Is Rohima Akther everyone call me Amrin. 
             I am a Frontend Developer. I build beautifull websites with React and Tailwind CSS. 
          </p>
          <p className="pb-5">
            Other than Tailwind and React I have also worked with:
            <ul>
              <li>  
                 Bootstrap 
              </li>
              <li>  
                 Node.js, Express.js 
              </li>
              <li>  
                 MongoDB 
              </li>
              <li>  
                 Redux and so on. 
              </li>
            </ul>
          </p>
          <p className="pb-5">
           I use Git and Github to store my code and version controlling. 
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
