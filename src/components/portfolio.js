import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import PortfolioCard from './portfolio-card';
import SectionHeader, { Divider } from './section-header';
import { Menu } from '../data/menu';
import { Portfolio } from '../data/portfolio';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { theme } from '../styles/theme';

const StyledAwesomeSlider = styled(AwesomeSlider)`
	--slider-height-percentage: 250px !important;
	padding-bottom: 15vh;

	@media all and (max-width: ${theme.breakpoints.tablet}px) {
		--slider-height-percentage: 350px !important;
	}

	.awssld__content {
		background-color: ${theme.colors.primary};
	}

	.awssld__wrapper {
		max-width: 1200px;
		margin: 0 auto;
	}

	.awssld__controls__arrow-left:before,
	.awssld__controls__arrow-left:after,
	.awssld__controls__arrow-right:before,
	.awssld__controls__arrow-right:after {
		background-color: ${theme.colors.whiteSmoke} !important;
	}
`;

const Container = styled.div`
	background-color: ${theme.colors.primary};
`;

const StyledSectionHeader = styled(SectionHeader)`
	color: ${theme.colors.whiteSmoke};

	${Divider} {
		margin-bottom: 0;
	}
`;

export default () => (
	<Container id={Menu.portfolio.key}>
		<StyledSectionHeader
			smallDescription="portfolio"
			largeDescription="Projects we worked on"
		/>
		<StyledAwesomeSlider bullets={false}>
			{Object.entries(Portfolio).map(([key, example]) => (
				<div>
					<PortfolioCard
						key={key}
						text={example.title}
						image={example.image}
						description={example.description}
						responsibility={example.responsibility}
					/>
				</div>
			))}
		</StyledAwesomeSlider>
	</Container>
);
