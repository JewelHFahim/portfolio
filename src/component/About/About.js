import React from "react";
import profile2 from "../../Assets/Profile.jpeg";
import "./About.css";
import Utilities from "../Utilities/Utilities";


const About = () => {
  return (
    <div className=" flex-col lg:grid grid-cols-2 pt-4 lg:mx-10">
      <div className="text-slate-400 mx-10">
        <div className=" flex items-center">
          <p className="lg:text-3xl font-semibold mt-2 pb-4 text-slate-300">
            About me
          </p>
          <div className="  w-32 lg:w-72 h-[1px] bg-slate-400 ml-4"></div>
        </div>

        <p className="text-justify">
          Hello! My name is Jewel and I enjoy creating things that live on the
          internet. I’m a MERN STack Developer located in Bangladesh. I have a
          serious passion for UI effects, animations and creating intuitive,
          dynamic user experiences.
        </p>

        <p className="my-3 text-justify">
          Well-organised person, problem solver, independent employee with high
          attention to detail. Like to Travel new places when get a chance.
        </p>

        <p className="text-secondary">Let’s make something special.</p>

        <p className="my-3 text-justify">
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </p>

        <p className="mt-3">
          Here are a few technologies I’ve been working with recently:
        </p>

        {/* Frontend */}
        <div className=" flex items-center lg:mt-10">
        <p className=" lg:text-2xl  font-semibold mt-2 pb-4 text-slate-300"> Frontend</p>
        <div className=" w-32 lg:w-72 h-[1px] bg-slate-400 ml-4"></div>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-6">
          <Utilities>HTML</Utilities>
          <Utilities>CSS</Utilities>
          <Utilities>JavaScript (ES6+)</Utilities>
          <Utilities>React.js</Utilities>
          <Utilities>React Router</Utilities>
          <Utilities>REST APIs</Utilities>
          <Utilities>Redux</Utilities>
          <Utilities>Bootstrap</Utilities>
          <Utilities>Tailwind</Utilities>
          <Utilities>Material UI</Utilities>
          <Utilities>TypeScript</Utilities>
        </div>

        {/* Backend */}
        <div className=" flex items-center">
        <p className=" lg:text-2xl  font-semibold mt-2 pb-4 text-slate-300">Backend</p>
        <div className=" w-32 lg:w-72 h-[1px] bg-slate-400 ml-4"></div>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-6">
          <Utilities>Node.js</Utilities>
          <Utilities>MongoDB</Utilities>
          <Utilities>Express.js</Utilities>
          <Utilities>Firebase</Utilities>
        </div>

        {/* Tools */}
        <div className=" flex items-center">
        <p className=" lg:text-2xl  font-semibold mt-2 pb-4 text-slate-300">Tool's</p>
        <div className=" w-32 lg:w-72 h-[1px] bg-slate-400 ml-4"></div>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-6">
          <Utilities>Chrome Dev Tools</Utilities>
          <Utilities>Redux Dev Tools</Utilities>
          <Utilities>GitHub</Utilities>
          <Utilities>Netlify</Utilities>
          <Utilities>Visual Studio Code</Utilities>
          <Utilities>React Testing Library</Utilities>
          <Utilities>Figma</Utilities>
          <Utilities>Vercel</Utilities>
          <Utilities>WordpressElementor</Utilities>
        </div>
      </div>

      <div className="box mt-20 mb-10 lg:ml-8 flex justify-center ">
        <img
          className="content border border-secondary p-2 rounded-full "
          style={{ width: "350px", height: "350px" }}
          src={profile2}
          alt="profile pic"
        />
      </div>
    </div>
  );
};

export default About;
