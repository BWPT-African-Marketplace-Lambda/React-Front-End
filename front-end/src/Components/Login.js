import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import api from '../utils/api';
import { reducer } from '../reducers/login';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/login';

function Login(props) {
    const [state, dispatch] = useReducer(reducer)
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({type: LOGIN_SUCCESS, payload: user || props.user })

        api()
            .post("/auth/login", state)
            .then(res => {
                console.log(state)
            }).catch(err => {
                console.log(err)
            })
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

// const mapDispatchToProps = {
//     login
// }

export default connect(mapStateToProps)(Login)