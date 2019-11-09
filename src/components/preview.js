import React from 'react';
import styled from 'styled-components';
import banner_background from '../../static/images/banner_background.svg';
import { theme } from '../styles/theme';
import ContactUs from './contact-us';
import scroll_image from '../../static/images/ic_scroll.svg';
import { Menu } from '../data/menu';
import { smoothScrollTo } from '../utils/url';

const Banner = styled.div`
	max-height: 700px;
	min-height: 330px;
	height: ${window.innerHeight - theme.headerHeight}px;
    justify-content: center;
    align-items: center;
    bacground-color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 128px;
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
	}
`;

const Title = styled.div`
	color: ${theme.colors.white};
	font-size: 3rem;
	margin-bottom: 2%;
	text-align: center;
`;

const SubTitle = styled.div`
	color: ${theme.colors.white};
	text-align: center;
	font-size: 1.6rem;
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
`;

export default () => (
	<Banner id={Menu.About.key}>
		<Title>BuildApps</Title>
		<SubTitle>
			A close-knit team with extensive experience <br /> and understanding of
			what is necessary for you
		</SubTitle>
		<ContactUsButtonContainer>
			<ContactUs isOutline={true} />
		</ContactUsButtonContainer>
		<ViewProjectsLink
			onClick={e => smoothScrollTo(e, Menu.Portfolio.key)}
			href={`#${Menu.Portfolio.key}`}
		>
			view projects
		</ViewProjectsLink>
		<ScrollImage src={scroll_image} />
	</Banner>
);
