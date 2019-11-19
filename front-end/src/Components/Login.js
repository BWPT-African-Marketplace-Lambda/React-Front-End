import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';

function Login(props) {
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleSubmit = event => {
        event.preventDefault()

        props.login(user)
    }

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='email'
                placeholder='Email'
                value={user.email}
                onChange={handleChange}
            />

            <input 
                type='text'
                name='password'
                placeholder='Password'
                value={user.password}
                onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
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