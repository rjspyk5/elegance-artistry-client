import React, { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ArtsCard } from "./ArtsCard";

export const ArtsShowcase = () => {
  const [arts, setarts] = useState([]);
  useEffect(() => {
    fetch("https://elegance-artistry-server.vercel.app/arts/six")
      .then((res) => res.json())
      .then((r) => setarts(r))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SectionHeading
        heading="Featured Arts"
        subheading=" Explore our curated collection of contemporary and traditional artworks"
      />

      <div className="grid  grid-cols-1 md:grid-cols-3 gap-5">
        {arts.map((el) => (
          <ArtsCard key={el._id} art={el} />
        ))}
      </div>
    </>
  );
};
