import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage';
import { graphql } from 'gatsby';
import { StopWarComponent } from '../../components/stopwar/index';

const CardanoWater = () => {
	return (
		<StopWarComponent />
	);
};

export default CardanoWater;

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
