import React from "react";
import ForumList from "./ForumList"
// import ForumPage from "./ForumPage";


function DiscussionBoard( { forums, setPage } ) {
    return (
        <div>
            {forums.map((forum) => {
                    return <ForumList key={forum.id} forum={forum} setPage={setPage} />
                })}
        </div>
    )
}

export default DiscussionBoard;