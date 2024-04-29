import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MyartsCard } from "../Components/MyartsCard";
import Swal from "sweetalert2";
export const MyArtList = () => {
  const {
    user: { email },
  } = useContext(AuthContext);

  const [filter, setfilter] = useState("all ");
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
      setloading(true);
      fetch(`https://elegance-artistry-server.vercel.app/myart/${email}`)
        .then((res) => res.json())
        .then((r) => {
          const up = r.filter((el) => el.customization === "Possible");
          setloading(false);
          setuserArts(up);
        })
        .catch(() => setloading(false));
    }
    if (filter === "no") {
      const up = userArts.filter((el) => el.customization === "Not Possible");
      setuserArts(up);
    }
    if (filter === "all") {
      setloading(true);
      fetch(`https://elegance-artistry-server.vercel.app/myart/${email}`)
        .then((res) => res.json())
        .then((r) => {
          setloading(false);
          setuserArts(r);
        })
        .catch((err) => setloading(false));
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
        setloading(true);
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
            setloading(false);
            setuserArts(updateArts);
          })
          .catch((err) => setloading(false));
      }
    });
  };

  return (
    <>
      <label htmlFor="">Fiter</label>
      <select
        onChange={(e) => setfilter(e.target.value)}
        name="rating"
        className="p-2 "
      >
        <option value="all">All data</option>
        <option value="c">Customizable</option>
        <option value="no">Not Customizable</option>
      </select>
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {userArts.map((el) => (
          <MyartsCard handledelete={handleDelete} art={el} key={el._id} />
        ))}
      </div>
    </>
  );
};
