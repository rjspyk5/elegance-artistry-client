import React from "react";
import { Link } from "react-router-dom";

export const CatagoryCard = ({ catagoryInfo: { subcategory_Name, image } }) => {
  return (
    <Link
      to={`/catagory/${subcategory_Name}`}
      className={`card flex py-10 space-y-4 flex-col justify-center items-center hover:bg-base-100 bg-base-300 bg-contain hover:cursor-pointer shadow-xl`}
    >
      <img className="w-36 h-28 rounded-xl" src={image} alt="" />
      <div className="font-bold text-lg">{subcategory_Name}</div>
    </Link>
  );
};
