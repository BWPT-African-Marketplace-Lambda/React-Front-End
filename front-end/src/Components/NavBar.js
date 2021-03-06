import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/Saudi_Logo.png';
import { getToken } from '../utils/api';
import { logout } from './logout';

const StyledNav = styled.div`
    background: #D79922;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 1% 5%;
`;

const StyledImg = styled.img`
    max-height: 15vh;
`;

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    font-family: 'Calistoga', cursive;
    font-size: 1.2rem;
`;

const StyledEmpower = styled.p`
    font-style: italic;
`;

const StyledLinks = styled.div`
    background: #EFE2BA;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    width: 50%;
    margin: 0 auto;
`;

const StyledP = styled.p`
    font-family: 'Calistoga', cursive;
    font-size: 1.2rem;
    color: black;
    padding: 8px;
    font-style: none;
    color: #D79922;
    text-shadow: 1px 1px black;
    :hover {
        background: #F13C20;
        border-radius: 10px;
        color: white;
    }
`;

function NavBar () {
    const loggedOn = getToken()
    return (
        <div>       
            <StyledNav>
                <StyledImg src={logo} alt='logo'/>
                <StyledRight>
                    <StyledEmpower>empowering small business owners</StyledEmpower>
                    <StyledLinks>
                        <Link to='/'><StyledP>Home</StyledP></Link>
                        {!loggedOn && <Link to='/login'><StyledP>Log In</StyledP></Link>}
                        {!loggedOn && <Link to='/signup'><StyledP>Sign Up</StyledP></Link>}
                        {loggedOn && <Link to='/userPageList'><StyledP>My List</StyledP></Link>}
                        {loggedOn && <Link to='/'><StyledP onClick={logout}>Logout</StyledP></Link>}
                    </StyledLinks>
                </StyledRight>
            </StyledNav>
        </div>
    );
};

    
export default NavBar;