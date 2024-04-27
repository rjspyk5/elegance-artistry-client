import React from "react";

export const AddArtIteam = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
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
              name="Photo"
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
                  placeholder="Subcategoryr Name"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label>Rating</label>
                <br />
                <input
                  name="rating"
                  type="number"
                  placeholder="Rating"
                  className="w-full p-1 mb-3"
                />
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
                <label htmlFor="name">Taste</label>
                <br />
                <input
                  name="Taste"
                  type="text"
                  placeholder="Enter Coffe Taste"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Price</label>
                <br />
                <input
                  name="price"
                  type="text"
                  placeholder="Enter Coffe price"
                  className="w-full p-1 mb-3"
                />
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
