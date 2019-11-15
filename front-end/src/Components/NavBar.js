import React from 'react';
import styled from 'styled-components';


//import Search from './Search';

const StyledNavTop = styled.div`
    background: #D79922;
`;

const StyledNavBttm = styled.div`
    background: #EFE2BA;
`;

function NavBar () {

    return (
        <div>
            <StyledNavTop>
                <h1>Sauti</h1>
            </StyledNavTop>
            <StyledNavBttm>
                <a></a>
            </StyledNavBttm>
           
           
        </div>
    );
};

    
export default NavBar;