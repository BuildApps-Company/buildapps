import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import FloatingLabelInput from 'react-floating-label-input';

const FormContainer = styled.div`
    background-color: ${theme.colors.whiteSmoke};
    margin: 0 auto 0 auto;
    padding: 64px 62px;
    width: ${theme.containerWidthPercent}%;
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
    padding-bottom: 64px;
    margin-bottom: 46px;
    border-bottom: 2px solid ${theme.colors.lightGray};
`;

const HorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const FloatTextField = styled(FloatingLabelInput)`
    background-color: transparent;
`;

export default () => 
<FormContainer>
    <Title>Contact us</Title>
    <SubTitle>We will help you with your project</SubTitle>
    <HorizontalContainer>
    <FloatTextField 
        id="user_name"
        label="User name"/>
    <FloatTextField 
        id="user_email"
        label="Email"/>
    </HorizontalContainer>
</FormContainer>