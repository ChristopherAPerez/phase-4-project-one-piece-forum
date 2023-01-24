import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header"
import NavBar from "./NavBar"

import LoggedIn from "./LoggedIn"
import Profile from "../pages/Profile"
import DiscussionBoard from "../pages/DiscussionBoard"
import ForumPage from "../pages/ForumPage"
import CreateForum from "../pages/CreateForum"

import LoggedOut from "./LoggedOut"
import LoginForm from "../pages/LoginForm"
import SignUpForm from "../pages/SignUpForm";



// import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState(null);
  const [forums, setForums] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/forums").then((r) => {
      if (r.ok) {
        r.json().then((info) => setForums(info));
      }
    });
  }, []);


  return (
    <div className="App">

      {user ? (
        <>
          <Header user={user} setUser={setUser} />
          <NavBar />
        </>
      ) : (
        <Header />
      )}

      <br></br>
      <br></br>

      <main>
        {user ? (

          <Routes>
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />}>
            </Route>
            <Route path="/discussion_board" element={<DiscussionBoard forums={forums} setPage={setPage}/>}>
            </Route>
            <Route path="forum_page" element={<ForumPage user={user} page={page} />}>
            </Route>
            <Route path="create_forum" element={<CreateForum forums={forums} setForums={setForums}/>}>
            </Route>
            <Route path="/" element={<LoggedIn user={user} />}>
            </Route>
          </Routes>

        ) : (

          <Routes>
            <Route path="/signup" element={<SignUpForm setUser={setUser} />}>
            </Route>
            <Route path="/login" element={<LoginForm setUser={setUser} />}>
            </Route>
            <Route path="/" element={<LoggedOut user={user} />}>
            </Route>
          </Routes>

        )}
      </main>

    </div>
  );
}

export default App;
