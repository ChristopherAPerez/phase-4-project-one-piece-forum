import React from "react";

function ForumList({ forum, page, setPage, setTitle, setTopic, setImage, setViews, setComments }) {

    function handleClick() {
        console.log(forum)
        setPage(!page)
        setTitle(forum.title)
        setTopic(forum.topic)
        setImage(forum.forum_image)
        setViews(forum.views)
        setComments(forum.comments)
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