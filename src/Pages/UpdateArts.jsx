import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bg from "../assets/images/bgnew.png";

export const UpdateArts = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const handlepdate = (e) => {
    e.preventDefault();
    const art_name = e.target.name.value;
    const description = e.target.description.value;
    const photo = e.target.photo.value;
    const email = data.email;
    const username = data.displayName || "unknown";
    const subcategory_Name = e.target.subcategory.value;
    const price = e.target.price.value;
    const process_time = e.target.time.value;
    const customization = e.target.customization.value;
    const rating = e.target.rating.value;
    const stock = e.target.stock.value;
    const dataa = {
      art_name,
      description,
      photo,
      username,
      email,
      subcategory_Name,
      price,
      process_time,
      customization,
      rating,
      stock,
    };
    fetch(`https://elegance-artistry-server.vercel.app/art/${data._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataa),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Update succussfully",
          background: `#fff url(${bg})`,
          icon: "success",
          customClass: {
            title: "text-[green]",
          },
        });
        e.target.reset();
        navigate("/myart");
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err}`,
          customClass: {
            title: "text-[red]",
          },
        })
      );
  };
  return (
    <div className="mt-5">
      <button
        className="btn bg-lime-500 text-white"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        back
      </button>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-base-200 card mb-10 py-16 px-24 max-w-[1000px] rounded-lg">
          <h1 className="text-3xl  text-center">Update Details</h1>

          <form onSubmit={handlepdate} action="" className="mt-4">
            <label>Arts Name</label>
            <br />
            <input
              defaultValue={data.art_name}
              name="name"
              type="text"
              placeholder="Name of the art"
              className="w-full rounded-md p-1 mb-3"
            />
            <br />
            <label>Description</label>
            <br />
            <textarea
              defaultValue={data.description}
              name="description"
              placeholder="Description"
              className="w-full p-1 mb-3 rounded-md "
              rows="5"
            ></textarea>

            <br />
            <label>Photo</label>
            <br />
            <input
              defaultValue={data.photo}
              name="photo"
              placeholder="Photo Url"
              type="text"
              className="w-full p-1 mb-3 rounded-md "
            />
            <br />
            <div className=" flex flex-col md:flex-row gap-5 ">
              <div className="md:w-[50%] w-full *:rounded-md">
                <label>User Name</label>
                <br />
                <input
                  name="user"
                  defaultValue={data?.displayName || "unknown"}
                  placeholder="UserName"
                  type="text"
                  className="w-full p-1 mb-3"
                />
                <br />
              </div>
              <div className="md:w-[50%] w-full *:rounded-md">
                <label>Email</label>
                <br />
                <input
                  name="email"
                  placeholder="Your Email"
                  disabled
                  value={data?.email}
                  type="text"
                  className="w-full p-1 mb-3"
                />
                <br />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 ">
              <div className="md:w-[50%] w-full *:rounded-md">
                <label htmlFor="name">Subcategory</label>
                <br />
                <select
                  defaultValue={data.subcategory_Name}
                  name="subcategory"
                  className="p-2 w-full"
                >
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
                <br />
                <label>Rating</label>
                <br />
                <input
                  defaultValue={data?.rating}
                  name="rating"
                  type="text"
                  placeholder="Rating"
                  className="w-full p-1 mb-3"
                />
                <label htmlFor="name">Price</label>
                <br />
                <input
                  defaultValue={data?.price}
                  name="price"
                  type="number"
                  placeholder="Enter Price"
                  className="w-full p-1 mb-3"
                />
                <br />
              </div>
              <div className="md:w-[50%] w-full *:rounded-md ">
                <label htmlFor="name">Processing Time</label>
                <br />
                <input
                  defaultValue={data?.process_time}
                  name="time"
                  placeholder="Processing Time"
                  type="text"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Customization</label>
                <br />
                <select
                  defaultValue={data?.customization}
                  name="customization"
                  className="p-2 w-full"
                >
                  <option value="Possible">Possible</option>
                  <option value="Not Possible">Not Possible</option>
                </select>
                <br />
                <label htmlFor="name">Stock Status</label>
                <br />
                <select
                  defaultValue={data.stock}
                  name="stock"
                  className="p-2 w-full"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Made to order">Made to Order</option>
                </select>
                <br />
              </div>
            </div>

            <input
              type="submit"
              value="Update Changes"
              className="w-full p-1 bg-lime-500 text-white btn cursor-pointer  rounded-md "
            />
          </form>
        </div>
      </div>
    </div>
  );
};
