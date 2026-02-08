import React from "react";

const links = [
  { name: "ADMISSIONS", icon: "🎓" },
  { name: "TRAINING AND PLACEMENT", icon: "💼" },
  { name: "Study In India", icon: "🇮🇳" },
  { name: "RECRUITMENT", icon: "📝" },
  { name: "ALUMNI", icon: "🤝" },
  { name: "International Affairs", icon: "🌐" },
];

const QuickLinks = () => {
  return (
    <div className="container mx-auto px-4 -mt-12 relative z-30">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {links.map((link) => (
          <button
            key={link.name}
            className="bg-white p-6 shadow-xl hover:shadow-2xl transition-all rounded-lg flex flex-col items-center text-center gap-3 group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
              {link.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
