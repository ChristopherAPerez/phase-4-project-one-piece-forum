import React from "react";
import logo from "../images/op_black_logo.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Header({ user, setUser }) {

  const navigate = useNavigate()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    navigate("/")
  }

  function handleHome() {
    navigate("/")
  }

  return (
    <div className="header">
      {/* <h1 onClick={handleHome}>🏴‍☠️ One Piece Forum 🏴‍☠️</h1> */}
      <div>
        <br></br>
        <img src={logo} alt={logo} onClick={handleHome} />
        <h1>Forum</h1>
      </div>
      {user ? (
        <>
          <button className="button" onClick={handleLogoutClick} >Logout</button>
        </>
      ) : (
        <>
          <Link className="link" to="/signup">Signup</Link>
          <Link className="link" to="/login">Login</Link>
        </>
      )}
    </div>
  )
}

export default Header;