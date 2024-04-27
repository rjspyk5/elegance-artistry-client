import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MyartsCard } from "../Components/MyartsCard";

export const MyArtList = () => {
  const [filter, setfilter] = useState("all ");
  const {
    user: { email },
  } = useContext(AuthContext);

  const [userArts, setuserArts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myart/${email}`)
      .then((res) => res.json())
      .then((r) => setuserArts(r))
      .catch((err) => console.log(err));
  }, [email, userArts]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/art/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updateArts = userArts.filter((el) => el._id != id);
        setuserArts(updateArts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <label htmlFor="">Fiter</label>
      <select
        onChange={(e) => {
          setfilter(e.target.value);
        }}
        name="rating"
        className="p-2 "
      >
        <option value="all">All data</option>
        <option value="customizable">Customizable</option>
        <option value="ncustomizable">Not Customizable</option>
      </select>
      <p>{filter}</p>
      {userArts.map((el) => (
        <MyartsCard handledelete={handleDelete} art={el} key={el._id} />
      ))}
    </div>
  );
};
