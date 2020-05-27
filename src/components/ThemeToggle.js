import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() { 
        const {toggleTheme, isLightMode, light, dark} = this.context
        const theme = isLightMode ? light : dark;
        console.log(theme)
        return ( 
            <span id="themeBtn" onClick={toggleTheme} style={{backgroundColor: theme.subColor}}></span>
         );
    }
}
 
export default ThemeToggle;