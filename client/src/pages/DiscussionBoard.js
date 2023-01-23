import React, { useEffect, useState } from "react";
import ForumList from "./ForumList"

function DiscussionBoard() {

  const [forums, setForums] = useState([]);

  useEffect(() => {
    fetch("/forums")
      .then((r) => r.json())
      .then((forum) => setForums(forum));
  }, []);

    return (
      <div>
        {forums.map((forum) => {
          return <ForumList key={forum.id} forum={forum}/>
        })}
      </div>
    )
}
  
export default DiscussionBoard;