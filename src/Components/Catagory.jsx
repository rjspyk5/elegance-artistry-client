import React from "react";
import { SectionHeading } from "./SectionHeading";
import { CatagoryCard } from "./CatagoryCard";

export const Catagory = () => {
  return (
    <div>
      <SectionHeading
        heading="Categories"
        subheading=" Explore our curated collection of contemporary and traditional artworks"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <CatagoryCard title="Landscape Painting "></CatagoryCard>
        <CatagoryCard title="Portrait Drawing"></CatagoryCard>
        <CatagoryCard title="Watercolour Painting"></CatagoryCard>
        <CatagoryCard title="Oil Paintinge"></CatagoryCard>
        <CatagoryCard title="Charcoal Sketching"></CatagoryCard>
        <CatagoryCard
          title="
Cartoon Drawing"
        ></CatagoryCard>
      </div>
    </div>
  );
};
