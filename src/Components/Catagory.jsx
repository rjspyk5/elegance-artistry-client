import React, { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { CatagoryCard } from "./CatagoryCard";

export const Catagory = () => {
  const [catagories, setcatagories] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("https://elegance-artistry-server.vercel.app/subcategory")
      .then((res) => res.json())
      .then((r) => {
        setloading(false);
        setcatagories(r);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <SectionHeading
        heading="Categories"
        subheading=" Explore our curated collection of contemporary and traditional artworks"
      />
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {catagories.map((el) => (
          <CatagoryCard key={el._id} catagoryInfo={el} />
        ))}
      </div>
    </div>
  );
};
