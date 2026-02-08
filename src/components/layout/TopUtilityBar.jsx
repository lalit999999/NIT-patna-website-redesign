import React from "react";

const TopUtilityBar = () => {
  return (
    <div
      className="bg-slate-900 text-white text-xs py-2 px-4 hidden md:block"
      role="complementary"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400">
            Jobs@NITP
          </a>
          <a href="#" className="hover:text-yellow-400">
            Fee Payment
          </a>
          <a href="#" className="hover:text-yellow-400">
            Intranet
          </a>
          <a href="#" className="hover:text-yellow-400">
            Academic Portal (New)
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span>Accessibility: A- A A+</span>
          <div className="flex gap-2 ml-4">
            {/* Social Icons Placeholder */}
            <span className="opacity-70 hover:opacity-100 cursor-pointer">
              Twitter
            </span>
            <span className="opacity-70 hover:opacity-100 cursor-pointer">
              LinkedIn
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUtilityBar;
