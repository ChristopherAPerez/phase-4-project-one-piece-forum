import React from "react";
import { useNavigate } from "react-router-dom"

function ForumList({ forum, setPage }) {

    const navigate = useNavigate()

    function handleClick() {
        setPage(forum.id)
        navigate("/forum_page")
    }


    return (
        <div className="forumList">
            <br></br>
            <h2 onClick={handleClick}>{forum.title}</h2>
            <p>Created: {forum.created_at.substr(0, 10)}</p>
        </div>
    )
}

export default ForumList;