import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import PortfolioCard from './portfolio-card';
import SectionHeader from './section-header';
import logo from '../../static/images/logo.svg';
import { Menu } from '../data/menu';
import { SlideContainer } from '../styles/shared';

const CardsContainer = styled(SlideContainer)`
	display: flex;
`;

export default () => (
	<div id={Menu.Portfolio.key}>
		<SectionHeader
			smallDescription="portfolio"
			largeDescription="Projects we worked on"
		/>
		<CardsContainer>
			<PortfolioCard
				text="Перербуржская Недвижимость"
				image={logo}
				description="Mobile application"
			/>
			<PortfolioCard
				text="qp.ru"
				image={logo}
				description="Mobile application"
			/>
			<PortfolioCard
				text="VIOL Commander"
				image={logo}
				description="Desktop application"
			/>
		</CardsContainer>
	</div>
);
