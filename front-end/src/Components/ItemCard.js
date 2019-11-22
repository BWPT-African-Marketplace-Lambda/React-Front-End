import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import styled from 'styled-components';

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
  

const SDiv = styled.div`
  margin: 10px 2.5px;
  border: 2px solid #D79922;
  margin-left: 100px;
  background: white;
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


  const toggleOpen = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <SDiv className={toggle ? "itemCard" : ""} onClick={toggleOpen}>
        <CardGroup className="Styling-CardGroups">
          <CardBody >
            <CardHeader className="CardHeader-Items" >
              <CardTitle className="H1-CardItemCard">
                <strong>{props.item.name}</strong>
              </CardTitle>
            </CardHeader>
            <div>
              <CardImg
                src={"https://assets.weforum.org/article/image/large_bBsjfn2r-_U89L3OjVWcck849EoScbK0eI4qw1c0O5w.jpg"}
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
                < NavLink to="/signup"> <Button className="Items-Buttons">Sign up for more info!</Button> </NavLink> 
              </CardFooter>
            </IDiv>
          </CardBody>
        </CardGroup>
      </SDiv>
</div>
  );
}
export default ItemCards