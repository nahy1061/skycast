import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <div className="app-container flex flex-col flex-1">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
