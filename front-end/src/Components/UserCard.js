import React, { useEffect } from 'react'
import EditUserPhoto from "./EditUserPhoto"

function UserCard(props) {
  console.log("UserCard", props)

  return (
    <>
      <div className="userCard">
        <img src={props.defaultImg} alt="profile avatar" />
        <span><EditUserPhoto /></span>
        <h1>{props.userInfo.email}</h1>
      </div>
    </>
  )
}



export default UserCard
