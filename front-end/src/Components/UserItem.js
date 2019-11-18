import React from 'react'

function UserItem(props) {
  return (
    <div>
      <h1>{props.userItem.name}</h1>
      <img src={props.userItem.photo_url} alt="item" />
      <h1>{props.userItem.price}</h1>
      <h1>{props.userItem.description}</h1>
    </div>
  )
}

export default UserItem
