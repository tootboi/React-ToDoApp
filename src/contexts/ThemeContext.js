import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({
        isLightMode: true,
        light: {todoColor:'black', subColor:'rgb(51, 51, 51)', bgColor:'white'},
        dark: {todoColor:'gray', subColor:'gray', bgColor:'rgb(51, 51, 51)'}
    });
    const toggleTheme = () => {
        setTheme({
            isLightMode: !theme.isLightMode,
            light: {todoColor:'black', subColor:'rgb(51, 51, 51)', bgColor:'white'},
            dark: {todoColor:'gray', subColor:'gray', bgColor:'rgb(51, 51, 51)'}
        });
        document.getElementsByTagName('body')[0].classList.toggle('darkMode')
    }
    return (
        <ThemeContext.Provider value={{...theme, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;