import React from 'react';
import styled from 'styled-components';
import { routes } from '../../utilities/routes';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby-plugin-react-i18next';

export const LatestProjectMobile = ({ projectsMobile }) => {
	const { t } = useTranslation();

	return (
		<LatestProjectsContainer>
			<TitleWrap>
				<TitlePage>{t('latestProjects.latestProjects')}</TitlePage>
			</TitleWrap>

			<ProjectWrap>
				{projectsMobile.map(
					({ id, longImage, title: ProjectTitle, background }) => (
						<ImageWrap
							key={id}
							to={`${routes.portfolio}${id}/`}
							background={background}
						>
							<h3>
								<ProjectTitle></ProjectTitle>
							</h3>
							<img src={longImage} alt="longimg" />
						</ImageWrap>
					)
				)}
			</ProjectWrap>
			<BtnConteiner>
				<StyledButton to={routes.portfolio}>
					<svg>
						<rect x="0" y="0" fill="none" width="100%" height="100%" />
					</svg>
					{t('latestProjects.mobileMoreButton')}
				</StyledButton>
			</BtnConteiner>
		</LatestProjectsContainer>
	);
};

const BtnConteiner = styled.div`
	/* text-align: center; */
	margin-top: 44px;
	display: flex;
	justify-content: center;
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
	background: ${props =>
		props.background
			? props.background
			: 'linear-gradient(88deg, #D0EEFF 3.37%, #E3FFFD 96.63%);'};
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

const StyledButton = styled(Link)`
	width: 196px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1em;
	position: relative;
	text-transform: uppercase;
	text-decoration: none;
	color: ${colors.Main};
	cursor: pointer;
	background: transparent;

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
		stroke-dasharray: 15, 179;
		stroke-dashoffset: 48;
		transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
	}

	&:first-of-type:hover rect {
		stroke-dasharray: 15, 220;
	}
`;
