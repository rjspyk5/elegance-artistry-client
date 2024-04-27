import React from "react";
import { useLoaderData } from "react-router-dom";

export const AllArtAndCrafts = () => {
  const artsData = useLoaderData();
  console.log(artsData);
  return <div>AllArtAndCrafts</div>;
};
