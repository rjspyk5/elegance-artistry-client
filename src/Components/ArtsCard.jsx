import { Link } from "react-router-dom";
import bg from "../assets/images/splash.png";
import PropTypes from "prop-types";
export const ArtsCard = ({ art }) => {
  return (
    <div
      className="card  shadow-lg
      shadow-[0px 3px 0px #E5E7EB33] hover:scale-[1.03]  duration-[1s] backdrop-blur-md   border-gray-600 hover:border-white  bg-base-300 "
    >
      <figure>
        <img className="w-full h-[244px]" src={art.photo} alt="Art image" />
      </figure>
      <div className="card-body">
        <div>
          <span className=" rounded-lg  text-white p-1 px-3 backdrop-blur-lg bg-[#37f80c5f]">
            {art.subcategory_Name}
          </span>
        </div>

        <h2 className="card-title text-xl font-bold">{art.art_name}</h2>

        <p>Rating : {art.rating}</p>

        <div className="flex justify-between items-center">
          <p className=" font-bold text-2xl">
            Price : {art.price && `$${art.price}`}
          </p>
          <Link
            style={{
              backgroundImage: `url(${bg})`,
            }}
            to={`/art/${art._id}`}
            className="btn bg-lime-500 hover:bg-lime-700 text-white  bg-contain bg-no-repeat "
          >
            ViewDetails
          </Link>
        </div>
      </div>
    </div>
  );
};

ArtsCard.propTypes = {
  art: PropTypes.object,
};
