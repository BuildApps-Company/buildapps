import React from 'react';
import styled from 'styled-components';

export function Header({ children }) {
    return (
        <StyledHeader>
            { children }
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    width: 100vw;
    heigth: 5rem;
`;