import React from 'react';
import styled from 'styled-components';
import { Toolbar } from '../../components/shared/Toolbar';
import { ButtonsList, ProjectsList } from '../../components/PortfolioPage';
import { PreFooter } from '../../components/MainPage/PreFooter';
import { Container } from '../../styles/container';
import { breakpoints } from '../../styles/breakpoints';

export default function PortfolioPage() {
	return (
		<>
			<Toolbar />

			<Container>
				<TitleContainer>
					<SubTitle>Build apps - Portfolio</SubTitle>

					<Title>Portfolio</Title>

					<AboutPage>
						Et, morbi quam platea sit morbi consequat. Sollicitudin sagittis at
						consectetur ac feugiat euismod purus.
					</AboutPage>
				</TitleContainer>

				<ButtonsList />

				<ProjectsList />
			</Container>

			<PreFooter />
		</>
	);
}

const TitleContainer = styled.div`
	margin-bottom: 16px;
`;

const SubTitle = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 12px;
	line-height: 160%;
	opacity: 0.75;
	text-transform: uppercase;
`;

const Title = styled.h1`
	margin: 0 0 8px 0;
	padding: 0;
	font-size: 48px;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 64px;
	}
`;

const AboutPage = styled.p`
	margin: 0;
	padding: 0;
	font-size: 16px;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.phone}) {
		max-width: 900px;
		font-size: 24px;
	}
`;
