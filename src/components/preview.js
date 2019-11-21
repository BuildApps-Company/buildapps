import React from 'react';
import styled from 'styled-components';
import banner_background from '../../static/images/banner_background.jpg';
import { theme } from '../styles/theme';
import ContactUs from './contact-us';
import scroll_image from '../../static/images/ic_scroll.svg';
import { Menu } from '../data/menu';
import { smoothScrollTo } from '../utils/url';

const Banner = styled.div`
	max-height: 900px;
	min-height: 330px;
	height: calc(100vh - ${theme.headerHeight}px);
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: ${theme.slideBottomMarginRem}rem;
	position: relative;
	
    &:before {
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 5%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 95%, rgba(0,0,0,1) 100%)
            , url("${banner_background}"), #000000; 
		background-size: cover;
		background-position-y: 100%;
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
		z-index: -1;
		left: 0;
		top: 0;
	}
`;

const Title = styled.h1`
	color: ${theme.colors.white};
	font-size: 3rem;
	margin: 0 0 2%;
	padding: 0;
	text-align: center;
	font-weight: 400;
`;

const SubTitle = styled.h2`
	color: ${theme.colors.white};
	text-align: center;
	font-size: 1.6rem;
	font-weight: 400;
	padding: 0;
	margin: 0;
`;

const ContactUsButtonContainer = styled.div`
	margin-top: 32px;
	margin-bottom: 16px;
`;

const ScrollImage = styled.img`
	top: 90%;
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	width: 20px;
	height: 20px;
	animation-name: scrollAnimation;
	animation-duration: 1s;
	animation-delay: 1s;
	animation-iteration-count: 2;
	animation-timing-function: linear;
`;

const ViewProjectsLink = styled.a`
	color: ${theme.colors.whiteSmoke};
	opacity: 0.8;

	&:active,
	&:hover,
	&:focus {
		color: ${theme.colors.whiteSmoke};
		opacity: 1;
	}
`;

export default () => {
	return (
		<Banner id={Menu.about.key}>
			<Title>BuildApps</Title>
			<SubTitle>
			Strong and skilled team with experience of developing large projects, <br/> from estimating to publishing applications
			</SubTitle>
			<ContactUsButtonContainer>
				<ContactUs isOutline={true} />
			</ContactUsButtonContainer>
			<ViewProjectsLink
				onClick={e => smoothScrollTo(e, Menu.portfolio.key)}
				href={`#${Menu.portfolio.key}`}
			>
				view projects
			</ViewProjectsLink>
			<ScrollImage src={scroll_image} alt="scroll down"/>
		</Banner>
	);
};
