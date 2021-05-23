import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Typewriter from 'typewriter-effect';
import { Toolbar } from '../shared/Toolbar';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import headerBackground from '../../../static/images/headerBackground.jpeg';
import arrows from '../../../static/images/arrows.svg';
import video from '../../../static/images/videosHeader.mp4';
import '../../styles/typewriter.css';

export function MainBanner() {
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', setWidth(window.innerWidth));
	}, []);

	return (
		<HeroWrap>
			<VideoHeader playsInline autoPlay loop muted poster={headerBackground}>
				<source src={video} type="video/mp4" />
			</VideoHeader>
			<Toolbar isWhite />

			<StyledPageContainer>
				<TitlesWrap>
					<div>
						<Title>Web</Title>
						<Title>Mobile</Title>
						<Title>Desktop</Title>
						<SubTitle>Design & Development</SubTitle>
					</div>

					{width > 450 && (
						<Typewriter
							style
							options={{
								strings: ['Design', 'Develop', 'Launch', 'Maintain'],
								autoStart: true,
								loop: true,
							}}
						/>
					)}
				</TitlesWrap>

				<ButtonsWrap>
					<StyledButton to={routes.contactForm}>
						<svg>
							<rect x="0" y="0" fill="none" width="100%" height="100%" />
						</svg>
						Сontact us
					</StyledButton>

					<StyledButton to={routes.prices}>
						<svg>
							<rect x="0" y="0" fill="none" width="100%" height="100%" />
						</svg>
						Prices
					</StyledButton>
				</ButtonsWrap>
				<Arrows src={arrows}></Arrows>
			</StyledPageContainer>
		</HeroWrap>
	);
}

const HeroWrap = styled.div`
	position: relative;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: linear-gradient(
		72.44deg,
		rgba(17, 3, 34, 0.92) 38.02%,
		rgba(17, 3, 34, 0.6) 100%
	);
	background-size: cover;
`;
const VideoHeader = styled.video`
	position: absolute;
	z-index: -99;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const StyledPageContainer = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	padding-left: 16px;
	padding-right: 16px;
	padding-bottom: 34px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 215px;
		padding-right: 215px;
	}
`;

const TitlesWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 56px;
`;

const Title = styled.h1`
	margin: 0 0 45px 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;
	text-transform: uppercase;
	color: #ffffff;

	&:after {
		content: '';
		background: #874aad;
		height: 6px;
		width: 64px;
		display: block;
	}

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 4rem;
	}
`;

const SubTitle = styled.h2`
	margin: 0;
	padding: 0;
	line-height: 160%;
	text-transform: uppercase;
	color: #ffffff;
	font-size: 1rem;

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 1.5rem;
	}
`;

const ButtonsWrap = styled.div`
	display: flex;
	margin-bottom: 64px;
`;

const StyledButton = styled(Link)`
	position: relative;
	display: inline-block;
	padding: 16px 26px;
	text-transform: uppercase;
	text-decoration: none;
	color: #874aad;

	&:not(:last-child) {
		margin-right: 16px;
	}

	svg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	rect {
		fill: none;
		stroke: #874aad;
		stroke-width: 3;
		stroke-dasharray: 422, 0;
		transition: all 0.35s linear;
	}

	&:hover rect {
		stroke-width: 6;
		stroke-dasharray: 15, 310;
		stroke-dashoffset: 48;
		transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
	}

	&:first-of-type:hover rect {
		stroke-dasharray: 15, 415;
	}

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 1.5rem;
	}
`;

const Arrows = styled.img`
	display: block;
	margin: 0 auto;
	width: 27px;
	height: 32px;

	@media all and (min-width: ${breakpoints.phone}) {
		width: 48px;
		height: 56px;
	}
`;
