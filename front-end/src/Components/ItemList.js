import React, { useState } from "react";
import VerticalImage from "../images/vertical_image.png";
import Search from './Search';
import SearchByPrice from "./SearchByPrice";

import {
  // CardFooter,
  // CardImg,
  // CardText,
  // CardBody,
  // CardHeader,
  // CardTitle,
  // Button,
  CardGroup
} from "reactstrap";

import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import ItemCard from "./ItemCard"



const BodyCard = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PageLayout = styled.div`
display:flex;
`;

const ImgStyle = styled.img`
width:100%;
padding-right:1.5%;
height: 100%;
`;

const ImgDiv = styled.div`
width: 100%;
height: 500px;
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
      <main>
        <ImgDiv>

          <ImgStyle
            src={VerticalImage}
            alt="vertical image"

          />
          <ImgStyle
            src={VerticalImage}
            alt="vertical image"

          />
          <ImgStyle
            src={VerticalImage}
            alt="vertical image"

          />

          <ImgStyle
            src={VerticalImage}
            alt="vertical image"

          />
          <ImgStyle
            src={VerticalImage}
            alt="vertical image"

          />
          <ImgStyle
            src={VerticalImage}
            alt="vertical image"

          />
        </ImgDiv>
      </main>

      <CardGroup className="Styling-CardGroups">
        <Search searchResultDisplay={searchResultDisplay} />
        <SearchByPrice searchByPriceDisplay={searchByPriceDisplay}/>
        {/* <Route exact path="/ItemList/:id" render={props => <ItemCard {...props} savedProps={savedProps} /> } />  */}
        {props.isLoading ? (
          <h3>...Loading</h3>
        ) : (
          props.savedData.map(data => (
            <ItemCard
              key={data.id}
              item={data} />
          )))}
      </CardGroup>
    </PageLayout>
  );
};
export default ItemList;
