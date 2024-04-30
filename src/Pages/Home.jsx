import { Carasoul } from "../Components/Carasoul";
import { ArtsShowcase } from "../Components/ArtsShowcase";
import { ReviewSlider } from "../Components/ReviewSlider/ReviewSlider";
import { Catagory } from "../Components/Catagory";
import { FAQ } from "../Components/FAQ";
import { Fade, JackInTheBox } from "react-awesome-reveal";
export const Home = () => {
  return (
    <div className=" ">
      <Fade>
        <Carasoul />
      </Fade>

      <div className="mx-3">
        <Fade duration={1500}>
          <ArtsShowcase />
        </Fade>
        <Fade duration={1000}>
          <Catagory />
        </Fade>
        <Fade duration={1000}>
          <ReviewSlider />
        </Fade>
        <Fade duration={500}>
          <FAQ />
        </Fade>
      </div>
    </div>
  );
};
