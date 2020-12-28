import React from 'react';
import { NavLink } from "react-router-dom";

function Header(props){
    const activeStyle = {color : "orange"};
    return (<nav>
        <NavLink exact activeStyle={activeStyle} to="/">Home</NavLink> | <NavLink activeStyle={activeStyle} to="/courses">Courses</NavLink> | <NavLink activeStyle={activeStyle} to="/about">About</NavLink> | 
        <NavLink activeStyle={activeStyle} to="/form">FormPage</NavLink>
        
    </nav>);
}
export default Header;