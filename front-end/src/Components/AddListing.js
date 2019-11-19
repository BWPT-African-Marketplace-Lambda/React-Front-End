import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addItem } from "../actions/addItem"

function AddListing(props) {
  const getUserId = localStorage.getItem("user_id")
  const [item, setItem] = useState({
    name:"",
    city:"",
    country:"",
    price: [],
    user_id: getUserId
  })

  const handleChange = event => {
    setItem({
      ...item,
      [event.target.name]: event.target.value
    })
    console.log(item.price)
  }

  const handleSubmit = event => {
    event.preventDefault()

    props.addItem(item)
    props.history.push("/")
    console.log(item)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={item.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={item.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={item.country}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={item.price}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
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
