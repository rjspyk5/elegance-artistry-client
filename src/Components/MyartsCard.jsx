import second from "../assets/images/bg2.jpg";
import { Link } from "react-router-dom";
export const MyartsCard = ({ art, handledelete }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={second} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>SubCatagory</p>
        <h2 className="card-title">{art._id}</h2>

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
        <p>Price :</p>
        <div className="flex justify-between">
          <div className="btn">Edit</div>
          <Link onClick={() => handledelete(art._id)} className="btn">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};
