import { Link, useLoaderData } from "react-router-dom";

export const AllArtAndCrafts = () => {
  const artsData = useLoaderData();

  return (
    <div className="my-10 bg-base-200 md:p-5 mx-2 rounded-lg">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr className="*:px-1 *:md:px-3">
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {artsData.map((el, idx) => {
              return (
                <tr className="px-1 md:px-3" key={el._id}>
                  <th className="px-1 md:px-3">{idx + 1}</th>
                  <td className="px-1 md:px-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8 md:w-12 md:h-12">
                        <img src={el.photo} alt="Arts image" />
                      </div>
                    </div>
                  </td>
                  <td className="px-1 md:px-3">{el.arts_name}</td>
                  <td className="px-1 md:px-3">{el.price}</td>
                  <td className="px-1 md:px-3">{el.stock}</td>
                  <td className="px-1 md:px-3">{el.email}</td>
                  <td className="px-1 md:px-3">
                    {" "}
                    <Link
                      to={`/art/${el._id}`}
                      className="btn px-[2px] md:px-2  bg-lime-500 text-white btn-xs md:btn-sm"
                    >
                      {" "}
                      View Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
