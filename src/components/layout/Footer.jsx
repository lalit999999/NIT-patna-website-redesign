import React from "react";
import Logo from "../../images/images";

const Footer = () => {
  return (
    <footer
      className="bg-[#4a0e0e] text-white/90 pt-16 pb-8 border-t-4 border-yellow-500"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div>
          <div className="w-2xl">
            <Logo />
          </div>
          <h4 className="font-bold text-lg mb-2 uppercase">NIT Patna</h4>
          <address className="not-italic text-sm opacity-80 leading-loose">
            Ashok Rajpath, Mahendru, Patna, Bihar 800005 <br />
            Phone: 0612-2371715 <br />
            Email: info@nitp.ac.in
          </address>
        </div>

        <div>
          <h4 className="font-bold border-b border-white/20 pb-2 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Departments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                NIRF
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                RTI
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold border-b border-white/20 pb-2 mb-4">
            Useful Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                How to Reach
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Tenders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Academic Calendar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold border-b border-white/20 pb-2 mb-4">
            Patna
          </h4>
          <div className="text-sm">Loading weather data...</div>
          <div className="mt-4 flex gap-2">
            <span className="bg-white/10 px-2 py-1 rounded">
              Visitors: 140071
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-[10px] opacity-60">
        <p>
          © 2026 National Institute of Technology Patna. All Rights Reserved.
        </p>
        <p>Developed & Maintained by WDC NIT Patna</p>
      </div>
    </footer>
  );
};

export default Footer;
