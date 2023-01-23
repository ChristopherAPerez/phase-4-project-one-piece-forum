import React from "react";
import { Link } from "react-router-dom";

function ForumList({ forum }) {


    return (
        <>
            <Link to="/">{forum.title}</Link>
        </>
    )
}

export default ForumList;