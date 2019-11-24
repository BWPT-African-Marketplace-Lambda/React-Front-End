import React, { useState } from 'react';
import styled from 'styled-components';



function SearchByPrice (props) {

    const [formValue, setFormValue] = useState('')


    const handleChange = event =>{
        setFormValue(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.searchByPriceDisplay(formValue);
        setFormValue('');
    };

   
    

    return(
        <form className="searchbyPrice" onSubmit={handleSubmit}>
            <label>
            Search by Maximum Price: 
            &nbsp;
                <input
                    type='text'
                    name='type'
                    placeholder='type price'
                    value={formValue.name}
                    onChange={handleChange}
                />
            </label>
        </form>
    )
}

export default SearchByPrice;