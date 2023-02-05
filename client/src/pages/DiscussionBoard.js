import React from "react";
import ForumList from "./ForumList"

function DiscussionBoard( { forums } ) {

    return (
        <div>
            {forums.map((forum) => {
                    return <ForumList key={forum.id} forum={forum} />
                })}
        </div>
    )
}

export default DiscussionBoard;