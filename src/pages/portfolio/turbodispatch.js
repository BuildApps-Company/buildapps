import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage';
import { graphql } from 'gatsby';

const TurboDispatch = () => {
	return (
		<PortfolioDetails id={'turbodispatch'} />
	);
};

export default TurboDispatch;

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
