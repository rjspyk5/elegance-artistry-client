import second from "../assets/images/bg2.jpg";
import { Link } from "react-router-dom";
export const MyartsCard = ({ art, handledelete }) => {
  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <img src={second} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>SubCatagory</p>
        <h2 className="card-title">{art._id}</h2>
        <p>Rating :</p>
        <p>Price :</p>
        <div className="flex justify-between">
          <Link to={`/update/${art._id}`} className="btn">
            Edit
          </Link>
          <button onClick={() => handledelete(art._id)} className="btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
