import React from 'react'

function UserItem(props) {
  console.log("from the userItem",props)
  return (
    <div>
      <h1>Hello</h1>
      <h1>{props.item.name}</h1>
      <img src={props.item.photo_url} alt="item" />
      <h1>{props.item.price}</h1>
      <h1>{props.item.description}</h1>
    </div>
  )
}

export default UserItem
