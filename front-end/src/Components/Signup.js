import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/sighup';
import styled from 'styled-components';
import '../index.css';

function Signup(props) {
    const StyledH1 = styled.h1`
        font-size: 2.5rem; font-weight: 300; color: #ffcc66; margin: 0 0 24px;
    `;

    const StyledDiv = styled.div`
        padding: 5%;
    `;

    const StyledStrong = styled.strong`
        color: #7c795d; font-family: 'Trocchi', serif; font-size: 5rem; font-weight: normal; line-height: 48px; margin: 0;
    `;
    
    //State to hold data for new ueres
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        //Add new user data to the api data base
        props.signup(user)
        setTimeout(() => {
            props.history.push("/userPageList")
        })
        
    }


    return (

        <div>
            <StyledDiv>
                <StyledH1><StyledStrong>Saudi Africa</StyledStrong> <br></br> Product Marketplace </StyledH1>
                <hr></hr>
            </StyledDiv>
            <div className='form-container'>
                <form className='form-style' onSubmit={handleSubmit}>
                    <input
                        className='input-style'
                        type="text"
                        name="email"
                        value={user.email}
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <input
                        className='input-style'
                        type="text"
                        name="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    <button className='form-button-style' type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newUser: state.user.newUser
    }
}

const mapDispatchToProps = {
    signup
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);