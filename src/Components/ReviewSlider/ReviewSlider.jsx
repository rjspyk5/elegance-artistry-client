import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SectionHeading } from "../SectionHeading";
import { ReviewCard } from "./ReviewCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ReviewSlider = () => {
  const [reviews, setreviews] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://elegance-artistry-server.vercel.app/review")
      .then((res) => res.json())
      .then((r) => {
        setloading(false);
        setreviews(r);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleReview = (e) => {
    e.preventDefault();

    if (user?.email) {
      const review = e.target.review.value;
      fetch("https://elegance-artistry-server.vercel.app/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          review,
          author: user?.displayName || user?.email,
          photo: user.photoURL,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          fetch("https://elegance-artistry-server.vercel.app/review")
            .then((res) => res.json())
            .then((r) => setreviews(r))
            .catch((err) => console.log(err));
          Swal.fire({
            title: "Review added succussfully",
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
  var settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <SectionHeading heading="Latest Reviews" />
      <div>
        {" "}
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        <div className=" mx-auto">
          <Slider {...settings}>
            {reviews &&
              reviews.slice(-7).map((el) => {
                return <ReviewCard key={el._id} review={el} />;
              })}
          </Slider>
        </div>
      </div>

      <div className="mt-7 w-full md:w-2/4 mx-auto">
        <form onSubmit={handleReview} action="">
          <textarea
            placeholder="write review"
            className="border border-opacity-50 bg-transparent p-4 w-full rounded-lg "
            name="review"
            id=""
            rows="5"
          ></textarea>
          <br />
          <div className="flex justify-center">
            <input
              className="btn text-white hover:bg-lime-700 bg-lime-400"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
