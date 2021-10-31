import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightTheme, setisLightTheme] = useState(true);

  const light = { syntax: "#555", ui: "#ddd", bg: "#eee", color: "red",f_ic_bg:"green",f_c_bg:"yellow" };//footer_icon,footer_content
  const dark = { syntax: "#ddd", ui: "#333", bg: "#555", color: "blue",f_ic_bg:"gray",f_c_bg:"blue"  };

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
