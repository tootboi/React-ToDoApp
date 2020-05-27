import React, {Component, createContext} from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightMode: true,
        light: {todoColor:'black', subColor:'rgb(51, 51, 51)', bgColor:'white'},
        dark: {todoColor:'gray', subColor:'gray', bgColor:'rgb(51, 51, 51)'}
    }
    toggleTheme = () => {
        this.setState((prevState, props) => {
            return { isLightMode: !prevState.isLightMode}
        })
        document.getElementsByTagName('body')[0].classList.toggle('darkMode')
    }
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;