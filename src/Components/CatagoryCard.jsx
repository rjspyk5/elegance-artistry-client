import React from "react";

export const CatagoryCard = ({ title }) => {
  return (
    <div className="card  bg-base-100 hover:bg-base-300 hover:cursor-pointer shadow-xl">
      <div className="card-body">{title}</div>
    </div>
  );
};
