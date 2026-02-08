import React from "react";

const stats = [
  { label: "PATENTS", value: "411", icon: "💡" },
  { label: "BOOKS", value: "567", icon: "📚" },
  { label: "PROJECTS", value: "576", icon: "🛠️" },
  { label: "ARTICLES", value: "4,668", icon: "📄" },
];

const ResearchStats = () => {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 border-b-2 border-red-800 inline-block pb-2">
          RESEARCH HIGHLIGHTS
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-8 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="text-4xl block mb-4">{s.icon}</span>
              <div className="text-4xl font-black mb-2">{s.value}</div>
              <div className="text-xs font-bold text-red-500 tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchStats;
