import React from "react";
import { useNavigate } from "react-router-dom"

function ForumList({ forum, tokenForum, setPage, updateForum, setTokenForum }) {

    const navigate = useNavigate()

    function handleClick() {
        // fetch(`/forum_page/${forum.id}`)
        // .then((r) => r.json())
        // .then((info) => {
        //     setPage(!page)
        //     setForumPage(info)
        // });

        // fetch(`update_forum/${forum.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         views: forum.views += 1
        //     }),
        // })
        //     .then((r) => r.json())
        //     .then((update) => {
        //         updateForum(update)
        //         setPage(forum.id)
        //     });
        setTokenForum(forum)
        setPage(forum.id)
        navigate("/forum_page")
        console.log(forum)
    }


    return (
        <div>
            <p onClick={handleClick}>{forum.title}</p>
            <p>{forum.views}</p>
        </div>
    )
}

export default ForumList;