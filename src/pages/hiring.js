import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { FilterMobileScreen } from '../components/HiringPage/FilterMobileScreen';
import { Toolbar } from '../components/shared/Toolbar';
import { VacanciesList } from '../components/HiringPage';
import { FilterList } from '../components/HiringPage';
import { PreFooter } from '../components/MainPage/PreFooter';
import { breakpoints } from '../styles/breakpoints';
import { colors } from '../styles/colors';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';

import filterIco from '../../static/images/hiring/filter.png';

export default function PortfolioPage() {
	const { t } = useTranslation();

	const [selectedCategories, setSelectedCategories] = useState([]);
	const [modalIsOpen, setModalState] = useState(false);

	const onSelectCategory = category => {
		let newCategoriesPool = [...selectedCategories];
		const index = selectedCategories.indexOf(category);
		if (index >= 0) {
			newCategoriesPool.splice(index, 1);
		} else {
			newCategoriesPool.push(category);
		}
		setSelectedCategories(newCategoriesPool);
	};

	return (
		<Page pageName="Hiring">
			<FilterMobileScreen
				modalIsOpen={modalIsOpen}
				setModalState={setModalState}
				selectedCategories={selectedCategories}
				onSelectCategory={onSelectCategory}
				setSelectedCategories={setSelectedCategories}
			/>
			<Toolbar />
			<ContainerWrap>
				<ContentWrap>
					<TitleContainer>
						<SubTitle>&#128181;</SubTitle>
						<Title>{t('hiring.mainTitle')}</Title>
						<AboutPage>{t('hiring.about')}</AboutPage>
						{/* <FilterMobile onClick={() => setModalState(true)}>
							<FilterImg />
							Filters
						</FilterMobile> */}
					</TitleContainer>

					<VacanciesList selectedCategories={selectedCategories} />
				</ContentWrap>
				{/* <FilterWrap>
					<FilterList
						selectedCategories={selectedCategories}
						onSelectCategory={onSelectCategory}
					/>
				</FilterWrap> */}
			</ContainerWrap>

			<PreFooter />
		</Page>
	);
}

const FilterMobile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 140px;
	font-size: 1.5rem;
	font-weight: 700;
	text-transform: uppercase;
	padding: 8px 8px 4px;
	margin: 0;
	border: 1px solid ${colors.grey.constants};
	border-radius: 4px;

	@media all and (min-width: ${breakpoints.notebook}) {
		display: none;
	}
`;

const FilterImg = styled.div`
	display: block;
	width: 20px;
	height: 20px;
	background-image: url(${filterIco});
	background-repeat: no-repeat;
	margin-right: 8px;
`;

const ContentWrap = styled.div`
	display: block;
	max-width: 780px;
	padding: 0 20px;
`;

const FilterWrap = styled.div`
	display: none;

	@media all and (min-width: ${breakpoints.notebook}) {
		display: block;
		max-width: 550px;
		padding: 0 10px 95px;
		margin-left: 80px;
	}
`;

const TitleContainer = styled.div`
	margin-bottom: 24px;

	@media all and (min-width: ${breakpoints.tablet}) {
		margin-bottom: 64px;
	}
`;

const SubTitle = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 3em;
	line-height: 160%;
	opacity: 0.75;
	text-transform: uppercase;
`;

const Title = styled.h1`
	margin: 0 0 8px 0;
	padding: 0;
	font-size: 2rem;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 3rem;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 4rem;
	}
`;

const AboutPage = styled.p`
	margin: 0;
	padding: 0;
	line-height: 160%;
	margin-bottom: 32px;

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 1.5rem;
		margin-bottom: 46px;
	}
`;

const ContainerWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	max-width: 1400px;
	margin: 0 auto;
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
