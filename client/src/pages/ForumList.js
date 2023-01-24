import React from "react";
import { useNavigate } from "react-router-dom"

function ForumList({ forum, setPage }) {

    const navigate = useNavigate()

    function handleClick() {
        // fetch(`/forum_page/${forum.id}`)
        // .then((r) => r.json())
        // .then((info) => {
        //     setPage(!page)
        //     setForumPage(info)
        // });
        setPage(forum.id)
        console.log(forum.id)
        navigate("/forum_page")
    }

    return (
        <div>
            <p onClick={handleClick}>{forum.title}</p>
            <br></br>
            <br></br>
        </div>
    )
}

export default ForumList;