import React from "react";
import styled from 'styled-components';

const ContactUsLink = styled.a`
    &, &:focus, &:hover, &:visited {
        color: #3949AB;
        font-size: 1.2rem;
    }
    &:hover, &:visited, &:focus {
    }
`;

export default () => <ContactUsLink href="mailto:test@test.com">Contact US</ContactUsLink>;