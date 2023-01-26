import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
// import React from "react";

function ForumList({ user, comment, updateComments, DeleteComment }) {

    const navigate = useNavigate()
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

    function handleProfile() {
        if (user.id === comment.user_id) {
            navigate("/profile")
        }
    }

    function handleLike() {
        fetch(`update_likes/${comment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                likes: comment.likes += 1
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((update) => {
                        updateComments(update)
                    });
                }
            })
    }

    return (
        <div className="comment" >
            {isEditing ? (
                <div className="commentContainer" >
                    <img className="comment_avatar" onClick={handleProfile} src={comment.user.avatar_image} alt={comment.user.avatar_image} width="75" height="75" />
                    <form onSubmit={handleUpdate}>
                        <input
                            type="text"
                            name=""
                            autoComplete="off"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <br></br>
                        <p>Posted: {comment.created_at.substr(0, 10)}</p>
                        <br></br>
                        <input className="button" type="submit" value="Save" />
                    </form>
                </div>
            ) : (
                <div className="commentContainer" >
                    <img onClick={handleProfile} className="comment_avatar" src={comment.user.avatar_image} alt={comment.user.avatar_image} width="75" height="75" />
                    <div>
                        <p>{comment.user_comment}</p>
                        <p>Posted: {comment.created_at.substr(0, 10)}</p>
                    </div>
                    <div>
                        <div></div>
                        <button className="commentButton" onClick={() => handleEdit((isEditing) => !isEditing)} >📝</button>
                        <button className="commentButton" onClick={handleDelete}>☠️</button>
                        <div className="likeContainer" >
                            <button className="likeButton" onClick={handleLike}>{comment.likes} ❤️</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ForumList;