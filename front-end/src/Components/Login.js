import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import styled from 'styled-components';
import '../index.css';

function Login(props) {
    const StyledH1 = styled.h1`
        font-size: 2.5rem; font-weight: 300; color: #ffcc66; margin: 0 0 24px;
    `;

    const StyledDiv = styled.div`
        padding: 5%;
    `;

    const StyledStrong = styled.strong`
        color: #7c795d; font-family: 'Trocchi', serif; font-size: 5rem; font-weight: normal; line-height: 48px; margin: 0;
    `;

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = event => {
        event.preventDefault()

        props.login(user)
        
        setTimeout(() => {
            props.history.push("/userPageList")
        }, [500])
        
    }

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
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
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={user.email}
                        onChange={handleChange}
                    />

                    <input
                        className='input-style'
                        type='text'
                        name='password'
                        placeholder='Password'
                        value={user.password}
                        onChange={handleChange}
                    />
                    <button className='form-button-style' type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)