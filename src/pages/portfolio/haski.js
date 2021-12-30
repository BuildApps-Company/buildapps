import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage';
import { graphql } from 'gatsby';

const Haski = () => {
	return (
		<PortfolioDetails id={'haski'} />
	);
};

export default Haski;

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
