import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MyartsCard } from "../Components/MyartsCard";
import Swal from "sweetalert2";
export const MyArtList = () => {
  const {
    user: { email },
  } = useContext(AuthContext);

  const [filter, setfilter] = useState("all");
  const [userArts, setuserArts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(`https://elegance-artistry-server.vercel.app/myart/${email}`)
      .then((res) => res.json())
      .then((r) => {
        setloading(false);
        setuserArts(r);
      })
      .catch(() => setloading(false));
  }, [email]);

  useEffect(() => {
    if (filter === "c") {
      setuserArts([]);
      setloading(true);
      fetch(`https://elegance-artistry-server.vercel.app/myart/${email}`)
        .then((res) => res.json())
        .then((r) => {
          const up = r.filter((el) => el.customization === "Possible");
          setuserArts(up);
          setloading(false);
        })
        .catch(() => setloading(false));
    }
    if (filter === "no") {
      setuserArts([]);
      setloading(true);
      fetch(`https://elegance-artistry-server.vercel.app/myart/${email}`)
        .then((res) => res.json())
        .then((r) => {
          const up = r.filter((el) => el.customization === "Not Possible");
          setuserArts(up);
          setloading(false);
        })
        .catch(() => setloading(false));
    }
    if (filter === "all") {
      setuserArts([]);
      setloading(true);
      fetch(`https://elegance-artistry-server.vercel.app/myart/${email}`)
        .then((res) => res.json())
        .then((r) => {
          setloading(false);
          setuserArts(r);
        })
        .catch(() => setloading(false));
    }
  }, [filter]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5A882E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://elegance-artistry-server.vercel.app/art/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted successfully",
              icon: "success",
            });
            const updateArts = userArts.filter((el) => el._id != id);

            setuserArts(updateArts);
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <>
      <div className="my-8 mx-2">
        <select
          onChange={(e) => setfilter(e.target.value)}
          name="rating"
          defaultValue={"all"}
          className="p-2 w-40 select select-bordered"
        >
          <option value="all">All data</option>
          <option value="c">Customizable</option>
          <option value="no">Not Customizable</option>
        </select>
      </div>

      {loading && (
        <div className="flex justify-center items-center mx-2 min-h-[200px]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div className="min-h-[500px] mb-10 mx-2">
        {!loading && userArts.length < 1 ? (
          <div className="flex justify-center min-h-[300px] items-center">
            <h1 className="text-2xl font-bold">No record Found</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {userArts.map((el) => (
              <MyartsCard handledelete={handleDelete} art={el} key={el._id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
