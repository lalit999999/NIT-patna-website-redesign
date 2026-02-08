import React, { useState } from "react";
import Logo from "../../images/images.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    "Institute",
    "Administration",
    "Academics",
    "Faculty & Staff",
    "Students",
    "Facilities",
  ];

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md shadow-sm border-b border-gray-100"
      role="navigation"
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <Logo />

          <div>
            <h1 className="text-sm md:text-base font-bold text-slate-900 uppercase leading-tight">
              National Institute of Technology Patna
            </h1>
            <p className="text-[10px] text-slate-500 italic">
              An Institution of National Importance, Govt. of India
            </p>
          </div>
        </div>

        <ul className="hidden lg:flex gap-6 font-semibold text-slate-700">
          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:text-red-800 cursor-pointer transition-colors px-2 py-1"
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
