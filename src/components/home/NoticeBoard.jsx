import React from "react";

const NoticeSection = ({ title, items }) => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
    <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-300">
      <h3 className="font-bold text-red-900 text-lg uppercase tracking-tight">
        {title}
      </h3>
      <a href="#" className="text-blue-700 text-sm font-bold hover:underline">
        View all
      </a>
    </div>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="group">
          <span className="text-[10px] text-slate-500 font-bold block mb-1">
            {item.date}
          </span>
          <p className="text-sm font-medium leading-snug group-hover:text-blue-800 cursor-pointer">
            {item.text}
          </p>
          {item.link && (
            <span className="text-xs text-red-700 font-bold mt-1 inline-block">
              View Notice
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const NoticeBoard = () => {
  const generalNotices = [
    {
      date: "03 Feb 2026",
      text: "Advertisement for JRF recruitment under the C2S project",
      link: true,
    },
    {
      date: "18 Dec 2025",
      text: "Registration Notice for session Jan-June 2026",
      link: true,
    },
  ];

  return (
    <section
      className="py-16 container mx-auto px-4 grid md:grid-cols-3 gap-8"
      aria-label="Notices and Events"
    >
      <NoticeSection title="General Notices" items={generalNotices} />
      <NoticeSection
        title="Events"
        items={[
          {
            date: "09 July 2026",
            text: "5th International Conference on Electrical Technologies",
          },
        ]}
      />
      <NoticeSection
        title="Academic Notices"
        items={[
          {
            date: "06 Feb 2026",
            text: "Notice regarding Open Ph.D. Viva-voce of Mohammad Umair Zaki",
          },
        ]}
      />
    </section>
  );
};

export default NoticeBoard;
