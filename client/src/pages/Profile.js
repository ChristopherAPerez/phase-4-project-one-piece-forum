import React, { useState } from "react";
import EditProfile from "./EditProfile"
import EditAvatar from "./EditAvatar"

function Profile({ user, setUser }) {

  const [isEditing, setIsEditing] = useState(false)
  const [isEditingAvatar, setIsEditingAvatar] = useState(false)

  return (
    <>
      {isEditingAvatar ? (<>
        <EditAvatar user={user} setUser={setUser} isEditingAvatar={isEditingAvatar} setIsEditingAvatar={setIsEditingAvatar} />
      </>
      ) : (
        <>
          <img className="avatar" src={user.avatar_image} alt={user.avatar_image} width="200" height="200" />
          <br></br>
          <br></br>
          <button className="button" onClick={() => setIsEditingAvatar(!isEditingAvatar)} >Edit Avatar</button>
        </>
      )}

      {isEditing ? (<>
        <EditProfile user={user} setUser={setUser} isEditing={isEditing} setIsEditing={setIsEditing} />
      </>
      ) : (
        <>
          <h3>Username: {user.username}</h3>
          <h3>About me: {user.bio}</h3>
          <button className="button" onClick={() => setIsEditing(!isEditing)} >Edit Profile</button>
        </>
      )}

    </>
  );
}

export default Profile;