import React from "react";

const Header = () => {
  return (
    <div className=" ml-6 lg:mx-28 py-8">
      <p className="text-xl text-secondary animate-pulse">Hi, my name is</p>
      <h1 className="text-4xl lg:text-6xl font-bold text-slate-300 my-4">
        Jewel Hossain Fahim
      </h1>
      <h1 className="text-4xl  lg:text-6xl font-bold text-slate-400">
      Turning ideas into real life products is my calling
      
      </h1>
      <div className="pt-10 text-lg text-slate-400">
        <p className="mt-4">I like to craft solid and scable frontend products with great user experiences. <br />Where imagination meets creativity</p>
      </div>

      <button
        className='mt-10 btn btn-outline btn-secondary rounded-sm'>
        Check out my course!
      </button>
    </div>
  );
};

export default Header;
