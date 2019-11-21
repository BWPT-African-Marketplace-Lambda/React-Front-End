import React, { useEffect, useState } from 'react'
import EditUserPhoto from "./EditUserPhoto"
import EditBioForm from "./EditBioForm"
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Dropdown } from "react-bootstrap";

function UserCard(props) {
  console.log("UserCard", props)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <>
      <div className="userCard">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <Dropdown.Toggle 
          className=""
          variant="link"
          id="dropdown-basic">
            Edit Information
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
              <EditBioForm
                userBio={props.userBio}
                updateUserBio={props.updateUserBio} />
            </Dropdown.Item>
            <Dropdown.Item />
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <img src={localStorage.getItem("photo") || props.defaultImg} alt="profile avatar" />



        <h1>{props.userInfo.email}</h1>
      </div>
    </>
  )
}



export default UserCard
