import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function SignUpForm({ setUser }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        avatar_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-0mkKKgu3s1V6HfJC5lI8ajzieHjqpwddhPfdXSNfw&s",
        bio: ""
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
        window.location.reload();
      } else {
        r.json().then((err) => {
            alert(err.errors)
        })
    }
    });
    navigate("/")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button className="button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;