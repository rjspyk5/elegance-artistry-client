import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import bg from "../assets/images/bgnew.png";

import Swal from "sweetalert2";

export const AddArtIteam = () => {
  const { user } = useContext(AuthContext);

  const handleAddItem = (e) => {
    e.preventDefault();
    const art_name = e.target.name.value;
    const description = e.target.description.value;
    const photo = e.target.photo.value;
    const email = user?.email;
    const username = user?.displayName || "unknown";
    const subcategory = e.target.subcategory.value;
    const price = e.target.price.value;
    const process_time = e.target.time.value;
    const customization = e.target.customization.value;
    const rating = e.target.rating.value;
    const stock = e.target.stock.value;
    const data = {
      art_name,
      description,
      photo,
      username,
      email,
      subcategory,
      price,
      process_time,
      customization,
      rating,
      stock,
    };
    fetch("http://localhost:5000/art", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((r) => {
        console.log(r);
        Swal.fire({
          title: "Iteam added succussfully",
          background: `#fff url(${bg})`,
          icon: "success",
          customClass: {
            title: "text-[green]",
          },
        });
        e.target.reset();
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
    <div>
      <button className="" onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#F4F3F0] mt-10 py-16 px-24 max-w-[1000px] rounded-md">
          <h1 className="text-[#374151] text-3xl  text-center">
            Add Your Arts Iteams
          </h1>

          <form onSubmit={handleAddItem} action="" className="mt-4">
            <label>Arts Name</label>
            <br />
            <input
              name="name"
              type="text"
              placeholder="Name of the art"
              className="w-full p-1 mb-3"
            />
            <br />
            <label>Description</label>
            <br />
            <textarea
              name="description"
              placeholder="Photo Url"
              className="w-full p-1 mb-3 rounded-md "
              rows="5"
            ></textarea>

            <br />
            <label>Photo</label>
            <br />
            <input
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
                  defaultValue={user?.displayName || "unknown"}
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
                  value={user?.email}
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
                <input
                  name="subcategory"
                  type="text"
                  placeholder="Subcatagory Name"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label>Rating</label>
                <br />
                <select name="rating" className="p-2 w-full">
                  <option value="5">Five Star</option>
                  <option value="4">Four Star</option>
                  <option value="3">Three Star</option>
                  <option value="2">Two Star</option>
                  <option value="1">One star</option>
                </select>
                <br />
                <label htmlFor="name">Price</label>
                <br />
                <input
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
                  name="time"
                  placeholder="Processing Time"
                  type="text"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Customization</label>
                <br />
                <select name="customization" className="p-2 w-full">
                  <option value="Possible">Possible</option>
                  <option value="Not Possible">Not Possible</option>
                </select>
                <br />
                <label htmlFor="name">Stock Status</label>
                <br />
                <select name="stock" className="p-2 w-full">
                  <option value="In Stock">In Stock</option>
                  <option value="Made to order">Made to Order</option>
                </select>
                <br />
              </div>
            </div>

            <input
              type="submit"
              value="Add Arts"
              className="w-full p-1  cursor-pointer  rounded-md "
            />
          </form>
        </div>
      </div>
    </div>
  );
};
