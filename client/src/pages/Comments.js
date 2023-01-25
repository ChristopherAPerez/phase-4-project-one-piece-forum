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
            } else {
                alert("Unathorized, not your comment!")
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
            .then((r) => {
                if (r.ok) {
                    r.json().then((update) => {
                        updateComments(update)
                        setIsEditing(!isEditing)
                    });
                } else {
                    alert("Unathorized, not your comment!")
                    setIsEditing(!isEditing)
                }
            })

    }

    return (
        <div className="comment" >
            {isEditing ? (
                <form className="commentContainer" onSubmit={handleUpdate}>
                    <input
                        type="text"
                        name=""
                        autoComplete="off"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <input className="button" type="submit" value="Save" />
                </form>
            ) : (
                <div className="commentContainer" >
                    <img className="comment_avatar" src={comment.user.avatar_image} alt={comment.user.avatar_image} width="75" height="75" />
                    <div>
                        <p>{comment.user_comment}</p>
                        <p>Posted: {comment.created_at.substr(0, 10)}</p>
                    </div>
                    <button className="comment_button" onClick={() => handleEdit((isEditing) => !isEditing)} >📝</button>
                    <button className="comment_button" onClick={handleDelete}>☠️</button>
                </div>
            )}
        </div>
    )
}

export default ForumList;