import React, { useState } from 'react';
import styled from 'styled-components';


function Search (props) {
console.log(props)
    const [query, setQuery]= useState('');

    const handleChangeSearch = event => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchResultDisplay(query);
        setQuery('');
    };

 
    return (
        <form className="search" onSubmit={handleSubmit}>
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
        </form> 
           
    )
};



export default Search;
