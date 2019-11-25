import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from "../actions/addItem";
import styled from 'styled-components';
import '../index.css';
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

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
    name: "",
    city: "",
    country: "",
    price: [],
    description: "",
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

    

    setItem({
      name: "",
      city: "",
      country: "",
      price: [],
      description: ""
    })
    
    console.log(item)
  }

  return (
    <div>
      <div>
        <Form className='form-style' onSubmit={handleSubmit}>
          <h1>Post a Listing</h1>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              className="input"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={item.name}
              onChange={handleChange}
            />
            <Label for="city">City</Label>
            <Input
              className="input"
              id="city"
              type="text"
              name="city"
              placeholder="City"
              value={item.city}
              onChange={handleChange}
            />
            <Label for="country">Country</Label>
            <Input
              className="input"
              id="country"
              type="text"
              name="country"
              placeholder="Country"
              value={item.country}
              onChange={handleChange}
            />
            <Label for="price">Price</Label>
            <Input
              className="input"
              id="price"
              type="number"
              name="price"
              placeholder="Price"
              value={item.price}
              onChange={handleChange}
            />
            <Label for="description">Description</Label>
            <Input
              className="input"
              id="description"
              type="text"
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={handleChange}
            />
            <Button className='form-button-style' type="submit">Add Item</Button>
          </FormGroup>
        </Form>
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
