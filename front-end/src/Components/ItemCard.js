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
  


//Here im finding and then matching id coming from data vs ID coming from props.match.params.id so that  result gets saved on variable created named item, to then
//pass the item down on my card with proper property.

const SDiv = styled.div`
  margin: 10px 2.5px;
  border: 1px solid black;
  position: relative;
  margin-left: 100px;
  background: white;

  &:hover {
    cursor: pointer;
  }
`;

const IDiv = styled.div`
  text-align: center;
  margin: 15px;
`;


function ItemCards(props) {
  const [toggle, setToggle] = useState(true);
  console.log(props)


  const toggleOpen = () => {
    setToggle(!toggle)
  }
  //Here im finding and then matching id coming from data vs ID coming from props.match.params.id so that  result gets saved on variable created named item, to then
  //pass the item down on my card with proper property.
  // const item = props.savedProps && props.savedProps.find( dataItem => `${dataItem.id}` === props.match.params.id);

  return (
    <div>
      {/* <NavLink to="/"> <Button className="Items-Buttons">Back To All Products</Button> </NavLink> */}
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
              {/* <CardImg src={props.item.photo_url} alt={props.item.alt} /> */}
              <IDiv>
                <CardText>
                  <strong>Title:</strong>
                  <br />
                  {props.item.name}
                </CardText>
                <CardText>
                  <strong>Price:</strong>
                  <br />
                  {props.item.price}
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
                <Button className="Items-Buttons">Add To Cart</Button>
                <Button className="Items-Buttons">Buy Now!</Button>
              </CardFooter>
            </IDiv>
          </CardBody>
        </CardGroup>
      </SDiv>
    </div>
  );
}
export default ItemCards