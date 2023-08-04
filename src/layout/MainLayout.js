import React, { Children } from "react";

import '../assests/lightApp.css';
import '../assests/darkApp.css';

import Header from "./Header";
import Footer from "./Footer";

import { ThemeContext } from "../components/ThemeContext";

const MainLayout = (props) => {
    const { children } = props;
    const { theme } = React.useContext(ThemeContext);
    return (
        <>
            <div id="App">
                <header className={theme==='light'? 'light_mode':'dark_mode'} id="App-header">
                    <Header id='header' />
                </header>

                <body className={theme==='light'? 'light_mode':'dark_mode'} id='App-body'>
                    <div className={theme==='light'? 'light_mode':'dark_mode'} id='App-body-content'>
                        {children}
                    </div>
                </body>


                <footer className={theme==='light'? 'light_mode':'dark_mode'} id='App-footer'>
                    <Footer />
                </footer>

            </div>
        </>
    )
}

export default MainLayout;