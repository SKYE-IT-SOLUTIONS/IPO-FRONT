import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightTheme, setisLightTheme] = useState(true);

  const light = { syntax: "#555", ui: "#ddd", bg: "#eee", color: "red" };
  const dark = { syntax: "#ddd", ui: "#333", bg: "#555", color: "blue" };

  const toggleTheme = () => {
    setisLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: isLightTheme,
        light: light,
        dark: dark,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
