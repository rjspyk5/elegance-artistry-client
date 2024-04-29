import React, { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { CatagoryCard } from "./CatagoryCard";

export const Catagory = () => {
  const [catagories, setcatagories] = useState([]);
  useEffect(() => {
    fetch("https://elegance-artistry-server.vercel.app/subcategory")
      .then((res) => res.json())
      .then((r) => {
        setcatagories(r);
        console.log(r);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <SectionHeading
        heading="Categories"
        subheading=" Explore our curated collection of contemporary and traditional artworks"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {catagories.map((el) => (
          <CatagoryCard key={el._id} catagoryInfo={el} />
        ))}
      </div>
    </div>
  );
};
