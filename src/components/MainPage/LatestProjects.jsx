import React, { useState, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { routes } from '../../utilities/routes';
import { PrimaryButton } from '../../styles/buttons';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { H4, SubH3, Body2 } from '../../styles/styled-headers';

export const LatestProjects = ({ projects }) => {
	const [width, setWidth] = useState(0);
	const [index, setIndex] = useState(0);
	const activeProject = projects[index];

	useLayoutEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', setWidth(window.innerWidth));
	}, []);

	return (
		<>
			<Container>
				<TitleWrap>
					<TitlePage>Latest Projects</TitlePage>
					{width > 450 && <StyledLink to={routes.portfolio}>All</StyledLink>}
				</TitleWrap>

				<Pagination>
					{projects.map((_, i) => (
						<Tab key={i} onClick={() => setIndex(i)} active={index === i}></Tab>
					))}
				</Pagination>
			</Container>

			<ProjectContainer>
				<ProjectWrap>
					<ImageWrap>
						{width <= 450 && <h3>{activeProject.title}</h3>}
						<img src={activeProject.longImage} />
					</ImageWrap>

					{width > 450 && (
						<DetailsWrap>
							<SmallLogo src={activeProject.image} />

							<Title>{activeProject.title}</Title>

							<TagContainer>
								{activeProject.responsibility.map(res => (
									<Tag key={res}>{res}</Tag>
								))}
							</TagContainer>

							<Description>{activeProject.description}</Description>

							<ContactUs>Contact us</ContactUs>
						</DetailsWrap>
					)}
				</ProjectWrap>
			</ProjectContainer>
		</>
	);
};

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 215px;
		padding-right: 215px;
	}
`;

const ProjectContainer = styled(Container)`
	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 0;
	}
`;

const TitleWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const TitlePage = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 4rem;
	}
`;

const StyledLink = styled(Link)`
	font-size: 1.5rem;
	line-height: 160%;
	text-transform: uppercase;
	text-decoration: none;
	color: #874aad;
`;

const Pagination = styled.div`
	display: flex;
	margin-bottom: 32px;
`;

const ProjectWrap = styled.div`
	display: flex;
	align-items: center;
`;

const ImageWrap = styled.div`
	width: 100%;
	min-height: 200px;
	padding: 33px 36px 33px 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: linear-gradient(88deg, #d0eeff 3.37%, #e3fffd 96.63%);

	@media all and (min-width: ${breakpoints.phone}) {
		margin-right: 167px;
		padding: 150px;
	}

	h3 {
		font-size: 1.25rem;
		line-height: 160%;
	}

	img {
		max-width: 150px;
		max-height: 130px;

		@media all and (min-width: ${breakpoints.phone}) {
			max-width: 500px;
			max-height: 450px;
		}
	}
`;

const DetailsWrap = styled.div`
	width: 50%;
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
	margin-top: 44px;
`;
