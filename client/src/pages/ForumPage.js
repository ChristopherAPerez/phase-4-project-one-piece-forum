import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Comments from "../pages/Comments"

function ForumPage({ user, page }) {

    const navigate = useNavigate()
    const [forum, setForum] = useState("")
    const [comments, setComments] = useState([])
    const [post, setPost] = useState("")

    useEffect(() => {
        if (page === 0) {
            return navigate("/discussion_board")
        } else {
            fetch(`/forum_page/${page}`).then((r) => {
                if (r.ok) {
                    r.json().then((info) => {
                        setForum(info)
                    });
                } else {
                    console.log("Loading")
                }
            });
        }
    }, [page, navigate]);

    useEffect(() => {
        if (page === 0) {
            return navigate("/discussion_board")
        } else {
            fetch(`/forum_comments/${page}`).then((r) => {
                if (r.ok) {
                    r.json().then((info) => {
                        setComments(info)
                    });
                } else {
                    console.log("Loading")
                }
            });
        }
    }, [page, navigate]);

    function updateComments(update) {
        const updatedComments = comments.map((comment) => {
            if (comment.id === update.id) {
                return update;
            } else {
                return comment;
            }
        });
        setComments(updatedComments);
    }

    function DeleteComment(id) {
        const updatedComments = comments.filter((comment) => comment.id !== id);
        setComments(updatedComments);
    }

    function handleSubmit(e) {

        e.preventDefault();

        fetch("create_comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_comment: post,
                likes: 0,
                user_id: user.id,
                forum_id: forum.id
            }),
        })
            .then((r) => r.json())
            .then((newPost) => {
                setComments([...comments, newPost])
            })
        setPost("")
    }

    return (
        <div>
            <img src={forum.forum_image} alt={forum.forum_image} width="200" height="400" />
            <h2>{forum.title}</h2>
            <h3>Details:<br></br></h3>
            <p>{forum.detail}</p>
            <div className="line"></div>
            <h3>Comments:</h3>
            {comments.map((comment) => {
                return <Comments key={comment.id} user={user} forum={forum} comment={comment} updateComments={updateComments} DeleteComment={DeleteComment} />
            })}
            <form onSubmit={handleSubmit}>
                <br></br>
                <textarea
                    className="post"
                    name=""
                    autoComplete="off"
                    placeholder="Post and add to the discussion here..."
                    value={post}
                    onChange={(e) => setPost(e.target.value)}></textarea>
                <br></br>
                <br></br>
                <input className="button" type="submit" value="Post" />
            </form>

        </div>
    )
}

export default ForumPage;