import React, { useState } from 'react';



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
        <form  onSubmit={handleSubmit}>
            <label>
            Enter a price to see everything under that price: 
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