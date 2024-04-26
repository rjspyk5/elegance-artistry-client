import React from "react";
import { Carasoul } from "../Components/Carasoul";
import { ArtsShowcase } from "../Components/ArtsShowcase";
import { ReviewSlider } from "../Components/ReviewSlider/ReviewSlider";

export const Home = () => {
  return (
    <div>
      <Carasoul />
      <ArtsShowcase />
      <ReviewSlider />
    </div>
  );
};
