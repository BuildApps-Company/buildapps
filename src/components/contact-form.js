import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FormContainer = styled.div`
    background-color: ${theme.colors.whiteSmoke};
    margin: 0 auto 0 auto;
    padding: 64px 62px;
    width: ${theme.containerWidthProcentage}%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    color: ${theme.colors.black};
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 24px
`;

const SubTitle = styled.div`
    color: ${theme.colors.black};
    font-size: 2rem;
    text-align: center;
`;

export default () => 
<FormContainer>
    <Title>Contact us</Title>
    <SubTitle>We will help you with your project</SubTitle>
</FormContainer>