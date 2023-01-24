import React, { useState } from "react";
// import React from "react";

function ForumList({ comment, updateComments, DeleteComment }) {

    const [isEditing, setIsEditing] = useState(false)
    const [newComment, setNewComment] = useState("")

    function handleEdit() {
        setIsEditing(!isEditing)
    }

    function handleDelete() {
        fetch(`delete_comment/${comment.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                DeleteComment(comment.id);
            }
        });
    }

    function handleUpdate(e) {

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
                updateComments(update)
                setIsEditing(!isEditing)
            });

    }

    // onSubmit={handleUpdate}

    return (
        <>
            {isEditing ? (
                <form onSubmit={handleUpdate}
                >
                    <input
                        type="text"
                        name=""
                        autoComplete="off"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <input type="submit" value="Save" />
                </form>
            ) : (
                <div>
                    <br></br>
                    <img src={comment.user.avatar_image} alt={comment.user.avatar_image} width="50" height="50" />
                    <p>{comment.user_comment}</p>
                    <p>Posted: {comment.created_at.substr(0, 10)}</p>
                    <br></br>
                    <button onClick={() => handleEdit((isEditing) => !isEditing)} >Edit</button>
                    <br></br>
                    <button onClick={handleDelete}>Remove</button>
                    <br></br>
                </div>
            )}
        </>
    )
}

export default ForumList;