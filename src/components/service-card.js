import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CardContainer = styled.div`
	display: flex;
	flex: 1 1 250px;
	max-width: 350px;
	margin: 0.5rem;
	height: 370px;
	flex-direction: column;
	border: 1px ${theme.colors.black} solid;
	justify-content: center;
	align-items: center;

	&:hover {
		background: ${theme.colors.primary};
		border-color: ${theme.colors.darkPrimary};
	}

	&:hover div {
		color: ${theme.colors.white};
	}

	&:hover img:first-of-type {
		display: none;
	}

	&:hover img:last-of-type {
		display: block;
	}
`;

const DefaultImage = styled.img`
	display: block;
`;

const TintedImage = styled.img`
	display: none;
`;

const Title = styled.div`
	padding: 2%;
	font-size: 1.4rem;
	margin: 0 5%;
	text-transform: uppercase;
	color: ${theme.colors.black};
	text-align: center;
`;

const Description = styled.div`
	padding: 2%;
	margin: 0 5%;
	max-width: 90%;
	font-size: 0.9rem;
	color: ${theme.colors.black};
	text-align: center;
`;

export default ({ defaultImage, tintImage, text, description }) => (
	<CardContainer>
		<DefaultImage src={defaultImage} alt=''/>
		<TintedImage src={tintImage} alt=''/>
		<Title>{text}</Title>
		<Description>{description}</Description>
	</CardContainer>
);
