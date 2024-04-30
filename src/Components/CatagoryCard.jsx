import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CatagoryCard = ({ catagoryInfo: { subcategory_Name, image } }) => {
  return (
    <Link
      to={`/catagory/${subcategory_Name}`}
      className={`card flex py-10 space-y-4 flex-col justify-center items-center hover:bg-base-100 bg-base-300 bg-contain hover:cursor-pointer shadow-xl`}
    >
      <img
        className="md:w-36 w-28 h-20  md:h-28 rounded-xl"
        src={image}
        alt=""
      />
      <div className="font-bold text-sm md:text-lg">{subcategory_Name}</div>
    </Link>
  );
};
CatagoryCard.propTypes = {
  catagoryInfo: PropTypes.object,
};
