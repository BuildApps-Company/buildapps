import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Toolbar } from '../shared/Toolbar';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import headerBackground from '../../../static/images/headerBackground.jpeg';
import video from '../../../static/images/videosHeader.mp4';
import '../../styles/typewriter.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby-plugin-react-i18next';

export function MainBanner() {
	const [width, setWidth] = useState(0);
  const { t } = useTranslation();

	useLayoutEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', setWidth(window.innerWidth));
	}, []);

	return (
		<HeroWrap>
			<VideoHeader playsInline autoPlay loop muted poster={headerBackground}>
				<source src={video} alt="video" type="video/mp4" />
			</VideoHeader>
			<Toolbar isWhite />
			<StyledPageContainer>
				<TitlesWrap>
        <div>
          <Title>{t('banner.web')}</Title>
          <Title>{t('banner.mobile')}</Title>
          <Title>{t('banner.desktop')}</Title>
          <SubTitle>
            {t('banner.designAndDevelopmentCompany')}
          </SubTitle>
        </div>

					{width > 450 && (
						<Typewriter
							style
							options={{
								strings: [
									t('banner.design'),
									t('banner.develop'),
									t('banner.launch'),
									t('banner.maintain'),
								],
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
						{t('banner.contactUs')}
					</StyledButton>

					<StyledButton to={routes.prices}>
						<svg>
							<rect x="0" y="0" fill="none" width="100%" height="100%" />
						</svg>
						{t('banner.prices')}
					</StyledButton>
				</ButtonsWrap>

				<SvgArrows
					width="50"
					height="58"
					viewBox="0 0 50 58"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<ArrowOne
						d="M1 40.1113L25 57.0002L49 40.1113"
						stroke="white"
						stroke-width="2"
						stroke-linejoin="round"
					/>
					<ArrowSecond
						opacity="0.5"
						d="M1 20.5557L25 37.4446L49 20.5557"
						stroke="white"
						stroke-width="2"
						stroke-linejoin="round"
					/>
					<ArrowThird
						opacity="0.25"
						d="M1 1L25 17.8889L49 1"
						stroke="white"
						stroke-width="2"
						stroke-linejoin="round"
					/>
				</SvgArrows>
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
		padding-left: 11%;
		padding-right: 11%;
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
	display: flex;
	align-items: center;
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
		border-radius: 4px;
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

const ArrowOne = styled.path``;
const ArrowSecond = styled.path``;
const ArrowThird = styled.path``;

const SvgArrows = styled.svg`
	width: 27px;
	height: 32px;
	position: absolute;
	left: 50%;
	margin-left: -30px;
	bottom: 20px;

	path {
		stroke: ${colors.light.white};
		fill: transparent;
		stroke-width: 2px;
		animation: arrow 2.5s infinite;
	}

	@keyframes arrow {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	${ArrowOne} {
		animation-delay: 0s;
		stroke-width: 2px;
	}

	${ArrowSecond} {
		animation-delay: -0.5s;
		stroke-width: 1px;
	}

	${ArrowThird} {
		animation-delay: -1s;
		stroke-width: 0.5px;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		width: 48px;
		height: 56px;
	}
`;
