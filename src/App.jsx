import React from 'react'
import Home from './pages/Home'
import { ThemeProvider } from './components/ThemeContext'

const App = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <div className="app-container">
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App