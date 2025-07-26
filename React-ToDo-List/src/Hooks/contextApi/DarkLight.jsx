import "./index.css";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const hendleToggleClick = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, hendleToggleClick }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, hendleToggleClick } = useContext(ThemeContext);
  return (
    <div
      className={`p-12 h-lvh flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1 className={`text-4xl  ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
        Dark Light mode website
      </h1>
      <p className={`text-4xl ${theme === "dark" ? "text-white" : "text-gray-800"}`}>Hello!!</p>
      <button
        onClick={hendleToggleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        {theme === "dark" ? "Switch to light Mode" : "Switch to dark Mode"}
      </button>
    </div>
  );
};
