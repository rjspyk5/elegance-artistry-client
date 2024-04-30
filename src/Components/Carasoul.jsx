import { useContext, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "./style.css";
import slider from "../assets/images/slider/slider.jpg";
import slider1 from "../assets/images/slider/slider1.jpg";
import slider2 from "../assets/images/slider/slider2.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export const Carasoul = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { user } = useContext(AuthContext);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      dragSpeed: 4,

      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="navigation-wrapper pt-5">
      <div ref={sliderRef} className="keen-slider ">
        <div className="keen-slider__slide ">
          <div
            className="hero rounded-xl min-h-[450px] mz"
            style={{
              backgroundImage: `url(${slider})`,
            }}
          >
            <div className="hero-overlay rounded-xl bg-opacity-60 mz"></div>
            <div className="hero-content text-center text-neutral-content mz">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold">
                  Expore our Art World
                </h1>
                <p className="mb-5">Immerse yourself in creativity</p>
                {!user ? (
                  <Link className="btn bg-lime-500 text-white" to="/login">
                    Join Now
                  </Link>
                ) : (
                  <Link className="btn bg-lime-500 text-white" to="/arts">
                    View Our all arts
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div
            className="hero rounded-xl min-h-[450px] mz"
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          >
            <div className="hero-overlay rounded-xl bg-opacity-60 mz"></div>
            <div className="hero-content text-center text-neutral-content mz">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold">
                  Expore our Art World
                </h1>
                <p className="mb-5">Immerse yourself in creativity</p>
                {!user ? (
                  <Link className="btn bg-lime-500 text-white" to="/login">
                    Join Now
                  </Link>
                ) : (
                  <Link className="btn bg-lime-500 text-white" to="/arts">
                    View Our all arts
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div
            className="hero rounded-xl min-h-[450px] mz"
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          >
            <div className="hero-overlay rounded-xl bg-opacity-60 mz"></div>
            <div className="hero-content text-center text-neutral-content mz">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold">
                  Expore our Art World
                </h1>
                <p className="mb-5">Immerse yourself in creativity</p>
                {!user ? (
                  <Link className="btn bg-lime-500 text-white" to="/login">
                    Join Now
                  </Link>
                ) : (
                  <Link className="btn bg-lime-500 text-white" to="/arts">
                    View Our all arts
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};
