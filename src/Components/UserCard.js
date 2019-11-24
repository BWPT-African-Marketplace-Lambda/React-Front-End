import React, { useEffect, useState } from 'react'
import EditUserPhoto from "./EditUserPhoto"
import EditBioForm from "./EditBioForm"
import { logout } from "./logout"
import { Dropdown } from "react-bootstrap";

function UserCard(props) {
  console.log("UserCard", props)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <>
      <div className="userCard">
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            id="dropdown-basic">
            Edit Photo
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <EditUserPhoto
                userBio={props.userBio}
                updateUserBio={props.updateUserBio}
                defaultImg={props.defaultImg}
                setDefaultImg={props.setDefaultImg} />
            </Dropdown.Item>
            <Dropdown.Item>

            </Dropdown.Item>
            <Dropdown.Item />
            <Dropdown.Item onClick={() => logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <img className="userImg" src={localStorage.getItem("photo") || props.defaultImg} alt="profile avatar" />
        <EditBioForm
          userBio={props.userBio}
          updateUserBio={props.updateUserBio} />
        <h3>{props.userBio.username}</h3>
        <h3>{props.userBio.email}</h3>
        <h3>{props.userBio.about}</h3>
      </div>
    </>
  )
}



export default UserCard
