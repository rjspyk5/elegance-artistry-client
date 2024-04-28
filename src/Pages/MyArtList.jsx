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

  useEffect(() => {
    fetch(`http://localhost:5000/myart/${email}`)
      .then((res) => res.json())
      .then((r) => setuserArts(r))
      .catch((err) => console.log(err));
  }, [email, userArts]);

  const handleFilter = (e) => {
    setfilter(e.target.value);
    if (filter) {
      const updated = userArts.filter((el) => el.customization === "Possible");
      setuserArts(updated);
    }
    if (filter === "no") {
      const updated = userArts.filter(
        (el) => el.customization === "Not Possible"
      );
      setuserArts(updated);
    }
  };

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
        fetch(`http://localhost:5000/art/${id}`, {
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
      <label htmlFor="">Fiter</label>
      <select onChange={handleFilter} name="rating" className="p-2 ">
        <option value="all">All data</option>
        <option value={true}>Customizable</option>
        <option value="no">Not Customizable</option>
      </select>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {userArts.map((el) => (
          <MyartsCard handledelete={handleDelete} art={el} key={el._id} />
        ))}
      </div>
    </>
  );
};
