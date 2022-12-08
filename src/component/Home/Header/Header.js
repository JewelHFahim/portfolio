import React from "react";

const Header = () => {
  return (
    <div className=" mx-28 pt-8">
      <p className="text-xl text-secondary">Hi, my name is</p>
      <h1 className="text-6xl font-bold text-slate-300 my-4">
        Jewel Hossain Fahim
      </h1>
      <h1 className="text-6xl font-bold text-slate-400">
        I build things for the web
      </h1>
      <p className="pt-8 text-lg text-slate-400">
        I’m a software engineer specializing in building (and occasionally{" "}
        <br /> designing) exceptional digital experiences. Currently, I’m
        focused on <br /> building accessible, human-centered products at{" "}
        <span className="text-secondary">Upstatement</span> .
      </p>

      <button
        className=' mt-8 btn btn-outline btn-secondary rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
        Check out my course!
      </button>
    </div>
  );
};

export default Header;
