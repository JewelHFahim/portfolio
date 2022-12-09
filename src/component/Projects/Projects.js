import React from "react";
import { AiOutlineFolder } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="mx-20 mt-10 text-slate-300">
      <div className=" flex items-center">
        <p className="text-3xl font-semibold mt-2 pb-4 text-slate-300">
          Some Things I’ve Built
        </p>
        <div className="w-72 h-[1px] bg-slate-400 ml-4"></div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5">

        <div className="border p-4">
          <AiOutlineFolder className="text-4xl text-secondary" />
          <p className="text-xl font-semibold ">Lorem, ipsum.</p>
        </div>
        <div className="border p-4">
          <AiOutlineFolder className="text-4xl text-secondary" />
          <p className="text-xl font-semibold ">Lorem, ipsum.</p>
        </div>
        <div className="border p-4">
          <AiOutlineFolder className="text-4xl text-secondary" />
          <p className="text-xl font-semibold ">Lorem, ipsum.</p>
        </div>



       
      </div>
    </div>
  );
};

export default Projects;
