import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import { ContactUsForm, Contacts } from '../components/ContactUsPage';
import { breakpoints } from '../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import { StopWarComponent } from '../components/stopwar/index';

export default function ContactFormPage() {
  const { t } = useTranslation();
	return (
		<Page pageName={'Contact Us'}>
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
