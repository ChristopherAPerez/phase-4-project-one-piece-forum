import React from "react"


function PageHeader( { forum } ) {


    return (
        <>
            <img src={forum.forum_image} alt={forum.forum_image} width="200" height="400" />
            <h2>{forum.title}</h2>
            <h3>Details:<br></br></h3>
            <p>{forum.detail}</p>
            <div className="line"></div>
        </>
    )
}

export default PageHeader;