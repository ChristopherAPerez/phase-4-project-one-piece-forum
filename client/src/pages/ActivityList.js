import React from "react";
import Activity from "./Activity"

function ActivityList( { userForums } ){

    const commented_forums = userForums.filter((obj, index, self) => {
        return self.findIndex(t => t.id === obj.id) === index
    })

    console.log(commented_forums)

    return (
        <>
        {commented_forums.map((forum) => {
            return <Activity key={forum.id} forum={forum}/>
        })}
        </>
    )
}

export default ActivityList;