import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import medilaw from "../../Assets/medilaw.jpg";
import education from "../../Assets/education.jpg";
import lensmart from "../../Assets/lensmart.jpg";
import "./Project.css";

const Projects = () => {
  return (
    <div className="lg:mx-20 my-10 text-slate-300">
      <div className=" flex items-center">
        <p className=" lg:text-3xl  font-semibold mt-2 pb-4 text-slate-300">
          Some Things I’ve Built
        </p>
        <div className=" w-32 lg:w-72 h-[1px] bg-slate-400 ml-4"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-5">

      {/* LensMart */}
      <div className="container border p-4 rounded-lg">
      <img src={lensmart} alt="lensmart" className="image rounded-lg" />
      <div className="overlay">
      <div className="text w-full px-6">
        <h1 className="text-lg mb-2">LensMart</h1>  
        <p className="text-sm my-5 text-justify text-slate-400"> Reselle website: Responsive, Authentication, Payment Getway</p> 
        <a href="https://lens-mart.web.app/" target="_blank" rel="noreferrer noopener">
        <button className="btn btn-sm btn-outline btn-secondary mt-4 rounded-sm">Details<BiLinkExternal className="ml-2 text-lg"/> </button>
        </a>
       </div>
      </div>
      </div>

      {/* MediLaw */}
      <div className="container border p-4 rounded-lg">
      <img src={medilaw} alt="lensmart" className="image rounded-lg" />
      <div className="overlay">
      <div className="text w-full px-6">
        <h1 className="text-lg mb-2">MediLaw</h1>  
        <p className="text-sm my-5 text-justify text-slate-400"> Personal law service website: Review Section, Responsive, Authentication, </p> 
         <a href="https://medilaw-bc770.web.app/" target="_blank" rel="noreferrer noopener"> <button className="btn btn-sm btn-outline btn-secondary mt-4 rounded-sm">Details<BiLinkExternal className="ml-2 text-lg"/></button></a>
       </div>
      </div>
      </div>

      {/* Education with excellence */}
      <div className="container border p-4 rounded-lg">
      <img src={education} alt="lensmart" className="image rounded-lg" />
      <div className="overlay">
      <div className="text w-full px-6">
        <h1 className="text-lg mb-2">Education With Excellence</h1>  
        <p className="text-sm my-5 text-justify text-slate-400"> Education website: Login, Signup, Responsive, Authentication, Online Reading, PDF Download</p> 
        <a href="https://education-with-excellence.web.app/" target="_blank" rel="noreferrer noopener" ><button className="btn btn-sm btn-outline btn-secondary mt-4 rounded-sm">Details<BiLinkExternal className="ml-2 text-lg"/> </button></a>
       </div>
      </div>
      </div>

       
      </div>
    </div>
  );
};

export default Projects;
