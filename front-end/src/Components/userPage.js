import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchUserInfo } from "../actions/userItems"
import { fetchItems } from "../actions/fetchItems"
import UserCard from "./UserCard"
import styled from "styled-components";

function UserPage(props) {

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
    // props.fetchUserInfo()
    props.fetchItems()

  }, [])

  return (
    <>
      {/* if our async action creator errors, we want to show that error to the user */}
      {props.userInfoError && <p>Error: {props.userInfoError}</p>}
      {props.isInfoLoading ? (
        <h1>Loading...</h1>
      ) : (
          <div className="userPage">
            <UserCard userInfo={props.userInfo} />
            <StyledDiv>
              <StyledH1>
                <StyledStrong>Saudi Africa</StyledStrong>
                <br/>
                 Make a New Listing to the Product Market
              </StyledH1>
              <hr></hr>
            </StyledDiv>
            <h1>My Items</h1>
            {/* {props.userInfo.items.map((item, index) => (
          <UserItem userItem={item} key={index} />
            ))} */}
          </div>
        )}
    </>
  )
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo.user,
    isInfoLoading: state.user.isLoading,
    userInfoError: state.user.error
  }
}

const mapDispatchToProps = {
  // send a version of our action creator that's attached to
  // the dispatcher to the component as a prop
  fetchUserInfo,
  fetchItems
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
