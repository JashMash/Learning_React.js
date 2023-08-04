import React from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { ThemeContext, ThemeChanger } from "../components/ThemeContext.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header(props) {
    // To get the properties use the '...' next to the variable name
    function header_prop_button(passed_props) {
        event.preventDefault();
        const { children, ...extra } = passed_props;

        console.log(`Children var stored: ${children}`)
    }


    //Getting the theme switcher elements

    const { theme, toggleTheme } = React.useContext(ThemeContext);

    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => {
        setIsOpen(isOpen == true ? false : true);
    }

    return (
        <>
            {/* <nav className="navbar  navbar-light bg-dark">
                <div className="row">
                    <div className="col-10">

                        <h1>Welcome to Jashish's Website</h1>
                    </div>
                    <div className="col-2">
                        <div className="row">
                            <button className="btn bg-dark" color="primary" outline onClick={toggleTheme}>
                                {'Change to ' + (theme == 'light' ? 'Dark' : 'Light') + ' Mode'}
                            </button>
                        </div>
    */}
            {/* <div className="row"> 

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <Link to="/AllItems" >All Items</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <Link className="nav-link" to="/TodoList" >Todo List</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <Link className="nav-link" to="/FunFact" >Fun Fact</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <Link className="nav-link" to="/Counter" >Counter</Link>
                                    </a>
                                </li>
                            </ul>
                            <span class="navbar-text">
                                Navbar text with an inline element
                            </span>
                            </div> 

                        </div>
                    </div>

                </div>
            </nav> */}
            <Navbar color="dark" light expand="md">
                <div className="row">
                    <div className="col-10">

                        <h1>Welcome to Jashish's Website</h1>
                    </div>
                    <div className="col-2">
                        <div className="row">
                            <button className="btn" outline onClick={toggleTheme} type="button">
                                {'Change to ' + (theme == 'light' ? 'Dark' : 'Light') + ' Mode'}
                            </button>
                        </div>
                        <div className="row">
                            {/* <NavbarToggler  className="btn bg-light"onClick={toggle} /> */}
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <button type="button" className="btn" outline >
                                                Items
                                            </button>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <a className="nav-link">
                                                    <Link to="/AllItems" >All Items</Link>
                                                </a>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="nav-link" to="/TodoList" >Todo List</Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="nav-link" to="/FunFact" >Fun Fact</Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="nav-link" to="/Counter" >Counter</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>

                        </div>
                    </div>
                </div>

            </Navbar >
        </>
    );
}


// Exporting
export default Header;