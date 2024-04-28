import React from "react";

export const ReviewCard = ({ review }) => {
  return (
    <div className="mx-3">
      <div className="card  bg-base-200 ">
        <div className="flex flex-col items-center p-10">
          <p className="text-center text-2xl mb-4">{review.review}</p>
          <div className="avatar">
            <div className="w-10 mx-auto rounded-full">
              <img src={review.photo} alt="image" />
            </div>
          </div>
          <p className="text-center text-sm opacity-80">
            {" "}
            Author:{review.author}
          </p>
        </div>
      </div>
    </div>
  );
};
