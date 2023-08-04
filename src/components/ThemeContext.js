
import React from "react"


// 
const ThemeContext = React.createContext();

const ThemeChanger = ({ children }) => {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <>
            <ThemeContext.Provider value= {{theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider >
        </>
    )

}

export  {ThemeContext, ThemeChanger};