import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightTheme, setisLightTheme] = useState(false);

  const light = { syntax: "#000", ui: "#ddd", bg: "#eee", color: "red", f_ic_bg:"yellow", f_c_bg:"green", copyright:"#ffffff99" };//footer_icon_bg,footer_content_bg
  const dark = { syntax: "#fff", ui: "#333", bg: "#555", color: "blue", f_ic_bg:"#343a40", f_c_bg:"#212529", copyright:"#ffffff99" };
  const fonts = { general:"'Quicksand',sans-serif" };

  const toggleTheme = () => {
    setisLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: isLightTheme,
        light: light,
        dark: dark,
        fonts: fonts,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
