import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { fetchUserInfo } from "../actions/userItems"
import { fetchItems } from "../actions/fetchItems"
import { updateUserBio } from "../actions/updateUserBio"
import UserCard from "./UserCard"
import styled from "styled-components";
import defaultAvatar from "../images/default-avatar.png"
import AddListing from "./AddListing"
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

  const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  `

  useEffect(() => {
    props.fetchUserInfo()
    props.fetchItems()
    setDefaultImg(defaultAvatar)
    console.log("This One", props.items)
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

            <Section>
              <UserCard
                userBio={props.userBio}
                updateUserBio={props.updateUserBio}
                userInfo={props.userInfo}
                defaultImg={defaultImg}
                setDefaultImg={setDefaultImg}
              />

              <AddListing />
            </Section>


            {/* {props.items.map((item, index) => (
              <UserItem item={item} key={index} />
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
    userBio: state.userBio.userBio,
    items: state.items.items
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
