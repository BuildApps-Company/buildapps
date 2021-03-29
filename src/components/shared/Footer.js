import React from 'react';
import styled from 'styled-components';

export function Footer({ children }) {
    return (
        <StyledFooter>
            {children}
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    width: 100vw;
    heigth: 5vh;
`;