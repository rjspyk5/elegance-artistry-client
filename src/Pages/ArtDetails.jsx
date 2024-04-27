import React from "react";
import { useLoaderData } from "react-router-dom";

export const ArtDetails = () => {
  const artData = useLoaderData();
  console.log(artData);
  return <div>ArtsDetails</div>;
};
