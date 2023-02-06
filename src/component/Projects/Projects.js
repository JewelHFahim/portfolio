import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import leap from "../../Assets/leap.png";
import varal from "../../Assets/varal ui.png";
import airint from "../../Assets/airint-full.png";


import "./Project.css";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

const Projects = () => {



  return(
    <div>
      <div className=" flex items-center lg:mt-10 lg:mx-10 lg:px-10">
        <p className=" lg:text-3xl  font-semibold mt-2 pb-4 text-slate-300"> Some Things I’ve Built (Full Stack)</p>
        <div className=" w-32 lg:w-72 h-[1px] bg-slate-400 ml-4"></div>
      </div>

    {/* First Project */}
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 my-10 lg:mx-10 lg:px-10">
    {/* Laptop */}
      <div class="object-laptop">
        <div class="screen screen1"  >
          <div class="lcd"></div>
        </div>
        <div class="keyboard one"></div>
        <div class="keyboard two"></div>
      </div>
      {/* Content */}
      <div className="text-center lg:text-left p-5 rounded-md bg-[#0c1d36] h-[90%] my-auto">
        <h1 className=" text-white text-3xl ">LensMart</h1>
        <p className=" text-slate-500 my-6 text-justify">
        It's a reseller website, where sellers can post and buyers can buy by opening an account. Three Dashboard Customer, Seller & Admin. Used- React, Node.js, MongoDB, Express, Tailwind, Daisy UI, Firebase, JWT, Stripe. Responsive for different devices
        </p>
        
        <a href="https://lens-mart.web.app/"><button className="mb-8  border text-[#21D3BB] border-[#21D3BB] px-4 py-1 lg:px-8 lg:py-2 hover:bg-[#21D3BB] hover:text-[#0a1930] uppercase mt-4">Case Study</button></a>

      </div>
    </div>


    {/* Second Project */}
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 my-5 lg:m-10 lg:p-10">
    {/* Laptop */}
      <div class="object-laptop">
        <div class="screen screen2">
          <div class="lcd"></div>
        </div>
        <div class="keyboard one"></div>
        <div class="keyboard two"></div>
      </div>
      {/* Content */}
      <div className="text-center lg:text-left p-5 rounded-md bg-[#0c1d36] h-[90%] my-auto">
        <h1 className=" text-white text-3xl ">MediLaw</h1>
        <p className=" text-slate-500 my-6 text-justify">
        Personal law service provider website, where people can review the lawyer. Built responsive, accessible and dynamic web pages to enable users to easily navigate the site. Used React.js, React Router Dom, JWT, MongoDB, Tailwind & Daisy UI to create dynamic pages
        </p>

        <a href="https://medilaw-bc770.web.app/">
        <button className="mb-8  border text-[#21D3BB] border-[#21D3BB] px-4 py-1 lg:px-8 lg:py-2 hover:bg-[#21D3BB] hover:text-[#0a1930] uppercase mt-4">Case Study</button>
        </a>
        
      </div>
    </div>


    {/* Third Project */}
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 my-5 lg:m-10 lg:p-10">
    {/* Laptop */}
      <div class="object-laptop">
        <div class="screen screen3">
          <div class="lcd"></div>
        </div>
        <div class="keyboard one"></div>
        <div class="keyboard two"></div>
      </div>
      {/* Content */}
      <div className="text-center lg:text-left p-5 rounded-md bg-[#0c1d36] h-[90%] my-auto">
        <h1 className=" text-white text-3xl ">Education with Excellence</h1>
        <p className=" text-slate-500 my-6 text-justify">
        Online education course-based website, where user can read & download pdf. Developed front-end with HTML, CSS, React.js Tailwind & Daisy UI. Created Mobile Responsive User Experience with CSS Grid
        </p>

        <a href="https://education-with-excellence.web.app/">
        <button className="mb-8  border text-[#21D3BB] border-[#21D3BB] px-4 py-1 lg:px-8 lg:py-2 hover:bg-[#21D3BB] hover:text-[#0a1930] uppercase mt-4">Case Study</button>
        </a>
      </div>
    </div>


    {/* More Projects */}
       <div className="mb-10 lg:mx-10 lg:px-10 text-slate-300">

       <div className=" flex items-center">
         <p className=" lg:text-3xl  font-semibold mt-2 pb-4 text-slate-300">
           More Projects (Frontend-UI)
         </p>
         <div className=" w-32 lg:w-72 h-[1px] bg-slate-400 ml-4"></div>
       </div>

       <div className="grid lg:grid-cols-3 gap-5 mt-5">
       {/* Air Int Ltd */}
         <div className="container border p-4 rounded-lg">
           <img src={airint} style={{ height: "300px", width: "320px" }} alt="lensmart" className="image rounded-lg" />
           <div className="overlay">
             <div className="text w-full px-6">
               <h1 className="text-lg mb-2">Air Int Ltd.</h1>
               <p className="text-sm my-5 text-slate-400">
               Air Int Ltd.is a travel and blog website. Developed Only UI.
               </p>
               <a href="https://air-int.netlify.app/" target="_blank" rel="noreferrer noopener">
                <button className="btn btn-sm btn-outline btn-secondary m-2 px-10 rounded-sm">
                  <FaUserCog className="text-2xl mr-2" /> Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Varal */}
        <div className="container border p-4 rounded-lg">
          <img src={varal} style={{ height: "300px", width: "320px" }} alt="lensmart" className="image rounded-lg" />
          <div className="overlay">
            <div className="text w-full px-6">
              <h1 className="text-lg mb-2">Varal AI</h1>
              <p className="text-sm my-5 text-slate-400">
                Varal is Dhubai based business consultency website. Developed only UI.
              </p>
              <a href="https://varaluaetask.netlify.app/" target="_blank" rel="noreferrer noopener">
                <button className="btn btn-sm btn-outline btn-secondary m-2 px-10 rounded-sm">
                  <FaUserCog className="text-2xl mr-2" /> Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Leap*/}
        <div className="container border p-4 rounded-lg">
          <img src={leap} style={{ height: "300px", width: "320px" }} alt="lensmart" className="image rounded-lg" />
          <div className="overlay">
            <div className="text w-full px-6">
              <h1 className="text-lg mb-2">Leap</h1>
              <p className="text-sm my-5 text-slate-400">
                Leap is digital consultancy website. Developed only UI.
              </p>
              <a href="https://leap-task.netlify.app/" target="_blank" rel="noreferrer noopener">
                <button className="btn btn-sm btn-outline btn-secondary m-2 px-10 rounded-sm">
                  <FaUserCog className="text-2xl mr-2" /> Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-slate-400 mt-12 mb-2  w-full">
      {/* <div className="text-2xl flex justify-center">
        <AiFillGithub className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />
        <AiOutlineInstagram className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />

        <FiLinkedin className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />
        <FiTwitter className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />
      </div>
      <hr /> */}
      <div className="text-center">    
      <small>Designed an created by Jewel Hossain Fahim</small>
      </div>
    </div>


</div>
  );

};

export default Projects;
