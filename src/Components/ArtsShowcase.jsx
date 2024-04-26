import React from "react";
import { SectionHeading } from "./SectionHeading";
import { ArtsCard } from "./ArtsCard";

export const ArtsShowcase = () => {
  return (
    <>
      <SectionHeading
        heading="Featured Arts"
        subheading=" Explore our curated collection of contemporary and traditional artworks"
      />
      <div>
        <ArtsCard />
      </div>
    </>
  );
};
