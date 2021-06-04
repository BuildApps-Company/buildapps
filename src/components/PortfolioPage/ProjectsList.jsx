import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Portfolio } from '../../data/projects';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { allProjects } from '../../data/projects';
import { colors } from '../../styles/colors';

export const ProjectsList = ({ selectedCategories }) => {
	const projects = Object.entries(Portfolio).filter(
		x =>
			selectedCategories.includes(allProjects) ||
			selectedCategories.some(category =>
				x[1].responsibility.some(res => res === category)
			)
	);

	return (
		<StyledPortfolioList>
			{projects.map(([key, el]) => (
				<li key={key}>
					<Link to={`${routes.portfolio}/${key}`} state={{ project: el }}>
						<ImageContainer image={el.longImage} background={el.background}>
							<h3>{el.title}</h3>
							{el.longImage && <img src={el.longImage} alt={el.title} />}
						</ImageContainer>

						<>
							{el.responsibility.map(el => (
								<StyledResponsibility key={el}>{el}</StyledResponsibility>
							))}
							<StyledDescription>{el.description}</StyledDescription>
						</>
					</Link>
				</li>
			))}
		</StyledPortfolioList>
	);
};

const StyledPortfolioList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;

	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}

	li {
		margin-bottom: 16px;
		@media all and (min-width: ${breakpoints.tablet}) {
			width: calc((100% - 16px) / 2);
		}
	}

	li:nth-child(odd) {
		@media all and (min-width: ${breakpoints.tablet}) {
			margin-right: 16px;
			margin-bottom: 64px;
		}
	}

	a {
		text-decoration: none;
	}
`;

const ImageContainer = styled.div`
	min-height: 198px;
	padding: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${props =>
		props.background
			? props.background
			: 'linear-gradient(88deg, #D0EEFF 3.37%, #E3FFFD 96.63%);'};

	overflow: hidden;

	h3 {
		font-size: 1.25rem;
		line-height: 160%;
		width: 40%;

		@media all and (min-width: ${breakpoints.notebook}) {
			font-size: 1.5rem;
			margin-top: auto;
			color: ${colors.light.white};
		}
	}
	img {
		max-height: 150px;
		max-width: 168px;

		@media all and (min-width: ${breakpoints.notebook}) {
			max-width: 100%;
			max-height: 110%;
		}
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		justify-content: start;
		min-height: 324px;
		height: 325px;
		background: ${props =>
			props.background
				? props.background
				: 'linear-gradient(30deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%);'};
	}
`;

const StyledResponsibility = styled.p`
	display: none;
	@media (min-width: 450px) {
		display: inline-block;
		font-weight: 700;
		line-height: 160%;
		text-transform: uppercase;
		opacity: 0.75;

		&:not(:last-child) {
			margin-right: 24px;
		}
	}
`;

const StyledDescription = styled.p`
	display: none;
	@media (min-width: 450px) {
		display: block;
		margin: 0;
		padding: 0;
		line-height: 160%;
	}
`;
