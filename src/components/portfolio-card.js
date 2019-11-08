import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CardContainer = styled.div`
    display: flex;
    width:100%;
    height: auto;
    flex-direction: column;
    margin: 1px 9px;
`;

const HeaderImage = styled.img`
    border-width: 1px;
    border-color: ${theme.colors.black};
    border-style: solid;
    object-fit: fill;
    width: 100%;
    padding: 6%;
    height: 187px;
`;

const DescriptionContainer = styled.div`
    color: ${theme.colors.black};
    border-width: 0 1px 1px 1px;
    border-color: ${theme.colors.black};
    bacground-color: ${theme.colors.black};
    border-style: solid;
    height: 117px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
`;

const Description = styled.div`
    padding: 2%;
    font-size: 1.3rem;
    text-align: center;
`;

export default ({image, text}) =>
    <CardContainer>
        <HeaderImage src={image}/>
        <DescriptionContainer><Description>{text}</Description></DescriptionContainer>
    </CardContainer>