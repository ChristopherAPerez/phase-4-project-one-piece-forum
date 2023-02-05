import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "20px",
    };


    return (
        <>
            <br></br>
            <nav className="navbar">
                <NavLink className="link1" to="/profile" style={linkStyle}>Profile</NavLink>
                <NavLink className="link2" to="/activity" style={linkStyle} >Activity</NavLink>
                <NavLink className="link3" to="/discussion_board" style={linkStyle}>Discussion Boards</NavLink>
                <NavLink className="link4" to="/create_forum" style={linkStyle}>Create Forum</NavLink>
            </nav>
            <br></br>
            <div className="navborder"></div>
        </>

    );
}

export default NavBar;