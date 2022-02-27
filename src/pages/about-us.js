import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import {
	ContributorsList,
	ContactUsContainer,
} from '../components/AboutUsPage';
import { PreFooter } from '../components/MainPage/PreFooter';
import { SmallContainer } from '../styles/container';
import { breakpoints } from '../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import { StopWarComponent } from '../components/stopwar/index';

export default function AboutUsPage() {
	const { t } = useTranslation();

	return (
		<Page pageName="About Us">
      <StopWarComponent />
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
