import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function CreateForum({ forums, setForums }) {

    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [topic, setTopic] = useState("Discussion")
    const [image, setImage] = useState("")

    function handleSubmit(e) {

        e.preventDefault();

        fetch("create_forum", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                topic: topic,
                forum_image: image,
                views: 0
            }),
        })
            .then((r) => r.json())
            .then((newForum) => {
                setForums([...forums, newForum])
            })
        navigate("/discussion_board")

    }

    return (
        <div className="forumForm">

            <br></br>

            <form onSubmit={handleSubmit}>

                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <br></br>

                <label>Topic:</label>
                <select onChange={(e) => setTopic(e.target.value)} >
                    <option value="Discussion">Discussion</option>
                    <option value="Battle">Battle</option>
                    <option value="Theory">Theory</option>
                    <option value="Review">Review</option>
                </select>

                <br></br>

                <label>Image:</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

                <br></br>

                <input className="button" type="submit" />

            </form>

        </div>
    )
}

export default CreateForum;