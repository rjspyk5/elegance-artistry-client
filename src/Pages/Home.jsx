import React from "react";
import { Carasoul } from "../Components/Carasoul";
import { ArtsShowcase } from "../Components/ArtsShowcase";
import { ReviewSlider } from "../Components/ReviewSlider/ReviewSlider";
import { Catagory } from "../Components/Catagory";
import { FAQ } from "../Components/FAQ";

export const Home = () => {
  return (
    <div className=" ">
      <Carasoul />

      <div className="max-w-[1100px mx-auto]">
        <ArtsShowcase />
        <Catagory />
        <ReviewSlider />
        <FAQ />
      </div>
    </div>
  );
};
