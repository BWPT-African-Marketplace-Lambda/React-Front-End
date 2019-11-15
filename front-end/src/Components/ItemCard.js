import React from "react";
import { Route, NavLink } from "react-router-dom";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardHeader,
    CardTitle,
     Button,
    CardGroup
  } from "reactstrap";

function ItemCards (props) {

const item = props.savedProps && props.savedProps.find( dataItem => `${dataItem.id}` === props.match.params.id);



return (
    <CardGroup className="Styling-CardGroups">
    
        <CardBody >
          <CardHeader>
            <CardTitle>
              <strong>{item.name}</strong>
            </CardTitle>
          </CardHeader>
          <div>
            <CardImg
              className="ItemList-Image"
              src={""}
              alt={item.alt}
            />
            <div>
              <CardText>
                <strong>Title:</strong>
                {` ${item.name}`}
              </CardText>
              <CardText>
                <strong>Price:</strong>
                {` $${item.price}`}
              </CardText>
              <CardText>
                <strong>Description:</strong>
                {` ${item.description}`}
              </CardText>
            </div>
          </div>
        </CardBody>

  </CardGroup>
  );
}

export default ItemCards