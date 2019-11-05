import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.a`
    font-size: 1.8rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.9);

    &:hover, &:active, &:focus {
        color: rgba(0, 0, 0, 0.9);
    }
`;

export default () => <LogoContainer href="/">BuildApps</LogoContainer>;
