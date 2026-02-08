import React from "react";

const DirectorDesk = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 text-center">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-slate-100 shadow-lg mb-4">
            <img
              src="https://i.postimg.cc/6pWBW8Dg/PKJ-Desk-Photo-1.jpg"
              alt="Prof. Pradip K. Jain"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Prof. Pradip K. Jain
          </h3>
          <p className="text-red-800 font-bold">Director, NIT Patna</p>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Director's Message
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6 italic text-lg">
            "It gives me immense pleasure to lead one of North India's oldest
            technical institutes, with roots tracing back to 1876. We continue
            our legacy of excellence in engineering education."
          </p>
          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-6 py-2 rounded font-bold text-sm">
              Read Full Message
            </button>
            <button className="text-red-800 font-bold text-sm">
              View Profile →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorDesk;
