import React from 'react';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import { ServicesAndWorkflow } from '../components/ServicesWorkflow';
import { PreFooter } from '../components/MainPage/PreFooter';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';

export default function PortfolioPage() {
	const { t } = useTranslation();
	return (
		<Page pageName={t('prices.pageName')}>
			<Toolbar />
      <ServicesAndWorkflow />

			<PreFooter />
		</Page>
	);
}

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
