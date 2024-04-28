import React, { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ArtsCard } from "./ArtsCard";

export const ArtsShowcase = () => {
  const [arts, setarts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("https://elegance-artistry-server.vercel.app/arts/six")
      .then((res) => res.json())
      .then((r) => {
        setarts(r);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SectionHeading
        heading="Featured Arts"
        subheading=" Explore our curated collection of contemporary and traditional artworks"
      />
      <div>
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        <div className="grid  grid-cols-1 md:grid-cols-3 gap-5">
          {arts.map((el) => (
            <ArtsCard key={el._id} art={el} />
          ))}
        </div>
      </div>
    </>
  );
};
