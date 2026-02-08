import React from "react";
import TopUtilityBar from "./components/layout/TopUtilityBar.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import HeroSlider from "./components/home/HeroSlider.jsx";
import QuickLinks from "./components/home/QuickLinks.jsx";
import NoticeBoard from "./components/home/NoticeBoard.jsx";
import ResearchStats from "./components/home/ResearchStats.jsx";
import DirectorDesk from "./components/home/DirectorDesk.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-red-100 selection:text-red-900">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-yellow-500 focus:p-4 focus:text-black"
      >
        Skip to main content
      </a>

      <header>
        <TopUtilityBar />
        <Navbar />
      </header>

      <main id="main-content" className="flex-grow">
        {/* Visual Hierarchy as per requirements */}
        <HeroSlider />
        <QuickLinks />

        <div className="mt-20">
          <NoticeBoard />
        </div>

        <section className="py-12 bg-slate-50 border-y border-slate-200">
          <DirectorDesk />
        </section>

        <ResearchStats />

        {/* Campus Life & Facilities Placeholder */}
        <section className="py-20 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Experience NIT Patna
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Discover a vibrant campus culture and world-class academic
            excellence in the heart of Bihar.
          </p>
          <div className="content-center w-full flex justify-center item-center">
            <video
              className="w-[70vw] h-[70vh] rounded-xl"
              src="https://files.catbox.moe/s2hv8f.mp4"
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
