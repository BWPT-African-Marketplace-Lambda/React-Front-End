import React, { useState } from 'react';
import styled from 'styled-components';


function Search (props) {

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
        font-family: 'Trocchi', serif;
        letter-spacing: 2px;
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
