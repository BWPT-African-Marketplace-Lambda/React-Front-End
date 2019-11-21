import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from "../actions/addItem";
import styled from 'styled-components';
import '../index.css';

function AddListing(props) {
  const StyledH1 = styled.h1`
  font-size: 2.5rem; font-weight: 300; color: #ffcc66; margin: 0 0 24px;
`;

const StyledDiv = styled.div`
  padding: 5%;
`;

const StyledStrong = styled.strong`
  color: #7c795d; font-family: 'Trocchi', serif; font-size: 5rem; font-weight: normal; line-height: 48px; margin: 0;
`;

  const getUserId = localStorage.getItem("user_id")
  const [item, setItem] = useState({
    name:"",
    city:"",
    country:"",
    price: [],
    description:"",
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
      <div className='form-container'>
        <form className='form-style' onSubmit={handleSubmit}>
          <input
            className='input-style'
            type="text"
            name="name"
            placeholder="Name"
            value={item.name}
            onChange={handleChange}
          />
          <input
            className='input-style'
            type="text"
            name="city"
            placeholder="City"
            value={item.city}
            onChange={handleChange}
          />
          <input
            className='input-style'
            type="text"
            name="country"
            placeholder="Country"
            value={item.country}
            onChange={handleChange}
          />
          <input
            className='input-style'
            type="number"
            name="price"
            placeholder="Price"
            value={item.price}
            onChange={handleChange}
          />
          <input
            className='input-style'
            type="textarea"
            name="description"
            placeholder="Description"
            value={item.description}
            onChange={handleChange}
          />
          <button className='form-button-style' type="submit">Add Item</button>
        </form>
      </div>
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
