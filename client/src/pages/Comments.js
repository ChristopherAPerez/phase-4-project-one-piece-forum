import React, { useState } from "react";

function ForumList({ comment }) {

    const [isEditing, setIsEditing] = useState(false)
    const [newComment, setNewComment] = useState(comment.user_comment)

    function handleClick() {
        setIsEditing(!isEditing)
    }

    function handleSubmit(e) {

        e.preventDefault();

        fetch(`update_comment/${comment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_comment: newComment
            }),
        })
            .then((r) => r.json())
            .then((update) => {
                setNewComment(update)
            });

        setIsEditing(!isEditing)

    }

    return (
        <form onSubmit={handleSubmit}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name=""
                        autoComplete="off"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <input type="submit" value="Save" />
                </>
            ) : (
                <>
                    <p>{comment.user_comment}</p>
                    <button onClick={handleClick} >Edit</button>
                </>
            )}
        </form >
    )
}

export default ForumList;