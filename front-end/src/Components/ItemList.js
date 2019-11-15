import React,{useState} from "react";
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

import styled from "styled-components";
import {Link,Route} from "react-router-dom";
import ItemCard from "./ItemCard";

const BodyCard = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ItemList = props => {

  const [savedProps, setSavedProps] = useState(props.savedData)

  

 
  return (
    
    <CardGroup className="Styling-CardGroups">
       <Route exact path="/ItemList/:id" render={props => <ItemCard {...props} savedProps={savedProps} /> } /> 
      {props.savedData &&
        props.savedData.map(data => (
          <CardBody key={data.id}>
            <CardHeader>
              <CardTitle>
                <strong>{data.name}</strong>
              </CardTitle>
            </CardHeader>
            <BodyCard>
              <CardImg
                className="ItemList-Image"
                src={props.savedData[0].photo_url}
                alt={data.alt}
              />
              <div>
                <CardText>
                  <strong>Title:</strong>
                  {` ${data.name}`}
                </CardText>
                <CardText>
                  <strong>Price:</strong>
                  {` $${data.price}`}
                </CardText>
                <CardText>
                  <strong>Description:</strong>
                  {` ${data.description}`}
                </CardText>

                <Link to={`/ItemList/${data.id}`}> <Button>Check this item out!</Button> </Link>
              </div>
            </BodyCard>
          </CardBody>
        ))}
       
       

    </CardGroup>
  );
};
export default ItemList;
