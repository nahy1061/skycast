import React from "react";
import { useTheme } from "./ThemeContext";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`transition-colors duration-300 ${
        isDark
          ? "bg-slate-900/90 backdrop-blur-sm border-t border-blue-900/30 shadow-lg shadow-black/20"
          : "bg-slate-50 border-t border-blue-200"
      }`}
    >
  
      {/* SIZING OPTIONS: Adjust py-4 (compact), py-6 (standard), py-10 (spacious) */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-5 md:py-6">
        {/* Main Content - Fully Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-3 md:gap-6">
          {/* Left: Brand */}
          <div className="text-center sm:text-left">
            <h3
              className={`text-lg sm:text-xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-cyan-100" : "text-slate-900"}`}
            >
              SkyCast
            </h3>
            <p
              className={`text-xs max-w-xs transition-colors duration-300 ${isDark ? "text-blue-300/70" : "text-slate-600"}`}
            >
              Real-time weather
            </p>
          </div>

          {/* Middle: Links */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center sm:justify-start">
            {["About", "Contact", "Privacy"].map((link) => (
              <a
                key={link}
                href="#"
                className={`text-xs sm:text-xs font-medium transition-all duration-300 ${isDark ? "text-blue-200/70 hover:text-cyan-300" : "text-slate-700 hover:text-blue-600"}`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-3 sm:gap-4 md:gap-5">
            {[
              { Icon: FaGithub, label: "GitHub" },
              { Icon: FaTwitter, label: "Twitter" },
              { Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className={`text-sm sm:text-base transition-all duration-300 hover:scale-125 ${isDark ? "text-blue-300/60 hover:text-cyan-300" : "text-slate-600 hover:text-blue-600"}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-4 sm:my-5 transition-colors duration-300 ${isDark ? "border-t border-blue-900/20" : "border-t border-blue-200"}`}
        ></div>

        {/* Bottom */}
        <div
          className={`text-center text-xs transition-colors duration-300 ${isDark ? "text-blue-300/50" : "text-slate-600"}`}
        >
          <div className="flex flex-col gap-2">
            <p> © {currentYear} SkyCast. All rights reserved.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
