import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import styled from "styled-components";

const ItemsData = () => {
  const [data, setData] = useState("");
  const StyledH1 = styled.h1`
    border-bottom: solid 2px black;
  `;
  const StyledDiv = styled.div`
    padding: 5%;
  `;

  useEffect(() => {
    axios
      .get("https://african-marketplace-bw.herokuapp.com/api/items")
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const savedData = data;

  return (
    <StyledDiv>
      <StyledH1>Saudi Africa Product Marketplace </StyledH1>
      <ItemList savedData={savedData} />
    </StyledDiv>
  );
};
export default ItemsData;
