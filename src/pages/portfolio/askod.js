import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage/index';
import { graphql } from 'gatsby';

const Askod = () => {
	return (
		<PortfolioDetails id={'askod'} />
	);
};

export default Askod;

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