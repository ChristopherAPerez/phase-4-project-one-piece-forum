import React from "react";
import ForumList from "./ForumList"
// import ForumPage from "./ForumPage";


function DiscussionBoard( { forums, setPage } ) {

    // const [forums, setForums] = useState([]);
    // const [page, setPage] = useState(false)
    // const [forumPage, setForumPage] = useState({})


    // useEffect(() => {
    //     fetch("/forums")
    //         .then((r) => r.json())
    //         .then((forum) => setForums(forum));
    // }, []);

    // function handleClick(){
    //     console.log(forumPage)
    // }


    return (
        <div>
            {forums.map((forum) => {
                    return <ForumList key={forum.id} forum={forum} setPage={setPage} />
                })}
            {/* {page ? (
                <ForumPage page={page} setPage={setPage} forumPage={forumPage} />
                <p onClick={handleClick}>test</p>
            ) : (
                forums.map((forum) => {
                    return <ForumList key={forum.id} forum={forum} page={page} setPage={setPage} setForumPage={setForumPage}/>
                })
            )} */}
        </div>
    )
}

export default DiscussionBoard;