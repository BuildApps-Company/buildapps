import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { LinksList } from '../components/shared/ProjectLinksList';
import { PreFooter } from '../components/MainPage/PreFooter';
import { routes } from '../utilities/routes';
import { breakpoints } from '../styles/breakpoints';
import { Link } from 'gatsby-plugin-react-i18next';
import { colors } from '../styles/colors';
import arrowBack from '../../static/images/portfolio/goback.png';
import { graphql } from 'gatsby';
import { Details } from '../components/PortfolioPage/Details';
import { ProjectDetailsContainer } from '../styles/portfolio';

export default function PortfolioDetails({ data }) {
	const useCase = data.api.useCases.data[0].attributes;
	const titleValue = useCase.title;

	const Links = useCase.link.data && useCase.link.data.attributes;

	return (
		<Page pageName={useCase.pageTitle}>
			<ProjectTopContainer background={useCase.background}>
				<ProjectInfo>
					<ProjectInfo>
						<StyledLink to={routes.portfolio}>
							<img src={arrowBack} alt="Go Back" />
						</StyledLink>
						<Title>{titleValue}</Title>
						<StyledDescription>{useCase.description}</StyledDescription>
						<ResponsibilitiesWrap>
							{useCase.tags.data.map(res => (
								<StyledResponsibility key={res.tagName}>
									{res.attributes.tagName}
								</StyledResponsibility>
							))}
						</ResponsibilitiesWrap>
					</ProjectInfo>
					{Links && <LinksList links={Links} />}
				</ProjectInfo>
				<ImageWrap
					image={`${process.env.GATSBY_API_DATA_URL}${useCase.longImage.data.attributes.previewUrl}`}
				>
					{useCase.longImage && (
						<img
							src={`${process.env.GATSBY_API_DATA_URL}${useCase.longImage.data.attributes.url}`}
							alt="projecttitle"
						/>
					)}
				</ImageWrap>
			</ProjectTopContainer>
			<ProjectDetailsContainer>
				<Details data={useCase.content} />
			</ProjectDetailsContainer>
			<PreFooter />
		</Page>
	);
}

export const query = graphql`
	query CaseQuery(
		$language: String
		$slug: String
		$locale: Api_I18NLocaleCode
	) {
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
			useCases(locale: $locale, filters: { slug: { eq: $slug } }) {
				data {
					attributes {
						background
						content
						createdAt
						fullDescription
						description
						slug
						locale
						pageTitle
						publishedAt
						title
						updatedAt
						image {
							data {
								attributes {
									alternativeText
									previewUrl
									url
								}
							}
						}
						link {
							data {
								attributes {
									appStore
									createdAt
									playMarket
								}
							}
						}
						longImage {
							data {
								attributes {
									previewUrl
									url
									alternativeText
								}
							}
						}
						tags {
							data {
								attributes {
									tagName
								}
							}
						}
					}
				}
			}
		}
	}
`;

const StyledLink = styled(Link)`
	display: block;
	width: 64px;
	height: 64px;
`;

const ProjectTopContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: auto;
	padding: 95px 16px;
	overflow: hidden;
	background: ${props =>
		props.background
			? props.background
			: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%);'};
	@media all and (min-width: ${breakpoints.phone}) {
		height: 100vh;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
		padding-left: 18%;
		padding-right: 18%;
	}
`;

const ImageWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		display: block;
		max-width: 75%;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		justify-content: flex-end;
		align-items: flex-end;

		img {
			max-height: 65%;
			max-width: 90%;
			transform: translateX(-40px);
		}
	}
`;

const ProjectInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media all and (min-width: ${breakpoints.notebook}) {
		max-width: 600px;
	}
`;

const Title = styled.h1`
	font-size: 2rem;
	color: ${colors.light.white};

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 3rem;
		margin: 0 0 8px 0;
		padding: 0;
		span {
			display: inline;
		}
	}
`;

const StyledResponsibility = styled.p`
	display: block;
	box-sizing: border-box;
	margin-right: 20px;
	padding: 12px 16px;
	color: ${colors.light.white};
	font-weight: 700;
	text-transform: uppercase;
	border: 1px solid ${colors.light.white};
	border-radius: 4px;

	&:last-child {
		margin-right: 0;
	}
`;

const ResponsibilitiesWrap = styled.div`
	display: flex;
`;

const StyledDescription = styled.p`
	color: ${colors.light.white};
	margin: 0;
	padding: 0;
	line-height: 160%;
	text-align: justify;

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 1rem;
	}
`;
