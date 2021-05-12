import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import { PricesTable, PricesCalculator } from '../components/PricesPage';
import { PreFooter } from '../components/MainPage/PreFooter';
import { Container } from '../styles/container';
import { breakpoints } from '../styles/breakpoints';

export default function PortfolioPage() {
	return (
		<Page>
			<Toolbar />

			<Container>
				<TitleContainer>
					<SubTitle>Build apps - Prices and services</SubTitle>
					<Title>Prices and services</Title>
				</TitleContainer>
			</Container>

			<PricesTable />

			<Container>
				<TitleContainer>
					<Title>Prices calculator</Title>
				</TitleContainer>
			</Container>

			<PricesCalculator />

			<PreFooter />
		</Page>
	);
}

const TitleContainer = styled.div`
	margin-bottom: 24px;
`;

const SubTitle = styled.h2`
	margin: 0 0 16px 0;
	padding: 0;
	font-size: 0.75rem;
	line-height: 160%;
	opacity: 0.75;
	text-transform: uppercase;
`;

const Title = styled.h1`
	margin: 0 0 8px 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.phone}) {
		margin-bottom: 24px;
		font-size: 4rem;
	}
`;
