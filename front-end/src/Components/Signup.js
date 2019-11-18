import React, { useState, useReducer } from 'react';
import api from '../utils/api';
import { connect } from 'react-redux';
import { signup } from '../actions/sighup';
import { SIGNUP_START, SIGNUP_SUCCESS, SIGHUP_ERROR, SIGNUP_ERROR } from '../actions/sighup';

function Signup(props) {
    
    //State to hold data for new ueres
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleSubmit = event => {
        event.preventDefault()

        dispatch({type: SIGNUP_SUCCESS, payload: user || props.newUser})

        //Add new user data to the api data base
        api()
            .post("/auth/register", state)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={handleChange}
            />
             <input
                type="text"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        newUser: state.user.newUser
    }
}

export default connect(mapStateToProps)(Signup);