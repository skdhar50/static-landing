import { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ItemContext } from "./Landing";

const Service = () => {
  const { icon, title, subtitle } = useContext(ItemContext);

  return (
    <div className="space-y-4 flex flex-col justify-between items-baseline sm:space-y-5">
      <img
        src={`https://static-landing-backend.skdhar.com/public/${icon}`}
        className="w-40 h-36 bg-fill sm:w-36 sm:h-42"
        alt={title}
      />
      <div className="pb-2 w-36 space-y-1 sm:space-y-2">
        <h4 className="text-md sm:text-lg font-bold">{title}</h4>
        <p className="text-sm sm:text-md">{subtitle}</p>
      </div>
      <a
        href="#"
        className="text-sky-500 font-bold text-sm sm:text-md flex justify-start items-center gap-3 cursor-pointer"
      >
        Learn More <FaArrowRightLong />
      </a>
    </div>
  );
};

export default Service;
