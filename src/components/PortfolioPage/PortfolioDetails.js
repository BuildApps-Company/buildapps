import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Page } from '../../components/shared/Page';
import { Toolbar } from '../../components/shared/Toolbar';
import { PreFooter } from '../../components/MainPage/PreFooter';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { Portfolio } from '../../data/projects';

export function PortfolioDetails({ id, children }) {
	const projectsValues = Object.values(Portfolio);
	const projectValues = projectsValues.find(el => el.id === id);
	return (
		<Page>
			<Toolbar />

			<StyledLink to={routes.portfolio}>GO back to portfolio</StyledLink>

			<ProjectImageContainer>
				<ImageWrap>
					<img src={projectValues.longImage} alt={projectValues.title} />
				</ImageWrap>
			</ProjectImageContainer>

			<ProjectDetailsContainer>
				<Title>{projectValues.title}</Title>

				{projectValues.responsibility.map(res => (
					<StyledResponsibility>{res}</StyledResponsibility>
				))}

				<StyledDescription>{projectValues.description}</StyledDescription>
			</ProjectDetailsContainer>
			{children}
			<PreFooter />
		</Page>
	);
}

const StyledLink = styled(Link)`
	display: inline-block;
	margin: 0 0 16px 0;
	padding: 0 0 0 11%;
	font-size: 0.75rem;
	line-height: 160%;
	opacity: 0.75;
	text-decoration: none;
	text-transform: uppercase;
	color: #874aad;
`;

const ProjectImageContainer = styled.div`
	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 25%;
		padding-right: 25%;
	}
`;

const ImageWrap = styled.div`
	width: 100%;
	overflow: hidden;
	height: 216px;
	display: flex;
	align-items: center;
	justify-content: center;
	/* margin-bottom: 32px; */
	background: linear-gradient(88deg, #cfd9df 3.37%, #e2ebf0 96.63%);

	@media all and (min-width: ${breakpoints.notebook}) {
		height: 324px;
		padding: 20px;
	}

	img {
		/* width: 44%; */
		/* transform: rotate(-16deg); */
		min-height: 60%;
		max-height: 90%;
		@media all and (min-width: ${breakpoints.notebook}) {
			min-height: 80%;
			max-height: 110%;
			margin: 20px 0;
		}
	}
`;

const Title = styled.h1`
	font-size: 3rem;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 4rem;
		margin: 0 0 8px 0;
		padding: 0;
	}
`;

const StyledResponsibility = styled.p`
	display: inline-block;
	margin: 0 0 16px 0;
	padding: 0;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	opacity: 0.75;

	&:not(:last-child) {
		margin-right: 24px;
	}
`;

const StyledDescription = styled.p`
	margin: 0;
	padding: 0;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.phone}) {
		max-width: 900px;
		font-size: 1.5rem;
	}
`;

const ProjectDetailsContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 24px;
	padding-left: 16px;
	padding-right: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 25%;
		padding-right: 25%;
		margin-bottom: 48px;
	}
`;
