import React from "react";
import { Link } from "react-router-dom";

import AppRouter from "../components/AppRouter";

function Header(props) {
    // To get the properties use the '...' next to the variable name
    function header_prop_button(passed_props) {
        event.preventDefault();
        const { children, ...extra } = passed_props;

        console.log(`Children var stored: ${children}`)

        // extra.forEach(element => {
        //     console.log(`extra: ${element}`)
        // });
    }
    return (
        <>
            <h1>Welcome to Jashish's Website</h1>
            <div>
                <p>
                    <Link to="/AllItems" >All Items</Link><span> | </span>
                    <Link to="/TodoList" >Todo List</Link><span> | </span>
                    <Link to="/FunFact" >Fun Fact</Link><span> | </span>
                    <Link to="/Counter" >Counter</Link><span> | </span>
                </p>
            </div>
        </>
    );
}


// Exporting
export default Header;