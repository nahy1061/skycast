import logo from "../assets/logo/sky_cast_logo.png";

function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-1 sm:gap-2 px-4 py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="SkyCast logo"
            className="h-9 w-9 sm:h-10 sm:w-10 object-cover rounded-full border border-slate-200"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
            SkyCast
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 tracking-wide">
          Know before you go
        </p>
      </div>
    </header>
  );
}

export default Header;
