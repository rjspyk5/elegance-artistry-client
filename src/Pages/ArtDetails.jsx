import { useLoaderData, useNavigate } from "react-router-dom";

export const ArtDetails = () => {
  const artData = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-work-sans">
        <img
          src={artData.photo}
          alt=""
          className="rounded-md md:max-w-[300px] max-w-[200px]"
        />

        <div>
          <div className="space-y-4  flex-grow border-[#13131326]">
            <h1 className="font-bold pl-4 text-4xl  font-playfair">
              {artData.art_name}
            </h1>

            <p className="pl-4 font-semibold text-[#131313CC]">
              Description:{" "}
              <span className="font-normal">{artData.description}</span>
            </p>
          </div>

          <table className="table max-w-96 border-separate">
            <tbody>
              <tr>
                <td className="font-semibold">Product ID:</td>
                <td> {artData._id}</td>
              </tr>
              <tr>
                <td className="font-semibold">Price:</td>
                <td> {artData.price}</td>
              </tr>
              <tr>
                <td className="font-semibold">Rating:</td>
                <td> {artData.rating}</td>
              </tr>
              <tr>
                <td className="font-semibold"> Customization:</td>
                <td> {artData.customization}</td>
              </tr>
              <tr>
                <td className="font-semibold">Subcategory:</td>
                <td>{artData.subcategory}</td>
              </tr>
              <tr>
                <td className="font-semibold">Process Time:</td>
                <td>{artData.process_time}</td>
              </tr>
              <tr>
                <td className="font-semibold">Stock:</td>
                <td>{artData.stock}</td>
              </tr>
              <tr>
                <td className="font-semibold">User:</td>
                <td>{artData.username}</td>
              </tr>
              <tr>
                <td className="font-semibold">Contact Email:</td>
                <td>{artData.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="ml-4 mt-3">
            <button
              onClick={() => navigate(-1)}
              className="btn text-white bg-lime-500"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
