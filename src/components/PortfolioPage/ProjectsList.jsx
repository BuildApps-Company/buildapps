import React from 'react';
import styled from 'styled-components';
import { Portfolio } from '../../data/projects';
import { breakpoints } from '../../styles/breakpoints';

export const ProjectsList = () => {
	return (
		<StyledPortfolioList>
			{Object.entries(Portfolio).map(([key, el]) => (
				<li key={key}>
					<a href="">
						<ImageContainer>
							<h3>{el.title}</h3>
							<img src={el.longImage} alt={el.title} />
						</ImageContainer>

						<AboutProject>
							<StyledResponsibility>{el.responsibility}</StyledResponsibility>
							<StyledDescription>{el.description}</StyledDescription>
						</AboutProject>
					</a>
				</li>
			))}
		</StyledPortfolioList>
	);
};

const StyledPortfolioList = styled.ul`
	margin: 0 0 24px 0;
	padding: 0;
	list-style: none;

	@media all and (min-width: ${breakpoints.phone}) {
		display: flex;
		flex-wrap: wrap;
	}

	li {
		@media all and (min-width: ${breakpoints.phone}) {
			width: calc((100% - 16px) / 2);
		}
	}

	li:not(:last-child) {
		margin-bottom: 16px;
	}

	li:nth-child(odd) {
		@media all and (min-width: ${breakpoints.phone}) {
			margin-right: 16px;
		}
	}

	a {
		text-decoration: none;
	}

	h3 {
		font-size: 20px;
		line-height: 160%;

		@media all and (min-width: ${breakpoints.phone}) {
			font-size: 24px;
		}
	}

	img {
		max-width: 150px;
		max-height: 130px;
	}
`;

const ImageContainer = styled.div`
	min-height: 200px;
	padding: 33px 36px 33px 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: linear-gradient(88deg, #d0eeff 3.37%, #e3fffd 96.63%);

	@media all and (min-width: ${breakpoints.phone}) {
		min-height: 325px;
	}
`;

const AboutProject = styled.div`
	display: none;

	@media all and (min-width: ${breakpoints.phone}) {
		display: block;
	}
`;

const StyledResponsibility = styled.p`
	font-size: 16px;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	opacity: 0.75;
`;

const StyledDescription = styled.p`
	font-size: 16px;
	line-height: 160%;
`;
