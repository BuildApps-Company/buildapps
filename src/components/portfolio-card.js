import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CardContainer = styled.div`
	display: flex;
	width: 100%;
	height: auto;
	flex-direction: column;
	margin: 1px 9px;
	border: 1px solid ${theme.colors.black};
`;

const HeaderImage = styled.img`
	object-fit: fill;
	width: 100%;
	padding: 6%;
    height: 187px;
    z-index: -2;
	border-bottom: 1px solid ${theme.colors.black};
`;

const InformationContainer = styled.div`
	position: relative;
	height: 117px;
	color: ${theme.colors.black};
	background: ${theme.colors.white};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	&:before {
		content: '';
		display: block;
		position: absolute;
		width: 20px;
		height: 20px;
		background: ${theme.colors.white};
		transform: rotate(45deg);
		border: 1px solid ${theme.colors.black};
		border-width: 1px 0 0 1px;
		top: -10px;
		left: calc(50% - 10px);
		z-index: -1;
	}
	&:hover,
	&:hover:before {
		background: #8147a5;
		color: #ffffff;
	}
	&:hover div:first-of-type {
		color: ${theme.colors.white};
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
