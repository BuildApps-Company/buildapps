import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { routes } from '../../utilities/routes';
import { PrimaryButton } from '../../styles/buttons';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { H4, SubH3, Body2 } from '../../styles/styled-headers';

export const LatestProjectDesktop = ({ projectsDesktop }) => {
	const [item, setItem] = useState(0);
	const containerRef = useRef();

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
			style={{ 'min-height': `${projectsDesktop.length * 100}vh` }}
		>
			<LatestProjectsContainer>
				<Container>
					<TitleWrap>
						<TitlePage>Latest Projects</TitlePage>
						<StyledLink to={routes.portfolio}>All</StyledLink>
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
								<ImageWrapDesktop>
									<img src={activeProject.longImage} />
								</ImageWrapDesktop>
								<DetailsWrap>
									<SmallLogo src={activeProject.image} />
									<Title>{activeProject.title}</Title>
									<TagContainer>
										{activeProject.responsibility.map(res => (
											<Tag key={res}>{res}</Tag>
										))}
									</TagContainer>
									<Description>{activeProject.description}</Description>
									<ContactUs>Details</ContactUs>
								</DetailsWrap>
							</ProjectWrap>
						</ProjectContainer>
					))}
				</ProjectsContainer>
			</LatestProjectsContainer>
		</ContainerParent>
	);
};

const ContainerParent = styled.div`
	margin-top: 46px;
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
		padding: 40px 80px 0;
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
				: 'opacity: 0; position: absolute; top: 0; left: 0; height: 100%; overflow: hidden;'};
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

const StyledLink = styled(Link)`
	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
		font-size: 1.5rem;
		line-height: 160%;
		text-transform: uppercase;
		text-decoration: none;
		color: ${colors.Main};
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
		width: 50%;
		flex-shrink: 0;
		flex-grow: 0;
		height: 100%;
		padding: 10px 20px;
		background: linear-gradient(88deg, #d0eeff 3.37%, #e3fffd 96.63%);
		img {
			max-width: 100%;
			object-fit: contain;
			max-height: 100%;
		}
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
		padding: 30px;
	}
`;

const SmallLogo = styled.img`
	max-height: 80px;
`;

const Tag = styled(SubH3)`
	display: inline-block;
	color: #969696;
	text-transform: uppercase;

	& + & {
		margin-left: 12px;
	}
`;

const Title = styled(H4)`
	margin-top: 32px;
`;

const TagContainer = styled.div`
	margin-top: 12px;
`;

const Description = styled(Body2)`
	margin-top: 16px;
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
	}
`;

const ContactUs = styled(PrimaryButton)`
	font-size: 1rem;
	margin-top: 32px;
`;

const ProjectsContainer = styled.div`
	display: flex;
	position: relative;
	flex: 1 1 auto;
	overflow: hidden;
`;
