import React from 'react'

const Header = () => {
  return (
    <div>
       <header className="mb-8 overflow-hidden rounded-4xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">SkyCast</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Weather made easy, elegant, and instant.
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Auto-fetching current weather for Rawalpindi and displaying it in a clean, modern dashboard with bright accent colors and polished cards.
          </p>
          <button
            type="button"
            onClick={getWeatherDetails}
            className="mt-6 inline-flex items-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          >
            Refresh Weather
          </button>
        </header>
    </div>
    
  )
}

export default Header