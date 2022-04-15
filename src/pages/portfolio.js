import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import { ButtonsList, ProjectsList } from '../components/PortfolioPage';
import { PreFooter } from '../components/MainPage/PreFooter';
import { breakpoints } from '../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';

export default function PortfolioPage() {
	const { t } = useTranslation();
	const filterResetBtn = t('portfolio.filterResetBtn');
	const [selectedCategories, setSelectedCategories] = useState([
		filterResetBtn,
	]);

	const onSelectCategory = newCategory => {
		if (newCategory === filterResetBtn) {
			setSelectedCategories([filterResetBtn]);
			return;
		}

		let newCategories = [];
		const index = selectedCategories.indexOf(newCategory);
		if (index < 0) {
			newCategories = [newCategory];
		} else {
			newCategories = [...selectedCategories];
			newCategories.splice(index, 1);
		}

		if (!newCategories.length) {
			setSelectedCategories([filterResetBtn]);
		} else {
			setSelectedCategories(
				newCategories.filter(
					newSelectedCategory => newSelectedCategory !== filterResetBtn
				)
			);
		}
	};

	return (
		<Page pageName="Portfolio">
			<Toolbar />
			<ContainerWrap>
				<TitleContainer>
					<SubTitle>{t('portfolio.subTitle')}</SubTitle>
					<Title>{t('portfolio.mainTitle')}</Title>
					<AboutPage>{t('portfolio.about')}</AboutPage>
				</TitleContainer>
				<ButtonsList
					selectedCategories={selectedCategories}
					onSelectCategory={onSelectCategory}
				/>

				<ProjectsList selectedCategories={selectedCategories} />
			</ContainerWrap>

			<PreFooter />
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

const ContainerWrap = styled.div`
	overflow: hidden;
	max-width: 1200px;
	margin: 0 auto;
  padding: 0 12px;

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
