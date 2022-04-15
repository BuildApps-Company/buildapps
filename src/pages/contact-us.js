import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import { ContactUsForm, Contacts } from '../components/ContactUsPage';
import { breakpoints } from '../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';

export default function ContactFormPage() {
	const { t } = useTranslation();
	return (
		<Page pageName={'Contact Us'}>
			<Toolbar />
			<StyledPageContainer>
				<FlexContainer>
					<ContactFormContainer>
						<PageName>{t('contactUs.pageName')}</PageName>
						<Title>{t('contactUs.mainTitle')}</Title>
						<Subtitle>{t('contactUs.subTitle')}</Subtitle>
						<ContactUsForm />
					</ContactFormContainer>

					<Contacts />
				</FlexContainer>
			</StyledPageContainer>
		</Page>
	);
}

const StyledPageContainer = styled.div`
	margin: 0 auto 120px;
	padding: 0 16px;

	@media all and (min-width: ${breakpoints.notebook}) {
		margin: 0 auto 120px;
		max-width: 1400px;
	}
`;

const PageName = styled.span`
	margin: 0;
	padding: 0;
	font-size: 0.75rem;
	line-height: 160%;
	opacity: 0.75;
	text-transform: uppercase;
`;

const Subtitle = styled.h2`
	margin: 0 0 32px 0;
	padding: 0;
	font-size: 1.25rem;
	line-height: 160%;
	opacity: 0.75;
`;

const Title = styled.h1`
	margin: 0 0 12px 0;
	padding: 0;
	font-size: 3rem;
	font-weight: bold;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: 1480px) {
		font-size: 4rem;
	}
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 36px;

	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
    gap: unset;
	}
`;

const ContactFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;

	@media all and (min-width: ${breakpoints.tablet}) {
		margin: unset;
		max-width: 90%;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		margin: unset;
		max-width: 600px;
	}
`;

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
