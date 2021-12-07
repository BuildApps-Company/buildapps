import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import {
	PricesTable,
	PricesTableMob,
	PricesCalculator,
	PricesCalculatorMob,
} from '../components/PricesPage';
import { PreFooter } from '../components/MainPage/PreFooter';
import { Container } from '../styles/container';
import { breakpoints } from '../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';

export default function PortfolioPage() {
  const { t } = useTranslation();
	return (
		<Page pageName={t('prices.pageName')}>
			<Toolbar />

			<Container>
				<TitleContainer>
					<SubTitle>{t('prices.subTitle')}</SubTitle>
					<Title>{t('prices.mainTitle')}</Title>
				</TitleContainer>
			</Container>

			<PricesTable />
			<PricesTableMob />

			<Container>
				<TitleContainer>
					<Title>{t('prices.calcTitle')}</Title>
				</TitleContainer>
			</Container>

			<PricesCalculator />
			<PricesCalculatorMob />

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

	@media all and (min-width: ${breakpoints.notebook}) {
		margin-bottom: 24px;
		font-size: 4rem;
	}
`;

export const query = graphql`
	query($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
