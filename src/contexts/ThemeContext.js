import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightTheme, setisLightTheme] = useState(false);

  const light = { syntax: "#000", ui: "linear-gradient(to right, #000428, #004e92)", bg: "#eee", color: "red", footer:{syntax:"#000",f_ic_bg:"yellow", f_c_bg:"green", copyright:"#333"} };//footer_icon_bg,footer_content_bg
  const dark = { syntax: "#000", ui: "linear-gradient(to right, #000428, #004e92)", bg: "#555", color: "blue", footer:{syntax:"#fff",f_ic_bg:"#212529", f_c_bg:"#000", copyright:"#ffffff99"} };
  const fonts = { general:"'Quicksand',sans-serif",address:"time new roman" };


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
