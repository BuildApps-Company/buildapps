import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage';
import { graphql } from 'gatsby';

const IphoneDiscount = () => {
	return (
		<PortfolioDetails id={'iphonediscount'} />
	);
};

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

export default IphoneDiscount;
