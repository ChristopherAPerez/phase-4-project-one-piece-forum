import React from "react";
import Activity from "./Activity"

function ActivityList( { userForums } ){

    const commented_forums = userForums.filter((obj, index, self) => {
        return self.findIndex(element => element.id === obj.id) === index
    })

    return (
        <>
        {commented_forums.map((forum) => {
            return <Activity key={forum.id} forum={forum}/>
        })}
        </>
    )
}

export default ActivityList;