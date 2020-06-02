import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const {toggleTheme, isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;
    return (
        <span id="themeBtn" onClick={toggleTheme} style={{backgroundColor: theme.subColor}}></span>
    );
}
 
export default ThemeToggle;