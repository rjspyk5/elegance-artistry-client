import React from "react";
import second from "../assets/images/bg2.jpg";
export const ArtsCard = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={second} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>SubCatagory</p>
        <h2 className="card-title">Name</h2>

        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p>Price :</p>
        <div className="flex justify-between">
          <div className="btn">Add </div>
          <div className="btn">ViewDetails</div>
        </div>
      </div>
    </div>
  );
};
