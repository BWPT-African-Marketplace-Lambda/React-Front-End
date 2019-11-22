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

    const Form = styled.form`
        color: black; 
        letter-spacing: 1px;
        font-size: 18px;
        background-color: #C5CBE3;
        padding: 1%;
        margin-bottom: 2%;
        border-bottom: 1px solid black;
    `;
    

    return(
        <Form  onSubmit={handleSubmit}>
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
        </Form>
    )
}

export default SearchByPrice;