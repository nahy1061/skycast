import { useTheme } from "./ThemeContext";

function Loading() {
  const { isDark } = useTheme();

  return (
    <div className="flex justify-center items-center py-10">
      <div
        className={`w-10 h-10 border-4 rounded-full animate-spin transition-colors duration-300 ${
          isDark
            ? "border-blue-900/30 border-t-cyan-400"
            : "border-blue-200 border-t-blue-600"
        }`}
      />
    </div>
  );
}

export default Loading;
