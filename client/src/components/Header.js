import React from "react";
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
    <div>
      <h1 onClick={handleHome}>🏴‍☠️ One Piece Forum 🏴‍☠️</h1>
      {user ? (
        <>
          <button onClick={handleLogoutClick} >Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  )
}

export default Header;