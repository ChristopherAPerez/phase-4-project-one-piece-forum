import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Comments from "../pages/Comments"

function ForumPage({ page }) {

    // const navigate = useNavigate();
    const [forum, setForum] = useState("")
    const [comments, setComments] = useState([])


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

        </div>
    )
}

export default ForumPage;