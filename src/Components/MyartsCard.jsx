import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const MyartsCard = ({ art, handledelete }) => {
  return (
    <div className="card card-compact bg-base-200 shadow-xl">
      <figure>
        <img
          className="h-[244px] w-full rounded-t-2xl"
          src={art.photo}
          alt="Art image"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold">{art.art_name}</h2>
        <p className="font-bold text-xl">
          Price :{" "}
          <span className="text-lg font-normal">
            {art.price && `$${art.price}`}
          </span>
        </p>
        <p className="font-bold text-xl">
          Rating : <span className="text-lg font-normal">{art.rating}</span>
        </p>

        <p className="font-bold text-xl">
          Customization :{" "}
          <span className="text-lg font-normal">{art.customization}</span>
        </p>
        <p className="font-bold text-xl">
          Stock : <span className="text-lg font-normal">{art.stock}</span>
        </p>
        <div className="grid grid-cols-2 gap-5">
          <Link
            to={`/update/${art._id}`}
            className="w-full bg-lime-500 text-white btn"
          >
            Edit
          </Link>
          <button
            onClick={() => handledelete(art._id)}
            className="btn bg-red-500 text-white w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
MyartsCard.propTypes = {
  art: PropTypes.object,
  handledelete: PropTypes.func,
};
