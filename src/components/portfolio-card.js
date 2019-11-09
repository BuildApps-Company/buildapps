import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CardContainer = styled.div`
	display: flex;
	width: 100%;
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

const InformationContainer = styled.div`
	color: ${theme.colors.black};
	border-width: 0 1px 1px 1px;
	border-color: ${theme.colors.black};
	border-style: solid;
	height: 117px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	display: flex;
	&:hover {
		background: ${theme.colors.primary};
		color: ${theme.colors.white};
	}
	&:hover div:first-of-type {
		color: white;
	}
	&:hover div:last-of-type {
		display: block;
	}
`;

const Title = styled.div`
	padding: 2%;
	font-size: 1.3rem;
	text-align: center;
`;

const Description = styled.div`
	padding: 2%;
	font-size: 0.8rem;
	color: ${theme.colors.white};
	display: none;
	text-align: center;
`;

export default ({ image, text, description }) => (
	<CardContainer>
		<HeaderImage src={image} />
		<InformationContainer>
			<Title>{text}</Title>
			<Description>{description}</Description>
		</InformationContainer>
	</CardContainer>
);
