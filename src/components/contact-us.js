import React from "react";
import styled from 'styled-components';

const ContactUsLink = styled.a`
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    &, &:focus, &:hover, &:visited {
        background: rgb(46, 46, 46);
        color: #ffffff;
    }
`;

export default () => <ContactUsLink href="mailto:test@test.com">Contact Us</ContactUsLink>;