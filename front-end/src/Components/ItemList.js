import React,{useState} from "react";


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

import styled from "styled-components";
import {Link,Route} from "react-router-dom";
import ItemCard from "./ItemCard"


const BodyCard = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ItemList = props => {

  const [savedProps, setSavedProps] = useState(props.savedData)

//Since i have itemList and ItemCard rendering together on same page through App.js
//ill create this function so that on a click page will move up to the Top
const scrollup =() => {
  window.scrollTo(0, 0);
}
 
  return (
    
    <CardGroup className="Styling-CardGroups">
       <Route exact path="/ItemList/:id" render={props => <ItemCard {...props} savedProps={savedProps} /> } /> 
      {props.savedData &&
        props.savedData.map(data => (
          <CardBody key={data.id} className="CardBody-Items" >
            <CardHeader className="CardHeader-Items">
              <CardTitle>
                <strong>{data.name}</strong>
              </CardTitle>
            </CardHeader>
            <BodyCard className="BodyCard-items">
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
                                                                    
                      </div>
                      
            </BodyCard>
            <CardFooter className="Footer-Buttons">
               {/* Here on this onClick im passing the function scrollup so that when clicked page moves up to see new product created on (ItemCard 
                                              component) */}
          <Link to={`/ItemList/${data.id}`}> <Button onClick={scrollup}className="Items-Buttons">Check this item out!</Button> </Link>
            </CardFooter>  
          </CardBody>
        ))}
           

    </CardGroup>
  );
};
export default ItemList;
