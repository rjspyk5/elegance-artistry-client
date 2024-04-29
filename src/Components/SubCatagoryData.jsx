import React from "react";
import { useLoaderData } from "react-router-dom";
import { CatagoryArtsDetailsCard } from "./CatagoryArtsDetailsCard";

export const SubCatagoryData = () => {
  const data = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {data.map((el) => (
        <CatagoryArtsDetailsCard key={el._id} art={el} />
      ))}
    </div>
  );
};
