import React from "react"
import Comment from "./Comment"

function PageComments( { user, comments, updateComments, DeleteComment } ) {

    return (
        <>
            <h3>Comments:</h3>
            {comments.map((comment) => {
                return <Comment key={comment.id} user={user} comment={comment} updateComments={updateComments} DeleteComment={DeleteComment} />
            })}
        </>
    )
}

export default PageComments;