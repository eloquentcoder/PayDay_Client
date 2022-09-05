import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [state, setState] = useState({
        isLightTheme: true,
        lightTheme: {
            primaryFontColor: "#222333",
            secondaryFontColor: "#6b6b6d",
            lightFont: "#efefef",
            primaryBG: "#ffffff",
            secondaryBG: "#efefef",
            primaryColor: "#3c4b64",
            secondaryColor: "#efefef",
            transition: "2s ease",
        },
        darkTheme: {
            primaryFontColor: "#ffffff",
            secondaryFontColor: "#a4a4a5",
            lightFont: "#efefef",
            primaryBG: "#2c2c34",
            secondaryBG: "#10101d",
            primaryColor: "#2c2c34",
            secondaryColor: "#181924",
            transition: "2s ease",
        },
    });

    const toggleTheme = () => {
        const { isLightTheme } = state;
        setState({
            ...state,
            isLightTheme: !isLightTheme,
        });
    };

    return (
        <ThemeContext.Provider value={{
            ...state,
            toggleTheme: toggleTheme ,
        }}>
            { props.children }
        </ThemeContext.Provider>
    );
}

export { ThemeContext };
export default ThemeContextProvider;