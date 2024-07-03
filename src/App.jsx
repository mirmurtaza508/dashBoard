import React, { useContext, useState } from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeProvider, themeContext } from "./contexts/themeContext";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeProvider>
      <main className="flex">
        <SideBar setIsDarkApp={setIsDark} />
        <div
          className={`pl-20 w-full overflow-hidden z-10 ${
            isDark ? "bg-black" : "bg-wihte"
          }`}
        >
          <Outlet />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
