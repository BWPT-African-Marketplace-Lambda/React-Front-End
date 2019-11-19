import React, { useState } from 'react';
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

        //Add new user data to the api data base
        props.signup(user)
        // console.log(props)
        // props.signup(user)
        //     .then(() => {
        //         // props.history.push("/userPageList")
        //         console.log("Successful Signup!")
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
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