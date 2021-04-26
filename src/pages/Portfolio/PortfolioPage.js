import React from 'react';
import styled from 'styled-components';
import { Toolbar } from '../../components/shared/Toolbar';
import { PreFooter } from '../../components/MainPage/PreFooter';
import { Portfolio } from '../../data/projects';
import { breakpoints } from '../../styles/breakpoints';
import { Container } from '../../styles/container';

const buttons = [
	{
		key: 'all',
		name: 'All',
	},
	{
		key: 'design',
		name: 'Design',
	},
	{
		key: 'web',
		name: 'Web',
	},
	{
		key: 'mobile',
		name: 'Mobile',
	},
	{
		key: 'desktop',
		name: 'Desktop',
	},
];

export default function PortfolioPage() {
	return (
		<>
			<Toolbar />
			<TitleContainer>
				<SubTitle>Build apps - Portfolio</SubTitle>

				<Title>Portfolio</Title>

				<AboutPortfolio>
					Et, morbi quam platea sit morbi consequat. Sollicitudin sagittis at
					consectetur ac feugiat euismod purus.
				</AboutPortfolio>
			</TitleContainer>

			<ButtonList>
				{buttons.map(el => (
					<li key={el.key}>
						<Button>{el.name}</Button>
					</li>
				))}
			</ButtonList>

			<Container>
				<PortfolioList>
					{Object.entries(Portfolio).map(([key, el]) => (
						<li key={key}>
							<a href="">
								<ImageContainer>
									<h3>{el.title}</h3>
									<img src={el.longImage} alt={el.title} />
								</ImageContainer>

								<p>{el.responsibility}</p>
								<p>{el.description}</p>
							</a>
						</li>
					))}
				</PortfolioList>
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
`;

const Title = styled.h1`
	margin: 0;
	padding: 0;
	font-size: 48px;
	line-height: 160%;
	text-transform: uppercase;
`;

const AboutPortfolio = styled.p`
	font-size: 16px;
	line-height: 160%;
`;

const ButtonList = styled.ul`
	margin: 0 0 16px 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	list-style: none;

	li {
		margin-right: 16px;
	}
`;

const Button = styled.button`
	padding: 12px 16px;

	text-transform: uppercase;
	background-color: transparent;
	border: 1px solid rgba(49, 49, 49, 0.25);
`;

const PortfolioList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;

	@media all and (min-width: ${breakpoints.phone}) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	li {
		@media all and (min-width: ${breakpoints.phone}) {
			width: calc((100% - 16px) / 2);
		}
	}

	li:not(:last-child) {
		margin-bottom: 16px;
	}

	li:nth-child(odd) {
		@media all and (min-width: ${breakpoints.phone}) {
			margin-right: 16px;
		}
	}

	a {
		text-decoration: none;
	}

	img {
		object-fit: contain;
		max-width: 130px;
		max-heigh: 130px;
	}
`;

const ImageContainer = styled.div`
	padding: 33px 36px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: linear-gradient(88deg, #d0eeff 3.37%, #e3fffd 96.63%);

	@media all and (min-width: ${breakpoints.phone}) {
		min-height: 325px;
	}
`;
