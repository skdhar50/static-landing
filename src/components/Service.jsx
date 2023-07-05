import DoorToDoor from "../assets/images/door-to-door.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="space-y-3 sm:space-y-5">
      <img src={DoorToDoor} className="w-36 sm:w-24" alt="document-storage" />
      <div className="pb-2 space-y-1 sm:space-y-2">
        <h4 className="text-md sm:text-lg font-bold">Door to Door Storage</h4>
        <p className="text-sm sm:text-md">We pick up, store & deliver</p>
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
