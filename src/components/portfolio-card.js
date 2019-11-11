import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HeaderImage = styled.img`
	max-width: 90%;
`;

const ImageContainer = styled.div`
	height: 160px;
	z-index: -2;
	border-bottom: 1px solid ${theme.colors.black};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InformationContainer = styled.div`
	position: relative;
	height: 120px;
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
		transform: rotate(57deg) skewX(25deg);
		border: 1px solid ${theme.colors.black};
		border-width: 1px 0 0 1px;
		top: -5px;
		left: calc(50% - 10px);
		z-index: -1;
	}
`;

const Title = styled.div`
	padding: 2%;
	font-size: 1.3rem;
`;

const Description = styled.div`
	padding: 2%;
	font-size: 0.8rem;
	color: ${theme.colors.white};
	display: none;
`;

const CardContainer = styled.div`
	display: flex;
	flex: 1 1 0;
	max-width: 350px;
	flex-direction: column;
	margin: 1px 9px;
	border: 1px solid ${theme.colors.black};

	&:hover ${InformationContainer}, &:hover ${InformationContainer}:before {
		background: #8147a5;
		color: #ffffff;
	}
	&:hover ${InformationContainer} div:first-of-type {
		color: ${theme.colors.white};
	}
	&:hover ${InformationContainer} div:last-of-type {
		display: block;
	}
`;

export default ({ image, text, description }) => (
	<CardContainer>
		<ImageContainer>
			<HeaderImage src={image} />
		</ImageContainer>
		<InformationContainer>
			<Title>{text}</Title>
			<Description>{description}</Description>
		</InformationContainer>
	</CardContainer>
);
