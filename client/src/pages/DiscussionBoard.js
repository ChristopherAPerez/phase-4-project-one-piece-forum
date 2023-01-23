import React, { useEffect, useState } from "react";
import ForumList from "./ForumList"
import ForumPage from "./ForumPage";

function DiscussionBoard() {

    const [forums, setForums] = useState([]);
    const [page, setPage] = useState(false)

    const [title, setTitle] = useState("")
    const [topic, setTopic] = useState("")
    const [image, setImage] = useState("")
    const [views, setViews] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("/forums")
            .then((r) => r.json())
            .then((forum) => setForums(forum));
    }, []);

    function handleClick(){
        setPage(!page)
        console.log(title, topic, image, views, comments)
    }

    return (
        <div>
            {page ? (
                <ForumPage title={title} topic={topic} image={image} views={views} comments={comments} />
            ) : (
                forums.map((forum) => {
                    return <ForumList key={forum.id} forum={forum} page={page} setPage={setPage} setTitle={setTitle} setTopic={setTopic} setImage={setImage} setViews={setViews} setComments={setComments} />
                })
            )}
        </div>
    )
}

export default DiscussionBoard;