import React from "react";
import { SectionHeading } from "./SectionHeading";
import { CatagoryCard } from "./CatagoryCard";
import cartoon from "../assets/images/catagory/cartoon.jpg";
import chacrol from "../assets/images/catagory/chacrol.jpg";
import landscape from "../assets/images/catagory/landscape.jpg";
import oil from "../assets/images/catagory/oil painting2.jpg";
import portrait from "../assets/images/catagory/protrait.jpeg";
import water from "../assets/images/catagory/watercolor.jpg";

export const Catagory = () => {
  return (
    <div>
      <SectionHeading
        heading="Categories"
        subheading=" Explore our curated collection of contemporary and traditional artworks"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <CatagoryCard
          photo={landscape}
          title="Landscape Painting "
        ></CatagoryCard>
        <CatagoryCard photo={chacrol} title="Portrait Drawing"></CatagoryCard>
        <CatagoryCard photo={oil} title="Watercolour Painting"></CatagoryCard>
        <CatagoryCard photo={portrait} title="Oil Paintinge"></CatagoryCard>
        <CatagoryCard photo={water} title="Charcoal Sketching"></CatagoryCard>
        <CatagoryCard
          photo={cartoon}
          title="
Cartoon Drawing"
        ></CatagoryCard>
      </div>
    </div>
  );
};
