import { Link, useLoaderData } from "react-router-dom";

export const AllArtAndCrafts = () => {
  const artsData = useLoaderData();

  return (
    <div className="my-10 bg-base-200 p-5 rounded-lg">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
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
                <tr key={el._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={el.photo} alt="Arts image" />
                      </div>
                    </div>
                  </td>
                  <td>{el.arts_name}</td>
                  <td>{el.price}</td>
                  <td>{el.stock}</td>
                  <td>{el.email}</td>
                  <td>
                    {" "}
                    <Link
                      to={`/art/${el._id}`}
                      className="btn btn-ghost bg-lime-500 text-white btn-sm"
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
