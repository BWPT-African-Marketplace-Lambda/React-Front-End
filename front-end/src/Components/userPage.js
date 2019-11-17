import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchUserInfo } from "../actions/userItems"
function userPage() {
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
          <h1>My Items</h1>
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
