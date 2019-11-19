import React from 'react'
import { connect } from 'react-redux';
import { addItem } from "../actions/addItem"

function AddListing(props) {
  return (
    <div>
      
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo.user,
    newItem: state.newItem.newItem
  }
}

const mapDispatchToProps = {
  addItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddListing)
