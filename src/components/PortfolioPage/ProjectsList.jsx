import React, { useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import { Link } from 'gatsby-plugin-react-i18next';
import { usePortfolio } from '../../data';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

const delay = [1000, 1250, 1250, 900, 1150, 900, 1000, 1250, 1350, 1150, 1450, 1000];

export const ProjectsList = ({ selectedCategories }) => {
	const { t } = useTranslation();
	const filterResetBtn = t('portfolio.filterResetBtn');
	const portfolio = usePortfolio();
	const projects = useMemo(
		() =>
			Object.entries(portfolio).filter(
				x =>
					selectedCategories.includes(filterResetBtn) ||
					selectedCategories.some(category =>
						x[1].responsibility.some(res => res === category)
					)
			),
		[portfolio, selectedCategories]
	);

	useEffect(() => {
		Aos.init({
      offset: 150,
      mirror: false,
    });
	}, []);

	return (
		<StyledPortfolioList>
			{projects.map(([key, el], index) => {
				const TitleValue = el.title;

				return (
					<li
						key={key}
						data-aos='fade-up'
						data-aos-duration={delay[index]}
						data-aos-delay={delay[index] - 800}
					>
						<Link to={`${routes.portfolio}${el.id}/`} state={{ project: el }} style={{display: 'block' }}>
							<ProjectContainer background={el.background}>
								<ImageContainer>
									{el.longImage && <img src={el.longImage} alt={el.title} />}
								</ImageContainer>
							</ProjectContainer>
							<StyledTitle>
								<TitleValue></TitleValue>
							</StyledTitle>
						</Link>
					</li>
				);
			})}
		</StyledPortfolioList>
	);
};

const ImageContainer = styled.div`
	display: flex;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	align-self: center;
	max-width: 450px;
	max-height: 280px;
`

const StyledPortfolioList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}

	li {
		@media all and (min-width: ${breakpoints.tablet}) {
			width: calc((100% - 16px) / 2);
		}
	}

	li:nth-child(odd) {
		@media all and (min-width: ${breakpoints.tablet}) {
			margin-right: 16px;
		}
	}

	a {
		text-decoration: none;
	}
`;

const ProjectContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 250px;
  min-width: 280px;
	border-radius: 4px;
	padding: 20px;
	background: ${props =>
		props.background
			? props.background
			: 'linear-gradient(88deg, #D0EEFF 3.37%, #E3FFFD 96.63%);'};

	overflow: hidden;
	
	img {
		display: block;
		max-height: 150px;
		max-width: 168px;

		@media all and (min-width: ${breakpoints.notebook}) {
			display: block;
			max-width: 450px;
			max-height: 336px;
		}
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		justify-content: center;
		width: 584px;
		height: 398px;
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

const StyledTitle = styled.h3 `
	margin: 0;
	padding: 12px 0 0 0;
	margin-bottom: 32px;
	font-size: 16px;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 16px;
		/* margin-top: auto; */
		color: ${colors.Font};
	}
`

const StyledDescription = styled.p`
	display: none;
	@media (min-width: 450px) {
		display: block;
		margin: 0;
		padding: 0;
		line-height: 160%;
	}
	@media all and (min-width: 1480px) {
		font-size: 1.2rem;
		line-height: 160%;
	}
`;
