import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PageHeader from "./PageHeader"
import PageComments from "./PageComments"
import Post from "./Post"

function Page({ user }) {

    const navigate = useNavigate()
    const params = useParams()
    const [forum, setForum] = useState({})
    const [comments, setComments] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch(`/forum_page/${params.id}`).then((r) => {
            if (r.ok) {
                r.json().then((info) => {
                    setForum(info)
                });
            } else {
                r.json().then((err) => setErrors(err.errors))
                navigate("*")
            }
        });
    }, [params, navigate, setErrors]);

    useEffect(() => {
        fetch(`/forum_comments/${params.id}`).then((r) => {
            if (r.ok) {
                r.json().then((info) => {
                    setComments(info)
                });
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        });
    }, [params, navigate, setErrors]);

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

    return (
        <div>
            <PageHeader forum={forum} />
            <PageComments user={user} comments={comments} updateComments={updateComments} DeleteComment={DeleteComment} />
            {errors.map((error) => {
                return <p key={error}>{error}</p>
            })}
            <Post user={user} forum={forum} comments={comments} setComments={setComments} />
        </div>
    )
}

export default Page;