import { createContext, useEffect, useState } from "react";
import Service from "./Service";
import axios from "axios";

export const ItemContext = createContext();

const Landing = () => {
  const [landingData, setLandingData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://static-landing-backend.skdhar.com/landing`)
      .then((res) => setLandingData(res.data.services))
      .catch((err) => console.log(err));
  }, []);

  console.log({ landingData });
  return (
    <div className="space-y-20">
      <div className="head-section pt-6 space-y-3 sm:space-y-4 md:space-y-8">
        <h1 className=" sm:px-6 lg:px-28 xl:px-40 leading-relaxed text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-center">
          Explore Our Storage Space, Co-Working Space, Co-Warehouse & Services
        </h1>
        <h5 className="text-sm sm:text-md md:text-xl text-center">
          Carefully crafted for a hassle-free and affordable experience
        </h5>
      </div>

      <div className="spaces grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-16 sm:px-12 md:px-10 lg:px-14 pb-12">
        {landingData?.map((item) => (
          <ItemContext.Provider key={item} value={item}>
            <Service />
            {/* <Service key={item.title} item={item} /> */}
          </ItemContext.Provider>
        ))}
      </div>
    </div>
  );
};

export default Landing;
