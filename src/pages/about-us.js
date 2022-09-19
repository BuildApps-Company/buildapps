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
import { Details } from '../components/PortfolioPage/Details';

export default function AboutUsPage({
	data: {
		api: { leaders, aboutUs },
	},
}) {
	const { t } = useTranslation();

	return (
		<Page pageName="About Us">
			<Toolbar />

			<StyledContainer>
				<AboutUsWrap>
					<TitleContainer>
						<SubTitle>{t('aboutUsPage.subTitle')}</SubTitle>
						{/* <Title>{t('aboutUsPage.mainTitle')}</Title> */}
						<AboutPage>
							{/* <p>{t('aboutUsPage.paragraph1')}</p>
							<p>{t('aboutUsPage.paragraph2')}</p>
							<p>{t('aboutUsPage.paragraph3')}</p> */}
							<Details data={aboutUs.data.attributes.content} />
						</AboutPage>
					</TitleContainer>
					<ContributorsList ourContributorsData={leaders.data} />
				</AboutUsWrap>
				<ContactUsVerticalStretch>
					<ContactUsContainerWrap />
				</ContactUsVerticalStretch>
			</StyledContainer>
			<PreFooter />
		</Page>
	);
}

const ContactUsVerticalStretch = styled.div``;

const AboutUsWrap = styled.div`
	width: 100%;
	padding-right: 16px;
	@media all and (min-width: ${breakpoints.notebook}) {
		width: 65%;
	}
`;
const ContactUsContainerWrap = styled(ContactUsContainer)`
	position: sticky;
	top: 20px;
`;
const StyledContainer = styled(SmallContainer)`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: stretch;

	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
		justify-content: space-around;
	}
`;

const TitleContainer = styled.div`
	margin-bottom: 40px;
`;

const SubTitle = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 0.75rem;
	line-height: 160%;
	opacity: 0.75;
	text-transform: uppercase;
`;

const Title = styled.h1`
	margin: 0 0 8px 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 4rem;
	}
`;

const AboutPage = styled.p`
	font-size: 1rem;

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 1.5rem;
	}
`;

export const query = graphql`
	query($language: String!, $locale: Api_I18NLocaleCode) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
		api {
			aboutUs(locale: $locale) {
				data {
					attributes {
						content
					}
				}
			}
			leaders(locale: $locale) {
				data {
					attributes {
						key
						name
						position
						img {
							data {
								attributes {
									previewUrl
									url
									caption
								}
							}
						}
					}
				}
			}
		}
	}
`;
