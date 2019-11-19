import React,{useState} from "react";
import VerticalImage from "../images/vertical_image.png";
import Search from './Search';
import SearchByPrice from "./SearchByPrice";

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

const PageLayout =styled.div`
display:flex;
`;

const ImgStyle = styled.img`
width:100%;
padding-right:1.5%;
`;

const ImgDiv = styled.div`
width: 20%
`;

const ItemList = props => {
  const [savedProps, setSavedProps] = useState(props.savedData)

/* //Since i have itemList and ItemCard rendering together on same page through App.js */
/* //ill create this function so that when you click the "check this item out!" it would take customer to the item they are trying to purchase. */
  const scrollup =() => {
    window.scrollTo(0, 0);
};
  const searchResultDisplay = search => {
    const results = savedProps.filter(datum=>datum.name.toLowerCase().includes(search.toLowerCase()));
    setSavedProps(results);
};

const searchByPriceDisplay = input => {
    const res = savedProps.filter(obj=>obj.price <= input);
    setSavedProps(res);
};

return (
    <PageLayout>
      <ImgDiv>
        <ImgStyle src={VerticalImage} alt="vertical image"/>
        <ImgStyle src={VerticalImage} alt="vertical image"/>
        <ImgStyle src={VerticalImage} alt="vertical image"/>
        <ImgStyle src={VerticalImage} alt="vertical image"/>
        <ImgStyle src={VerticalImage} alt="vertical image"/>
        <ImgStyle src={VerticalImage} alt="vertical image"/>
      </ImgDiv>
    
    <CardGroup className="Styling-CardGroups">
      <Search searchResultDisplay={searchResultDisplay}/>
      <SearchByPrice searchByPriceDisplay={searchByPriceDisplay} />
      <Route exact path="/ItemList/:id" render={props => <ItemCard {...props} savedProps={savedProps} /> } /> 
      {savedProps && savedProps.map(data => (
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
                  <strong>Title:</strong><br></br>
                  
                  {` ${data.name}`}
                </CardText>
                <CardText>
                  <strong>Price:</strong><br></br>
                  {` $${data.price}`}
                </CardText>
                <CardText>
                  <strong>Description:</strong><br></br>
                  {` ${data.description}`}
                </CardText>
                                                                    
              </div>
                      
            </BodyCard>
            <CardFooter className="Footer-Buttons">
{/* Here on this onClick im passing the function scrollup so that when clicked page moves up to see new product created on (ItemCard component) */}
          <Link to={`/ItemList/${data.id}`}> <Button onClick={scrollup}className="Items-Buttons">Check this item out!</Button> </Link>
            </CardFooter>  
          </CardBody>
        ))}
    </CardGroup>
  </PageLayout>
);
};
export default ItemList;
