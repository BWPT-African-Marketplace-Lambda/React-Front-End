import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { getToken } from '../utils/api';
import styled from "styled-components";
import vegetables from "../images/vegetables1.jpg";

import {
  CardFooter,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  CardGroup
} from "reactstrap";
import api from "../utils/api";

const SDiv = styled.div`
&:hover {
  cursor: pointer;
}
`;

const IDiv = styled.div`
  text-align: center;
  margin: 1%;

 
`;


function ItemCards(props) {
  const [toggle, setToggle] = useState(true);
  console.log(toggle)

  const loggedOn = getToken()

  const deleteItem = () => {
    api().delete(`/items/${props.item.id}`)
    .then(res => {
      console.log('Item was deleted')
      console.log(res)
      window.location.reload()
    })
    .catch(err => {
      console.log(err)
    })
  }


  const toggleOpen = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <SDiv className={toggle ? "itemCard" : "expanded"} onClick={toggleOpen}>
        <CardGroup className="Styling-CardGroups">
          <CardBody >
            <CardHeader className="CardHeader-Items" >
              <CardTitle className="H1-CardItemCard">
                <strong>{props.item.name}</strong>
              </CardTitle>
            </CardHeader>
            <div>
              <CardImg className="card-image"
                src={vegetables}
                alt={props.item.alt}
              />
              <hr className="Card-hr"></hr>
              <IDiv>
                <CardText>
                  <strong>Title:</strong>
                  <br />
                  {props.item.name}
                </CardText>
                <CardText>
                  <strong>Price:</strong>
                  <br />
                  ${props.item.price}
                </CardText>
               
              </IDiv>
              
            </div>
            <IDiv className={toggle ? "hidden" : "show"}>
              <CardText>
                <strong>City:</strong>
                <br />
                {props.item.city}
              </CardText>
              <CardText>
                <strong>Country:</strong>
                <br />
                {props.item.country}
              </CardText>
              <CardText>
                <strong>Description:</strong>
                <br />
                {props.item.description}
              </CardText>
              <CardFooter className="Footer-Buttons">

               
                {loggedOn ? ( <Button onClick={deleteItem} 
                  className="Items-Buttons">
                    Delete
                </Button> ) : (

                < NavLink to="/signup"> <Button className="Items-Buttons">Sign up for more info!</Button> </NavLink> 
                )}
              </CardFooter>
            </IDiv>
          </CardBody>
        </CardGroup>
      </SDiv>
</div>
  );
}
export default ItemCards