import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header"
import NavBar from "./NavBar"
import LoggedIn from "./LoggedIn"
import Profile from "../pages/Profile"
import DiscussionBoard from "../pages/DiscussionBoard"
import CreateForum from "../pages/CreateForum"
import LoggedOut from "./LoggedOut"
import LoginForm from "../pages/LoginForm"
import SignUpForm from "../pages/SignUpForm";
import Page from "../pages/Page"
import Error from "../pages/Error"
import './App.css';

function App() {

  const [user, setUser] = useState(null);
  const [forums, setForums] = useState([]);

  useEffect(() => {
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

  function updateForum(update) {
    const updatedViews = forums.map((forum) => {
        if (forum.id === update.id) {
            return update;
        } else {
            return forum;
        }
    });
    setForums(updatedViews);
}


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
            <Route path="/discussion_board" element={<DiscussionBoard forums={forums} />}>
            </Route>
            <Route path={"forum_page/:id"} element={<Page user={user} />}>
            </Route>
            <Route path="create_forum" element={<CreateForum forums={forums} setForums={setForums} updateForum={updateForum} />}>
            </Route>
            <Route path="/" element={<LoggedIn user={user} />}>
            </Route>
            <Route path="*" element={<Error />}>
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
            <Route path="*" element={<Error />}>
            </Route>
          </Routes>

        )}
      </main>

    </div>
  );
}

export default App;
