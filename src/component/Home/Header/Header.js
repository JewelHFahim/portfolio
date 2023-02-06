import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" ml-6 lg:mx-28 py-8">
      <div className="text-secondary text-lg">
        <Typewriter
          options={{
            strings: ["Hello, my name is..."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <h1 className="text-4xl lg:text-6xl font-bold text-slate-300 my-4">
        Jewel Hossain Fahim
      </h1>
      <h1 className="text-4xl  lg:text-6xl font-bold text-slate-400">
        Turning ideas into real life products is my calling
      </h1>
      <div className="pt-10 text-lg text-slate-400">
        <p className="mt-4">
          I like to craft solid and scable frontend products with great user
          experiences. <br />
          Where imagination meets creativity
        </p>
      </div>

      <Link to="/project">
        <button className="mt-10 btn btn-outline btn-secondary rounded-sm">
          Check out my Projects!
        </button>
      </Link>
    </div>
  );
};

export default Header;
