import React, { useState } from 'react'
import EditUserPhoto from "./EditUserPhoto"
import EditBioForm from "./EditBioForm"


function UserCard(props) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <>
      <div className="userCard">
        <EditUserPhoto
          userBio={props.userBio}
          updateUserBio={props.updateUserBio}
          defaultImg={props.defaultImg}
          setDefaultImg={props.setDefaultImg} />
        <img className="userImg" src={localStorage.getItem("photo") || props.defaultImg} alt="profile avatar" />
        <hr/>
        <EditBioForm
          userBio={props.userBio}
          updateUserBio={props.updateUserBio} />
        <p>{props.userBio.username}</p>
        <p>{props.userBio.email}</p>
        <p>{props.userBio.about}</p>
      </div>
    </>
  )
}



export default UserCard
