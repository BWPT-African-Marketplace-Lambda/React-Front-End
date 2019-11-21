import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { fetchUserInfo } from "../actions/userItems"
import { fetchItems } from "../actions/fetchItems"
import { updateUserBio } from "../actions/updateUserBio"
import UserCard from "./UserCard"
import styled from "styled-components";
import defaultAvatar from "../images/default-avatar.png"
import UserItem from "./UserItem"

function UserPage(props) {
  const [defaultImg, setDefaultImg] = useState("")


  const StyledH1 = styled.h1`
    font-size: 2.5rem; font-weight: 300; color: #ffcc66; margin: 0 0 24px;
  `;

  const StyledDiv = styled.div`
    padding: 5%;
  `;

  const StyledStrong = styled.strong`
  color: #7c795d; font-family: 'Trocchi', serif; font-size: 5rem; font-weight: normal; line-height: 48px; margin: 0;
  `;

  useEffect(() => {
    props.fetchUserInfo()
    props.fetchItems()
    setDefaultImg(defaultAvatar)
  }, [])

  return (
    <>
      {/* if our async action creator errors, we want to show that error to the user */}
      {props.userInfoError && <p>Error: {props.userInfoError}</p>}
      {props.isInfoLoading ? (
        <h1>Loading...</h1>
      ) : (
          <div>
            <StyledDiv>
              <StyledH1>
                Welcome to your personal Account
              </StyledH1>
              <hr></hr>
            </StyledDiv>
      
            <UserCard
              userBio={props.userBio}
              updateUserBio={props.updateUserBio}
              userInfo={props.userInfo}
              defaultImg={defaultImg}
              setDefaultImg={setDefaultImg}
            />



            {/* {props.userBio.items.map((item, index) => (
          <UserItem userItem={item} key={index} />
            ))} */}
          </div>
        )}
    </>
  )
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo.fetchUserItems,
    isInfoLoading: state.user.isLoading,
    userInfoError: state.user.error,
    userBio: state.userBio.userBio
  }
}

const mapDispatchToProps = {
  // send a version of our action creator that's attached to
  // the dispatcher to the component as a prop
  fetchUserInfo,
  fetchItems,
  updateUserBio
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
