import React from "react";

export const CatagoryCard = ({ title }) => {
  return (
    <div className="card  hover:bg-base-100 bg-base-300 hover:cursor-pointer shadow-xl">
      <div className="card-body">{title}</div>
    </div>
  );
};
