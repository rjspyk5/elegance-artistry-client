import React, { useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { ArtsCard } from "./ArtsCard";

export const ArtsShowcase = () => {
  useEffect(() => {
    fetch("http://localhost:5000/arts")
      .then((res) => res.json())
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  }, []);

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
