import React from "react";
import second from "../assets/images/bg2.jpg";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/images/splash.png";
export const ArtsCard = ({ art }) => {
  return (
    <div
      className="card card-compact  shadow-xl
    max-w-sm  shadow-[0px 3px 0px #E5E7EB33] hover:scale-[1.03] glass duration-[1s] backdrop-blur-md   border-gray-600 hover:border-white  bg-[#ffffff2f] text-white"
    >
      <figure>
        <img src={second} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="opacity-60 text-black">{art.subcategory}</p>
        <h2 className="card-title text-black">{art.art_name}</h2>

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
            checked
          />
        </div>

        <div className="flex justify-between items-center">
          <p className="text-black font-bold text-2xl">Price : {art.price}</p>
          <Link
            style={{
              backgroundImage: `url(${bg})`,
            }}
            to={`/art/${art._id}`}
            className="btn bg-lime-500 text-white hover:text-black bg-contain bg-no-repeat "
          >
            ViewDetails
          </Link>
        </div>
      </div>
    </div>
  );
};
