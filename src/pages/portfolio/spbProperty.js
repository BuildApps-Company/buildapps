import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage/index';
import { graphql } from 'gatsby';

const spbProperty = () => {
	return (
		<PortfolioDetails id={'spbProperty'} />
	);
};

export default spbProperty;

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