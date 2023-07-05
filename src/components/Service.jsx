import DoorToDoor from "../assets/images/door-to-door.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="space-y-5">
      <img src={DoorToDoor} className="w-24" alt="document-storage" />
      <div className="pb-6 space-y-1">
        <h4 className="font-bold">Door to Door Storage</h4>
        <p className="">We pick up, store & deliver</p>
      </div>
      <a
        href="#"
        className="text-sky-500 font-bold text-md flex justify-start items-center gap-3 cursor-pointer"
      >
        Learn More <FaArrowRightLong />
      </a>
    </div>
  );
};

export default Service;
