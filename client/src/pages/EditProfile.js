import React, { useState } from "react";

function EditProfile({ user, setUser, isEditing, setIsEditing }) {


    const [username, setUsername] = useState(user.username);
    const [bio, setBio] = useState(user.bio);

    function handleSubmit(e) {

        e.preventDefault();

        fetch('update_profile', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            bio: bio,
        }),
        })
        .then((r) => r.json())
        .then((update) => {
            setUser(update)
            setIsEditing(!isEditing)
        });
    }

    return (
        <form onSubmit={handleSubmit}>

            <h3>Username: </h3>
            <input
                type="text"
                name=""
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <h3>About me: </h3>
            <input
                type="textarea"
                name=""
                autoComplete="off"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />

            <input type="submit" value="Save" />
        </form>
    );
}

export default EditProfile;