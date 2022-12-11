import React from "react";
import Typewriter from "typewriter-effect";

const Blog = () => {
  new Typewriter("#typewriter", {
    strings: [],
    autoStart: true,
  });

  return (
    <div className="hero h-[84vh] text-white text-3xl">
      <Typewriter
        options={{
          strings: ["Coming Soon..."],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Blog;
