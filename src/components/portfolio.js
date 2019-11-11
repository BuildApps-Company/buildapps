import React from 'react';
import styled from 'styled-components';
import PortfolioCard from './portfolio-card';
import SectionHeader from './section-header';
import { Menu } from '../data/menu';
import { SlideContainer } from '../styles/shared';
import { Portfolio } from '../data/portfolio';

const CardsContainer = styled(SlideContainer)`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

export default () => (
	<div id={Menu.portfolio.key}>
		<SectionHeader
			smallDescription="portfolio"
			largeDescription="Projects we worked on"
		/>
		<CardsContainer>
			{Object.entries(Portfolio).map(([key, example]) => (
				<PortfolioCard
					key={key}
					text={example.title}
					image={example.image}
					description={example.description}
				/>
			))}
		</CardsContainer>
	</div>
);
