import React from "react";
import { BiRightArrow } from "react-icons/bi";

const Utilities = ({ children }) => {
  return (
    <div>
      <p className="flex items-center">
        <span className="text-secondary flex items-center">
          <BiRightArrow className="mr-1" />
        </span>
        {children}
      </p>
    </div>
  );
};

export default Utilities;
