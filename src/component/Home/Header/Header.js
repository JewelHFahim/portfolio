import React from "react";

const Header = () => {
  return (
    <div className=" mx-28 pt-8">
      <p className="text-xl text-secondary animate-pulse">Hi, my name is</p>
      <h1 className="text-6xl font-bold text-slate-300 my-4">
        Jewel Hossain Fahim
      </h1>
      <h1 className="text-6xl font-bold text-slate-400">
        I build things for the web
      </h1>
      <p className="pt-10 text-lg text-slate-400">
        I’m a software engineer specializing in building (and occasionally{" "}
        <br /> designing) exceptional digital experiences. Currently, I’m
        focused on <br /> building accessible, human-centered products at{" "}
        <span className="text-secondary">Upstatement</span> <br /> (https://brittanychiang.com/). <br />
        https://mattfarley.ca/
      </p>

      <button
        className='mt-10 btn btn-outline btn-secondary rounded-sm'>
        Check out my course!
      </button>
    </div>
  );
};

export default Header;
