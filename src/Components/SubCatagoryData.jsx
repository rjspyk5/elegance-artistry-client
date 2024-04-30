import { useLoaderData, useParams } from "react-router-dom";
import { CatagoryArtsDetailsCard } from "./CatagoryArtsDetailsCard";
import { SectionHeading } from "./SectionHeading";

export const SubCatagoryData = () => {
  const data = useLoaderData();
  const { sub } = useParams();

  return (
    <>
      <SectionHeading heading={sub} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
        {data.map((el) => (
          <CatagoryArtsDetailsCard key={el._id} art={el} />
        ))}
      </div>
    </>
  );
};
