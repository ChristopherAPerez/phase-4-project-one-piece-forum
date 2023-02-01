import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Comment({ user, comment, updateComments, DeleteComment }) {

    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)
    const [newComment, setNewComment] = useState("")


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

    function handleProfile() {
        if (user.id === comment.user_id) {
            navigate("/profile")
        }
    }

    function handleEdit() {
        setIsEditing(!isEditing)
    }


    return (
<>
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
        </>
    )
}

export default Comment;