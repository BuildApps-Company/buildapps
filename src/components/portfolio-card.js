import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HeaderImage = styled.img`
	max-width: 250px;
	max-height: 100%;
	overflow: hidden;
`;

const ImageContainer = styled.div`
	height: 200px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 30px;
`;

const InformationContainer = styled.div`
	position: relative;
	color: ${theme.colors.white};
	display: flex;
	justify-content: center;
	flex-direction: column;
	max-width: 400px;
`;

const Title = styled.div`
	padding: 2%;
	font-size: 2rem;
`;

const Description = styled.div`
	padding: 2%;
	font-size: 0.8rem;
`;

const Container = styled.div`
	display: flex;
	flex: 1 1 250px;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 0.5rem;
	align-items: center;
	justify-content: center;
`;

const Responsibility = styled.span`
	padding: 1%;
	margin: 1%;
	display: inline-block;
	background: ${theme.colors.darkPrimary};
`;

export default ({ image, text, description, responsibility = [] }) => (
	<Container>
		<ImageContainer>
			<HeaderImage src={image} alt="" />
		</ImageContainer>
		<InformationContainer>
			<Title>{text}</Title>
			<Description>{description}</Description>
			<div>
				{responsibility.map((x, index) => (
					<Responsibility key={index}>{x}</Responsibility>
				))}
			</div>
		</InformationContainer>
	</Container>
);
