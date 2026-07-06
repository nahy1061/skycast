import React from "react";
import { useTheme } from "./ThemeContext";

function ErrorMessage({ message }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`max-w-xl mx-auto rounded-lg px-4 py-3 text-center text-sm sm:text-base transition-all duration-300 ${
        isDark
          ? "bg-red-950/40 border border-red-800/50 text-red-200"
          : "bg-red-50 border border-red-200 text-red-700"
      }`}
    >
      {message}
    </div>
  );
}

export default ErrorMessage;
