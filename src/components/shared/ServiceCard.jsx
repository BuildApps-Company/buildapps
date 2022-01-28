import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';

export const ServiceCard = ({ service }) => {
	const { id, title, description, imageLink } = service;

	return (
		<CardContainer>
			<ServiceImg src={imageLink} alt={id} />
			<ServiceDescription>
				<ServiceTitile>{title}</ServiceTitile>
				<ServiceAboutDesktop>{description}</ServiceAboutDesktop>
			</ServiceDescription>
		</CardContainer>
	);
};

const CardContainer = styled.section`
	display: flex;
	flex-shrink: 0;
	padding: 80px;
	width: 795px;
	height: 292px;
	border-radius: 16px;
	margin: 0 20px;
	background-color: ${colors.grey.background};
	transition: background-color 0.5s ease;

	&:hover {
		background-color: ${colors.Main};
		h3,
		p {
			color: ${colors.light.white};
		}
		img {
			mix-blend-mode: normal;
			filter: invert(1) contrast(200%);
		}
	}

	@media all and (max-width: ${breakpoints.tablet}) {
		width: 60vw;
		height: 148px;
		padding: 38px;
		margin: 0 10px;
	}
`;

const ServiceImg = styled.img`
	display: block;
	width: 64px;
	height: 64px;
	margin-right: 40px;

	@media all and (max-width: ${breakpoints.tablet}) {
		margin-right: 15px;
	}
`;

const ServiceDescription = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	@media all and (max-width: ${breakpoints.tablet}) {
		flex-direction: row;
		align-items: center;
	}
`;

const ServiceTitile = styled.h3`
	display: block;
	font-size: 24px;
	font-weight: 700;
	line-height: 160%;
	margin: 0;
	margin-bottom: 16px;

	@media all and (max-width: ${breakpoints.tablet}) {
		font-size: 18px;
		line-height: 110%;
	}
`;

const ServiceAboutDesktop = styled.p`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
		font-size: 16px;
		line-height: 160%;
		margin: 0;
	}
`;
