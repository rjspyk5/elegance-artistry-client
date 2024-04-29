import React from "react";

export const CatagoryCard = ({ title, photo }) => {
  return (
    <div
      className={`card flex py-10 space-y-4 flex-col justify-center items-center hover:bg-base-100 bg-base-300 bg-contain hover:cursor-pointer shadow-xl`}
    >
      <img className="w-28 h-20 rounded-xl" src={photo} alt="" />
      <div className="font-bold text-lg">{title}</div>
    </div>
  );
};
