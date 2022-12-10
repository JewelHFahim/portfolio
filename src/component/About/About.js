import React from "react";
import profile from "../../Assets/Profile.jpeg";

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
        Hello! My name is Jewel and I enjoy creating things that live on the internet. 
          I’m a Front-End Developer located in Bangladesh. I have a serious
          passion for UI effects, animations and creating intuitive, dynamic
          user experiences.
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
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-2">
          <p>
            <span className="text-secondary text-xl">•</span> JavaScript (ES6+)
          </p>
          <p>
            <span className="text-secondary text-xl">•</span> React.js
          </p>
          <p>
            <span className="text-secondary text-xl">•</span> Redux
          </p>
          <p>
            <span className="text-secondary text-xl">•</span> Node.js
          </p>
          <p>
            <span className="text-secondary text-xl">•</span> Express.js
          </p>
          <p>
            <span className="text-secondary text-xl">•</span> MongoDB
          </p>
          <p>
            <span className="text-secondary text-xl">•</span> TypeScript
          </p>
        </div>
      </div>

      <div className=" mt-20 mb-10 ml-8">
        <img
          className="border border-secondary p-2 rounded-md"
          style={{ width: "350px", height: "380px" }}
          src={profile}
          alt=""
        />
      </div>


    </div>
  );
};

export default About;
