import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CardContainer = styled.div`
    display: flex;
    width:100%;
    height: 450px;
    flex-direction: column;
    border-width: 1px;
	border-color: ${theme.colors.black};
	border-style: solid;
    justify-content: center;
    align-items: center;
    margin: 1px 9px;
        &:hover {
            background: ${theme.colors.primary};
        }
        &:hover div {
            color: white;
        }
        &:hover div {
            color: white;
        }
`;

const HeaderImage = styled.img`
	filter: invert(100%)
`;

const Title = styled.div`
	padding: 2%;
	font-size: 1.3rem;
	color: ${theme.colors.black};
	text-align: center;
`;

const Description = styled.div`
	padding: 2%;
	font-size: 0.8rem;
	color: ${theme.colors.black};
	text-align: center;
`;

export default ({ image, text, description }) => (
	<CardContainer>
		<HeaderImage src={image} />
		<Title>{text}</Title>
		<Description>{description}</Description>
	</CardContainer>
);
