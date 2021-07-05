import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { routes } from '../../utilities/routes';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';

export const LatestProjectMobile = ({ projectsMobile }) => {
	return (
		<LatestProjectsContainer>
			<TitleWrap>
				<TitlePage>Latest Projects</TitlePage>
			</TitleWrap>

			<ProjectWrap>
				{projectsMobile.map(project => (
					<ImageWrap
						key={project.title}
						to={`${routes.portfolio}/${project.id}`}
					>
						<h3>{project.title}</h3>
						<img src={project.longImage} />
					</ImageWrap>
				))}
			</ProjectWrap>
			<BtnConteiner>
				<Button to={routes.portfolio}>More projects</Button>
			</BtnConteiner>
		</LatestProjectsContainer>
	);
};

const BtnConteiner = styled.div`
	text-align: center;
	margin-top: 44px;
`;
const Button = styled(Link)`
	text-transform: uppercase;
	color: ${colors.Main};
	border: 2px solid ${colors.Main};
	background: transparent;
	cursor: pointer;
	padding: 10px 27px;
	text-decoration: none;
	margin-top: 14px;
`;

const LatestProjectsContainer = styled.div`
	margin-bottom: 64px;
	@media all and (min-width: ${breakpoints.tablet}) {
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
`;

const TitleWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: 16px;
	margin-bottom: 28px;
`;

const TitlePage = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;
	text-transform: uppercase;
	&:after {
		content: '';
		background: ${colors.Main};
		height: 6px;
		width: 64px;
		display: block;
	}
`;

const ProjectWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	flex-grow: 1;
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;
`;

const ImageWrap = styled(Link)`
	width: 100%;
	min-height: 200px;
	padding: 33px 36px 33px 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-decoration: none;
	background: linear-gradient(88deg, #d0eeff 3.37%, #e3fffd 96.63%);
	&:not(:last-child) {
		margin-bottom: 16px;
	}

	h3 {
		font-size: 1.25rem;
		line-height: 160%;
	}

	img {
		max-width: 150px;
		max-height: 130px;
	}
	@media all and (min-width: ${breakpoints.tablet}) {
		display: none;
	}
`;
