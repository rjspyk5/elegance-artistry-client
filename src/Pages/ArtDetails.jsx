import { useLoaderData, useNavigate } from "react-router-dom";

export const ArtDetails = () => {
  const artData = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="mx-2 md:mx-0 bg-base-200 rounded-lg card my-8 p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-work-sans">
        <img
          src={artData.photo}
          alt="Art Image"
          className="rounded-md h-[3000px] w-full md:h-[100%] "
        />

        <div>
          <div className="space-y-4  flex-grow border-[#13131326]">
            <h1 className="font-bold pl-4 text-4xl  font-playfair">
              {artData.art_name}
            </h1>

            <p className="pl-4 font-semibold text-lg">
              Description:{" "}
              <span className="font-normal text-base">
                {artData.description}
              </span>
            </p>
          </div>

          <table className="table max-w-96 border-separate">
            <tbody>
              <tr>
                <td className="font-semibold text-lg">Product ID:</td>
                <td> {artData._id}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg">Price:</td>
                <td> {artData.price && `$${artData.price}`}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg">Rating:</td>
                <td> {artData.rating}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg"> Customization:</td>
                <td> {artData.customization}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg">Category:</td>
                <td>{artData.subcategory_Name}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg">Process Time:</td>
                <td>{artData.process_time}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg">Stock:</td>
                <td>{artData.stock}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg">User:</td>
                <td>{artData.username}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg">Contact Email:</td>
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
