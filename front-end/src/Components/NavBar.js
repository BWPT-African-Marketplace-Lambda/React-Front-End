import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import Search from './Search';

const StyledNavTop = styled.div`
    background: #D79922;
    font-family: 'Calistoga', cursive;
`;

const StyledNavBttm = styled.div`
    background: #EFE2BA;
    display: flex;
    justify-content: flex-end;
`;

const StyledP = styled.p`
    padding-left: 1%;
    font-family: 'Calistoga', cursive;
`;

function NavBar () {

    return (
        <div>
            <StyledNavTop>
                <h1>Sauti</h1>
            </StyledNavTop>
            <StyledNavBttm>
                <Link to='/'><StyledP>Home</StyledP></Link>
                <Link to='/'><StyledP>Log In</StyledP></Link>
                <Link to='/'><StyledP>Sign Up</StyledP></Link>
            </StyledNavBttm>
        </div>
    );
};

    
export default NavBar;