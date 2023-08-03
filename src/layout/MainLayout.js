import React, { Children } from "react";


import Header from "./Header";
import Footer from "./Footer";

const MainLayout = (props) => {
    const {children} = props;
    return (
        <div className="App">
            <header className="App-header">
                <Header className='top_header' id='header' title='this is the header' />
            </header>

            <body className='App-body'>
                <div className='App-body-content'>
                    {children}
                </div>
            </body>


            <footer className='App-footer'>
                <Footer />
            </footer>

        </div>
    )
}

export default MainLayout;