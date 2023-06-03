import React from "react";

const ButtonBlue = ({ children, icon }) => {
  // console.log(icon);
  return (
    <div className="ml-[2rem]">
      <button className="btn-blue ">
        {children} {icon}
      </button>
    </div>
  );
};

export default ButtonBlue;
