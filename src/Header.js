import React from "react";

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
            {/* Getting properties */}
            
             {/*<div {...props}>
                 <button type="button" onClick={header_prop_button(props.children)}>Click for Spreading</button> 
                 {props.children} 
             </div> */} 
        </>
    );
}


// Exporting
export default Header;