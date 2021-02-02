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
    width: 100%;
    height: 5rem;
    z-index: 1;
`;