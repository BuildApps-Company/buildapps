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
    margin-bottom: 46px;
    flex-direction: row;
`;

const HorizontalDivider = styled.div`
    width: 24px;
`;

const SendButton = styled.button`
    width: 140px;
    margin: 64px auto 0 auto;
    text-transform: uppercase;
    background-color: transparent;
`;

export default () =>
    <FormContainer>
        <Title>Contact us</Title>
        <SubTitle>We will help you with your project</SubTitle>
        <HorizontalContainer className="row">
            <FloatingLabelInput className="FloatingLabelInput" id="name" label="User name" />
            <HorizontalDivider />
            <FloatingLabelInput className="FloatingLabelInput" id="email" label="Email" />
        </HorizontalContainer>
        <FloatingLabelInput className="FloatingLabelInput" id="description" label="Additional information or question (optional)" />
        <SendButton className="primary">send</SendButton>
    </FormContainer>