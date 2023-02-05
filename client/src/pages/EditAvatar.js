import React, { useState } from "react";

function EditAvatar({ user, setUser, isEditingAvatar, setIsEditingAvatar }) {


    const [avatar, setAvatar] = useState(user.avatar_image);

    function handleSubmit(e) {

        e.preventDefault();

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar_image: avatar
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((update) => {
                        setUser(update)
                        setIsEditingAvatar(!isEditingAvatar)
                    });
                } else {
                    r.json().then((err) => {
                        alert(err.error)
                        setIsEditingAvatar(!isEditingAvatar)
                    })
                }
            })
    }

    return (
        <>

            <img className="avatar" src={user.avatar_image} alt={user.avatar_image} width="200" height="200" />

            <form onSubmit={handleSubmit}>

                <h3>Upload Avatar:</h3>
                <input
                    type="text"
                    name=""
                    autoComplete="off"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />

                <input className="button" type="submit" value="Save" />
            </form>
        </>
    );
}

export default EditAvatar;