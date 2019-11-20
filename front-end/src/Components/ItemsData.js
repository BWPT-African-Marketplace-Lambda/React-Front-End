import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import styled from "styled-components";


const ItemsData = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const StyledH1 = styled.h1`
    
   
    font-size: 2.5rem; font-weight: 300; color: #ffcc66; margin: 0 0 24px;
  `;
  const StyledDiv = styled.div`
    padding: 5%;
  `;
  const StyledStrong = styled.strong`
  color: #7c795d; font-family: 'Trocchi', serif; font-size: 5rem; font-weight: normal; line-height: 48px; margin: 0;
  `;

  useEffect(() => {
    axios
      .get("https://african-marketplace-bw.herokuapp.com/api/items")
      .then(res => {
        setData(res.data);
        setIsLoading(false)

      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);

  // const savedData = data;

  return (
    <StyledDiv>
      <StyledH1><StyledStrong>Saudi Africa</StyledStrong> <br></br> Product Marketplace </StyledH1>
      <hr></hr>

      <ItemList
        savedData={data}
        setData={setData}
        isLoading={isLoading} />

    </StyledDiv>
  );
};
export default ItemsData;
