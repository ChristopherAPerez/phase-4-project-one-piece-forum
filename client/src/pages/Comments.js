import React, { useState } from "react";

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
              DeleteComment(comment);
            }
          });
     setIsEditing(!isEditing)
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

    return (
        <form onSubmit={handleUpdate}>
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
                    {/* <button onClick={handleEdit} >Edit</button> */}
                    <br></br>
                    <button onClick={handleDelete()}>Remove</button>
                </>
            )}
        </form >
    )
}

export default ForumList;