import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Portfolio } from '../../data/projects';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';

export const ProjectsList = () => {
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', setWidth(window.innerWidth));
	}, []);

	return (
		<StyledPortfolioList>
			{Object.entries(Portfolio).map(([key, el]) => (
				<li key={key}>
					<Link
						to="/PortfolioDetails/PortfolioDetailsPage/"
						state={{ project: el }}
					>
						<ImageContainer>
							<h3>{el.title}</h3>
							<img src={el.longImage} alt={el.title} />
						</ImageContainer>

						{width > 450 && (
							<>
								{el.responsibility.map(el => (
									<StyledResponsibility>{el}</StyledResponsibility>
								))}
								<StyledDescription>{el.description}</StyledDescription>
							</>
						)}
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

	@media all and (min-width: ${breakpoints.phone}) {
		display: flex;
		flex-wrap: wrap;
	}

	li {
		@media all and (min-width: ${breakpoints.phone}) {
			width: calc((100% - 16px) / 2);
		}
	}

	li:not(:nth-last-child(-n + 2)) {
		@media all and (min-width: ${breakpoints.phone}) {
			margin-bottom: 64px;
		}
	}

	li:not(:last-child) {
		@media all and (max-width: ${breakpoints.phone}) {
			margin-bottom: 16px;
		}
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
		font-size: 1.25rem;
		line-height: 160%;

		@media all and (min-width: ${breakpoints.phone}) {
			font-size: 1.5rem;
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

const StyledResponsibility = styled.p`
	display: inline-block;
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
`;
