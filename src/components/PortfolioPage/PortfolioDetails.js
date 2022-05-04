import React from 'react';
import styled from 'styled-components';
import { Page } from '../../components/shared/Page';
import { Toolbar } from '../../components/shared/Toolbar';
import { LinksList } from '../shared/ProjectLinksList';
import { PreFooter } from '../../components/MainPage/PreFooter';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { Link } from 'gatsby-plugin-react-i18next';
import { usePortfolio } from '../../data';
import { colors } from '../../styles/colors';
import { useTranslation } from 'react-i18next';
import arrowBack from '../../../static/images/portfolio/goback.png';

export function PortfolioDetails({ id }) {
	const projects = usePortfolio();
	const projectsValues = Object.values(projects);
	const project = projectsValues.find(el => el.id === id);
	const TitleValue = project.title;
	const Details = project.pageContent;
	const Links = project.links;

	return (
		<Page pageName={project.pageTitle}>
			<ProjectTopContainer background={project.background}>
				<ProjectInfo>
					<ProjectInfo>
						<StyledLink to={routes.portfolio}>
							<img src={arrowBack} alt="Go Back" />
						</StyledLink>
						<Title>
							<TitleValue></TitleValue>
						</Title>
						<StyledDescription>{project.description}</StyledDescription>
						<ResponsibilitiesWrap>
							{project.responsibility.map(res => (
								<StyledResponsibility key={res}>{res}</StyledResponsibility>
							))}
						</ResponsibilitiesWrap>
					</ProjectInfo>
					<LinksList links={Links} />
				</ProjectInfo>
				<ImageWrap image={project.longImage}>
					{project.longImage && (
						<img src={project.longImage} alt="projecttitle" />
					)}
				</ImageWrap>
			</ProjectTopContainer>
			<Details />
			<PreFooter />
		</Page>
	);
}

const StyledLink = styled(Link)`
	display: block;
	width: 64px;
	height: 64px;
`;

const ProjectTopContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	padding: 95px 16px;
	background: ${props =>
		props.background
			? props.background
			: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%);'};
	@media all and (min-width: ${breakpoints.phone}) {
		height: 950px;
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
		max-width: 100%;
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
