import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchUserInfo } from "../actions/userItems"
import UserItem from "./UserItem"
import UserCard from "./UserCard"

function userPage(props) {
  useEffect(() => {
    props.fetchUserInfo();
  }, [])

  return (
    <>
      {/* if our async action creator errors, we want to show that error to the user */}
      {props.userInfoError && <p>Error: {props.userInfoError}</p>}
      {props.isInfoLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="userPage">
          <UserCard userInfo={props.userInfo.user} />
          <h1>My Items</h1>
          {props.userInfo.user.items.map((item, index) => {
          <UserItem userItem={item} key={index} />
        })}
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
  fetchUserInfo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(userPage);
