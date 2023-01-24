import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "30px",
    };

    return (
        <>
            <br></br>
            <nav>
                <NavLink className="link" to="/profile" style={linkStyle}>Profile</NavLink>
                <NavLink className="link" to="/discussion_board" style={linkStyle}>Discussion Boards</NavLink>
                <NavLink className="link" to="/create_forum" style={linkStyle}>Create Forum</NavLink>
            </nav>
        </>

    );
}

export default NavBar;