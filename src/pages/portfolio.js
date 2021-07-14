import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import { ButtonsList, ProjectsList } from '../components/PortfolioPage';
import { PreFooter } from '../components/MainPage/PreFooter';
import { Container } from '../styles/container';
import { breakpoints } from '../styles/breakpoints';
import { allProjects } from '../data/projects';

export default function PortfolioPage() {
	const [selectedCategories, setSelectedCategories] = useState([allProjects]);

	const onSelectCategory = newCategory => {
		if (newCategory === allProjects) {
			setSelectedCategories([allProjects]);
			return;
		}

		let newCategories = [];
		const index = selectedCategories.indexOf(newCategory);
		if (index < 0) {
			newCategories = [...selectedCategories, newCategory];
		} else {
			newCategories = [...selectedCategories];
			newCategories.splice(index, 1);
		}

		if (!newCategories.length) {
			setSelectedCategories([allProjects]);
		} else {
			setSelectedCategories(
				newCategories.filter(
					newSelectedCategory => newSelectedCategory !== allProjects
				)
			);
		}
	};

	return (
		<Page>
			<Toolbar />
			<ContainerWrap>
				<TitleContainer>
					<SubTitle>Build apps - Portfolio</SubTitle>
					<Title>Portfolio</Title>
					<AboutPage>
						BuildApps is an actively developing IT company that provides a wide
						range of high quality products, solutions and services in the field
						of information technology. The main areas of our activity are the
						development of Internet projects of various levels of complexity,
						the creation of business automation systems and IT consulting.
					</AboutPage>
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
		/* max-width: 900px; */
		font-size: 1.5rem;
	}
`;

const ContainerWrap = styled(Container)`
	@media all and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.notebook}) {
		padding-left: 56px;
		padding-right: 56px;
	}
`;
