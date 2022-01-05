import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightTheme, setisLightTheme] = useState(false);

  const light = { syntax: "#000", ui: "linear-gradient(to right, #000428, #004e92)", bg: "#eee", color: "red", footer:{syntax:"#000",f_ic_bg:"yellow", f_c_bg:"green", copyright:"#333"},button:{enable:"red",disable:"grey",login:"linear-gradient(to right, #41295a, #2f0743)",submit:"linear-gradient(to top, #000000, #434343)"} };//footer_icon_bg,footer_content_bg
  const dark = { syntax: "#000", ui: "linear-gradient(to right, #000428, #004e92)", bg: "#555", color: "blue", footer:{syntax:"#fff",f_ic_bg:"#212529", f_c_bg:"rgba(0,0,0,0.2)", copyright:"#ffffff99"},button:{enable:"red",disable:"grey",login:"linear-gradient(to right, #41295a, #2f0743)",submit:"linear-gradient(to top, #000000, #434343)"} };
  const fonts = { general:"'Quicksand',sans-serif",address:"time new roman",topLogo:'"Lora", serif',title:"'Righteous', cursive"};


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
