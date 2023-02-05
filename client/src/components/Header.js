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
    window.location.reload()
  }

  function handleHome() {
    navigate("/")
  }

  return (
    <div className="header">
      <div>
        <br></br>
        <img className="logo" src={logo} alt={logo} onClick={handleHome} />
      </div>
      {user ? (
        <>
        <br></br>
          <button className="button" onClick={handleLogoutClick} >Logout</button>
        </>
      ) : (
        <>
        <br></br>
        <br></br>
          <Link className="link" to="/signup">Signup</Link>
          <Link className="link" to="/login">Login</Link>
        </>
      )}
    </div>
  )
}

export default Header;