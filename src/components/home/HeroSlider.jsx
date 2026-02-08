import React from "react";

const HeroSlider = () => {
  return (
    <section
      className="relative h-[400px] md:h-[600px] bg-slate-200 overflow-hidden"
      aria-label="Campus Highlights"
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent z-10" />
      <img
        src="https://nitp-database-s3.s3.ap-south-1.amazonaws.com/MainEntrance.webp"
        alt="NIT Patna Campus"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center px-8 md:px-24">
        <div className="max-w-2xl text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Transforming Education Since 1886
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Contributing to India and the World through excellence in scientific
            and technical education.
          </p>
          <div className="flex gap-4">
            <button className="bg-red-800 hover:bg-red-900 px-6 py-3 font-bold rounded">
              Explore Programs
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black px-6 py-3 font-bold rounded">
              Campus Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
