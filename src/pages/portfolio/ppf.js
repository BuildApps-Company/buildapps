import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage/index';
import { graphql } from 'gatsby';
import { StopWarComponent } from '../../components/stopwar/index';

const Ppf = () => {
	return (
		<StopWarComponent />
	);
};

export default Ppf;

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