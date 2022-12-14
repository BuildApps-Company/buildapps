import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { routes } from '../../utilities/routes';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { H4, SubH3, Body2 } from '../../styles/styled-headers';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby-plugin-react-i18next';
import { StyledLink } from '../../styles/layout';

export const LatestProjectDesktop = ({ projectsDesktop }) => {
	const [item, setItem] = useState(0);
	const containerRef = useRef();

	const { t } = useTranslation();

	const scrollHandler = event => {
		if (!containerRef.current) {
			return;
		}
		const rect = containerRef.current.getBoundingClientRect();
		const singleScreenHeight = rect.height / projectsDesktop.length;

		if (rect.y > 0) {
			setItem(0);
		} else if (rect.bottom < singleScreenHeight) {
			setItem(projectsDesktop.length - 1);
		} else {
			const newIndex = Math.round(Math.abs(rect.y) / singleScreenHeight);
			setItem(newIndex);
		}
	};

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return () => document.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<ContainerParent
			ref={containerRef}
			style={{ minHeight: `${projectsDesktop.length * 100}vh` }}
		>
			<LatestProjectsContainer>
				<Container>
					<TitleWrap>
						<TitlePage data-aos="fade-right">
							{t('latestProjects.latestProjects')}
						</TitlePage>
						<StyledLink data-aos="fade-up" to={routes.portfolio}>
							{t('latestProjects.all')}
						</StyledLink>
					</TitleWrap>
					<Pagination>
						{projectsDesktop.map((_, i) => (
							<Tab
								key={i}
								active={item === i}
								onClick={() => {
									const rect = containerRef.current.getBoundingClientRect();
									const y =
										window.pageYOffset +
										rect.y +
										(rect.height / projectsDesktop.length) * i;
									window.scrollTo(0, y);
								}}
							></Tab>
						))}
					</Pagination>
				</Container>
				<ProjectsContainer>
					{projectsDesktop.map((activeProject, index) => (
						<ProjectContainer key={index} visible={item === index}>
							<ProjectWrap>
								<ImageWrapDesktop
									image={activeProject.longImage}
									background={activeProject.background}
									visible={item === index}
								>
									{activeProject.longImage && (
										<img src={activeProject.longImage} alt="longImg" />
									)}
								</ImageWrapDesktop>
								<DetailsWrap data-aos="fade-up" data-aos-delay="200">
									<SmallLogo src={activeProject.image} />
									<Title>{activeProject.pageTitle}</Title>
									<TagContainer>
										{activeProject.responsibility.map(res => (
											<Tag key={res}>{res}</Tag>
										))}
									</TagContainer>
									<Description>{activeProject.description}</Description>
									<StyledButton to={`${routes.portfolio}${activeProject.id}/`}>
										<svg>
											<rect
												x="0"
												y="0"
												fill="none"
												width="100%"
												height="100%"
											/>
										</svg>
										{t('latestProjects.detailsButton')}
									</StyledButton>
								</DetailsWrap>
							</ProjectWrap>
						</ProjectContainer>
					))}
				</ProjectsContainer>
			</LatestProjectsContainer>
		</ContainerParent>
	);
};
const StyledButton = styled(Link)`
	display: flex;
	align-items: center;
	font-size: 1em;
	font-weight: 600;
	padding: 10px 20px 8px;
	margin-top: 32px;
	position: relative;
	text-transform: uppercase;
	text-decoration: none;
	color: #874aad;

	&:not(:last-child) {
		margin-right: 16px;
	}

	svg {
		position: absolute;
		border-radius: 4px;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	rect {
		fill: none;
		stroke: #874aad;
		stroke-width: 3.5;
		stroke-dasharray: 227, 0;
		transition: all 0.35s linear;
	}

	&:hover rect {
		stroke-width: 5;
		stroke-dasharray: 15, 115;
		stroke-dashoffset: 48;
		transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
	}

	&:first-of-type:hover rect {
		stroke-dasharray: 15, 220;
	}
`;

const ContainerParent = styled.div`
	margin-top: 0px;
	margin-bottom: 28px;
`;
const LatestProjectsContainer = styled.div`
	@media all and (min-width: ${breakpoints.tablet}) {
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		top: 0;
		position: sticky;
	}
`;

const Container = styled.div`
	@media all and (min-width: ${breakpoints.tablet}) {
		margin: 0;
		padding: 0 40px 0 30px;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		padding: 40px 11% 0;
	}
`;

const ProjectContainer = styled(Container)`
	@media all and (min-width: ${breakpoints.tablet}) {
		width: 100%;
		display: flex;
		flex: 1 1 auto;
		margin: 0;
		padding: 0;
		overflow: hidden;
		transition: opacity 0.3s;

		${({ visible }) =>
			visible
				? 'opacity: 1; '
				: 'opacity: 0; position: absolute; top: 0; left: 0; height: 100%; z-index: -1; overflow: hidden;'};
	}
`;

const TitleWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TitlePage = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;
	text-transform: uppercase;
	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 4rem;
	}
`;

const Pagination = styled.div`
	@media all and (min-width: ${breakpoints.tablet}) {
		display: flex;
		margin-bottom: 32px;
	}
`;

const ProjectWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-grow: 1;
	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}
`;

const ImageWrapDesktop = styled.div`
	@media all and (min-width: ${breakpoints.tablet}) {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0px 16px 16px 0px;
		width: 50%;
		flex-shrink: 0;
		flex-grow: 0;
		height: 100%;
		padding: 10px 20px;
		transition: opacity 0.4s;
	}

	${({ visible }) => (visible ? 'opacity: 1;' : 'opacity: 0;')};

	background: ${props =>
		props.background
			? props.background
			: 'linear-gradient(88deg, #D0EEFF 3.37%, #E3FFFD 96.63%);'};

	img {
		max-width: 100%;
		object-fit: contain;
		max-height: 100%;
		transition: transform 0.8s;
		${({ visible }) =>
			visible ? 'transform: translateX(0)' : 'transform: translateX(-150%)'};
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		padding: 30px 70px;
	}
`;

const DetailsWrap = styled.div`
	@media all and (min-width: ${breakpoints.tablet}) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: 50%;
		flex-shrink: 0;
		flex-grow: 0;
		padding: 0px 11% 0px 7%;
	}
`;

const SmallLogo = styled.img`
	max-height: 60px;
`;

const Tag = styled(SubH3)`
	border: 1px solid #D9DBE4;
	border-radius: 4px;
	padding: 10px 12px 6px;
	line-height: 100%;
	color: ${colors.Font};
	text-transform: uppercase;

	& + & {
		margin-left: 12px;
	}
`;

const Title = styled(H4)`
	margin-top: 32px;
`;

const TagContainer = styled.div`
	display: flex;
	margin-top: 12px;
`;

const Description = styled(Body2)`
	margin-top: 16px;
	@media all and (min-width: 1480px) {
		font-size: 1.2rem;
		line-height: 160%;
	}
`;

const Tab = styled.div`
	cursor: pointer;
	padding: 8px;

	${({ active }) =>
		!active &&
		css`
			opacity: 0.25;
		`}

	& + & {
		margin-left: 8px;
	}

	&:before {
		width: 64px;
		height: 6px;
		content: '';
		display: block;
		background: ${colors.Main};
		border-radius: 2px;
	}
`;

const ProjectsContainer = styled.div`
	display: flex;
	position: relative;
	flex: 1 1 auto;
	overflow: hidden;
`;
