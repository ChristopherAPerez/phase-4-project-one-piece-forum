import React from "react";
import { useNavigate } from "react-router-dom"

function ForumList({ forum }) {

    const navigate = useNavigate()

    function handleClick() {
        navigate("/forum_page/" + forum.id)
    }


    return (
        <div className="forumList">
            <br></br>
            <h2 className="forumTitle" onClick={handleClick}>{forum.title}</h2>
            <p>Created: {forum.created_at.substr(0, 10)}</p>
        </div>
    )
}

export default ForumList;