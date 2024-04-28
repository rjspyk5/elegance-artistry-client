import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ReviewSlider = () => {
  const [reviews, setreviews] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((r) => setreviews(r))
      .catch((err) => console.log(err));
  }, []);

  const handleReview = (e) => {
    e.preventDefault();

    if (user?.email) {
      const review = e.target.review.value;
      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          review,
          author: user?.displayName || user?.email,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((r) => setreviews(r))
            .catch((err) => console.log(err));
          Swal.fire({
            title: "Iteam added succussfully",
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
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="">
        {reviews &&
          reviews.map((el) => {
            return (
              <div key={el._id} className="">
                {el?.review}
              </div>
            );
          })}
      </div>

      <div>
        <form onSubmit={handleReview} action="">
          <textarea
            placeholder="write review"
            className="border w-full"
            name="review"
            id=""
            rows="5"
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
