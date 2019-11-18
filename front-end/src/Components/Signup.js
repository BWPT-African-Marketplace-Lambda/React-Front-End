import React, { useState, useReducer } from 'react';
import api from '../utils/api';
import { connect } from 'react-redux';
import { signup } from '../actions/sighup';

function Signup(props) {
    
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

        // dispatch({type: SIGNUP_SUCCESS, payload: user || props.newUser})

        //Add new user data to the api data base
        props.signup(user)
        console.log(user)
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

const mapDispatchToProps = {
    signup
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);