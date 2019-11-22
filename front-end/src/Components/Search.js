import React, { useState } from 'react';
import styled from 'styled-components';


function Search (props) {
console.log(props)
    const [query, setQuery]=useState('');

    const handleChangeSearch = event => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchResultDisplay(query);
        setQuery('');
    };

    const Form = styled.form`
        color: black; 
        letter-spacing: 1px;
        font-size: 18px;
        background-color: #C5CBE3;
        padding: 1%;
        margin-top: 4.5%;
        border-top: 1px solid black;
    `;


    return (
        <Form className="search" onSubmit={handleSubmit}>
            <label>
                Search by Product Name: 
                &nbsp;
                <input
                    type='text'
                    name='name'
                    value={query.name}
                    onChange={handleChangeSearch}
                    placeholder='type product name'
                />
            </label>
        </Form>
    );
};



export default Search;
