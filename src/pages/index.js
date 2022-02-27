import { graphql } from 'gatsby';
import React from 'react';
import { MainPage } from '../components/MainPage';
import { Page, pageQuery } from '../components/shared/Page';
import { StopWarComponent } from '../components/stopwar/index';

export default () => (
	<Page>
		<StopWarComponent />
	</Page>
);

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
