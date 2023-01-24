import React, { useState, useEffect } from "react";
import Comments from "../pages/Comments"

function ForumPage({ page }) {

    const [forum, setForum] = useState("")
    const [comments, setComments] = useState([])
    const [post, setPost] = useState("")


    useEffect(() => {
        fetch(`/forum_page/${page}`).then((r) => {
            if (r.ok) {
                r.json().then((info) => {
                    setForum(info)
                    setComments(info.comments)
                });
            } else {
                // navigate.push("/");
            }
        });
    }, [page]);

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
        console.log(updatedComments)
    }

    function handleSubmit(e){

    }

    //   useEffect(() => {
    //     fetch(`/forum_comments/${page}`).then((r) => {
    //       if (r.ok) {
    //         r.json().then((info) => {
    //             setComments(info)
    //         });
    //       }
    //     });
    //   }, []); 


    function handleClick() {
        console.log(comments)
    }

    return (
        <div>

            <p onClick={handleClick} >{forum.title}</p>
            {comments.map((comment) => {
                return <Comments key={comment.id} comment={comment} updateComments={updateComments} DeleteComment={DeleteComment} />
            })}
            <form>
                <input
                    type="text"
                    name=""
                    autoComplete="off"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />
                <input type="submit" value="Post" />
            </form>

        </div>
    )
}

export default ForumPage;