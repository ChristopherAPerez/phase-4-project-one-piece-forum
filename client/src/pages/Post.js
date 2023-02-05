import React, { useState } from "react"

function Post( { user, comments, forum, setComments } ) {

    const [post, setPost] = useState("")

    function handleSubmit(e) {

        e.preventDefault();

        fetch("comments", {
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
        .then((r) => {
            if (r.ok) {
                r.json().then((newPost) => {
                    setComments([...comments, newPost])
                });
            } else {
                alert("Don't be shy! Share your opinion!")
            }
        })
        setPost("")
    }


    return (
        <>
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
        </>
    )
}

export default Post;