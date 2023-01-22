import React, { useState } from "react";
// import GenreOptions from "./GenreOptions"

function EditAvatar({ user, setUser, isEditingAvatar, setIsEditingAvatar }) {


    const [avatar, setAvatar] = useState(user.avatar_image);

    function handleSubmit(e) {

        e.preventDefault();

        fetch('update_profile', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar_image: avatar
            }),
        })
            .then((r) => r.json())
            .then((update) => {
                setUser(update)
                setIsEditingAvatar(!isEditingAvatar)
            });
    }

    return (
        <>

            <img src={user.avatar_image} alt={user.avatar_image} width="200" height="300" />

            <form onSubmit={handleSubmit}>

                <h3>Upload Avatar:</h3>
                <input
                    type="text"
                    name=""
                    autoComplete="off"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />

                <input type="submit" value="Save" />
            </form>
        </>
    );
}

export default EditAvatar;