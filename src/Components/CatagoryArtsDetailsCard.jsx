import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CatagoryArtsDetailsCard = ({ art }) => {
  return (
    <div
      className="card  shadow-lg
    shadow-[0px 3px 0px #E5E7EB33] hover:scale-[1.03]  duration-[1s]   border-gray-600 hover:border-white  bg-base-300 "
    >
      <figure>
        <img src={art.photo} alt="art image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{art.art_name}</h2>
        <div>
          <span className=" rounded-lg  text-white p-1 px-3 backdrop-blur-lg bg-[#3e922f5f]">
            {art.subcategory_Name}
          </span>
        </div>

        <p className="font-bold text-lg">
          Description :{" "}
          <span className="font-normal text-base">{art.description}</span>{" "}
        </p>
        <p className="font-bold text-lg">
          Rating : <span className="font-normal text-base">{art.rating}</span>{" "}
        </p>
        <p className="font-bold text-lg">
          Processing Time :{" "}
          <span className="font-normal text-base">{art.process_time}</span>{" "}
        </p>

        <div className="flex justify-between items-center">
          <p className=" font-bold text-2xl">Price : {art.price}</p>
        </div>
        <Link
          to={`/art/${art._id}`}
          className="btn bg-lime-500 hover:bg-lime-700 mt-5 text-white  bg-contain bg-no-repeat "
        >
          ViewDetails
        </Link>
      </div>
    </div>
  );
};
CatagoryArtsDetailsCard.propTypes = {
  art: PropTypes.object,
};
