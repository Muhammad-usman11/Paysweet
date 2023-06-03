import React from "react";

const ButtonGrey = ({ children }) => {
  return (
    <div className="ml-[2rem]">
      <button className="btn-outline ">{children}</button>
    </div>
  );
};

export default ButtonGrey;
