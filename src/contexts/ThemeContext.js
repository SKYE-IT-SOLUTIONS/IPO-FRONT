import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightTheme, setisLightTheme] = useState(true);

  const light = { syntax: "#000", ui: "linear-gradient(to right, #000428, #004e92)", bg: "#eee", color: "red", f_ic_bg:"#212529", f_c_bg:"#000", copyright:"#ffffff99" };//footer_icon_bg,footer_content_bg
  const dark = { syntax: "#fff", ui: "linear-gradient(to right, #000428, #004e92)", bg: "#555", color: "blue", f_ic_bg:"#212529", f_c_bg:"#000", copyright:"#ffffff99" };
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
        fonts:fonts,
        toggleTheme: toggleTheme,
      }}
    >
    {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
