import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import { ButtonsList, ProjectsList } from '../components/PortfolioPage';
import { PreFooter } from '../components/MainPage/PreFooter';
import { Container } from '../styles/container';
import { breakpoints } from '../styles/breakpoints';
import { allProjects } from '../types/projects';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import { StopWarComponent } from '../components/stopwar/index';

export default function PortfolioPage() {

	return (
		<Page pageName="Portfolio">
      <StopWarComponent />
		</Page>
	);
}

const TitleContainer = styled.div`
	margin-bottom: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		margin-bottom: 40px;
	}
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

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 4rem;
	}
`;

const AboutPage = styled.p`
	margin: 0;
	padding: 0;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 1.5rem;
	}
`;

const ContainerWrap = styled(Container)`
	overflow: hidden;
	@media all and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.notebook}) {
		padding-left: 56px;
		padding-right: 56px;
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
