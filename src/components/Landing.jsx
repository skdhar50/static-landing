import Service from "./Service";

const Landing = () => {
  return (
    <div className="space-y-20">
      <div className="head-section space-y-8">
        <h1 className="px-40 leading-relaxed text-4xl font-bold text-center">
          Explore Our Storage Space, Co-Working Space, Co-Warehouse & Services
        </h1>
        <h5 className="text-xl text-center">
          Carefully crafted for a hassle-free and affordable experience
        </h5>
      </div>

      <div className="spaces grid grid-cols-4 gap-x-3 gap-y-16 px-14 pb-12">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default Landing;
