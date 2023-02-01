import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function CreateForum({ forums, setForums }) {

    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [topic, setTopic] = useState("Discussion")
    const [image, setImage] = useState("")
    const [details, setDetails] = useState("")

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
                detail:  details,
                forum_image: image
            }),
        })

        .then((r) => {
            if (r.ok) {
                r.json().then((newForum) => {
                    setForums([...forums, newForum])
                    navigate("/discussion_board")
                });
            } else {
                alert("Forum needs a title!")
            }
        })

    }

    return (
        <div className="forumForm">

            <br></br>

            <form onSubmit={handleSubmit}>


            <label>Topic:</label><br></br>
                <select onChange={(e) => setTopic(e.target.value)} >
                    <option value="Discussion">Discussion</option>
                    <option value="Battle">Battle</option>
                    <option value="Theory">Theory</option>
                    <option value="Review">Review</option>
                </select>

                <br></br>

                <label>Title:</label><br></br>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <br></br>

                <label>Image:</label><br></br>
                <textarea value={image} onChange={(e) => setImage(e.target.value)} rows="2" cols="30"></textarea>

                <br></br>

                <label>Details:</label><br></br>
                <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows="4" cols="45"></textarea>

                <br></br>

                <input className="button" type="submit" />

            </form>

        </div>
    )
}

export default CreateForum;