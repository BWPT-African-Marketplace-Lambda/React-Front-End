import React, { useState } from 'react';


function Search (props) {

    const [query, setQuery]=useState('');

    const handleChange = event => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchResultDisplay(query);
        setQuery('');
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Search by Product Name: 
                &nbsp;
                <input
                    type='text'
                    name='name'
                    value={query.name}
                    onChange={handleChange}
                    placeholder='type product name'
                />
            </label>
        </form>
    );
};



export default Search;
