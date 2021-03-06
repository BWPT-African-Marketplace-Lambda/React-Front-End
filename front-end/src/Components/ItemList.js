import React, { useState } from "react";
import VerticalImage from "../images/vertical_image.png";
import Search from './Search';
import SearchByPrice from "./SearchByPrice";



import {
  CardGroup
} from "reactstrap";

import styled from "styled-components";
import ItemCard from "./ItemCard"


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

  const searchResultDisplay = search => {
    const results = savedProps.filter(datum=>datum.name.toLowerCase().includes(search.toLowerCase()));
    setSavedProps(results);
    console.log("SavedProps", savedProps)

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
        
         
         
           
          
        </ImgDiv>
      </main>

         <CardGroup className="Styling-CardGroups">
        <Search searchResultDisplay={searchResultDisplay} />
        <SearchByPrice searchByPriceDisplay={searchByPriceDisplay}/>
        
        {props.isLoading ? (
          <h3>...Loading</h3>
        ) : (
            savedProps && savedProps.map(data => (
            <ItemCard
              key={data.id}
              item={data} />
          )))}
      </CardGroup>
    </PageLayout>
  );
};
export default ItemList;
