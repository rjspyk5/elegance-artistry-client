import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export const MyArtList = () => {
  const {
    user: { email },
  } = useContext(AuthContext);

  const [userArts, setuserArts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myart/${email}`)
      .then((res) => res.json())
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  }, [email]);

  return <div>MyArtList</div>;
};
