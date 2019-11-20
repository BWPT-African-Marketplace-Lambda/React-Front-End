import React, { useState } from "react";
import {NavLink } from "react-router-dom";

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
  

function ItemCards (props) {
  console.log(props);
 //Here im finding and then matching id coming from data vs ID coming from props.match.params.id so that  result gets saved on variable created named item, to then
 //pass the item down on my card with proper property.
//const item = props.savedProps && props.savedProps.find( dataItem => `${dataItem.id}` === props.match.params.id);


  const [toggle, setToggle] =useState(true);

  function toggleOpen () {
    setToggle(!toggle);
  };

return (
  <div>
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
            <div>
              <CardText>
                <strong>Title:</strong>
                {` ${props.item.name}`}
              </CardText>
              <CardText>
                <strong>Price:</strong>
                {` $${props.item.price}`}
              </CardText>
              <CardText>
                <strong>Description:</strong>
                {` ${props.item.description}`}
              </CardText>
            </div>
          </div>
          <CardFooter className="Footer-Buttons">
          <Button className="Items-Buttons">Add To Cart</Button>
          <Button className="Items-Buttons">Buy Now!</Button>
          </CardFooter>
        </CardBody>
        
  </CardGroup>
  <h4>{`Customers that bought "${props.item.name}", Frequently bought together the following items:`}</h4>
  </div>
  
  );
}

export default ItemCards