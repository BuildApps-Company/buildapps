import React from 'react';
import styled from 'styled-components';
import banner_background from '../../static/images/banner_background.svg';
import { theme } from '../styles/theme';
import ContactUs from './contact-us';
import SectionHeader from './section-header';
import scroll_image from '../../static/images/ic_scroll.svg';
import { Menu } from '../data/menu';

const Banner = styled.div`
    height: 710px;
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
	position: absolute;
	top: 90%;
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	width: 20px;
	height: 20px;
	animation-name: scrollAnimation;
	animation-duration: 0.7s;
	animation-delay: 1s;
	animation-iteration-count: 5;
	animation-timing-function: linear;
`;

const ViewProjectsLink = styled.a`
	color: ${theme.colors.lightGray};
`;

export default () => (
	<Banner id={menuTabs.About.key}>
		<Title>BuildApps</Title>
		<SubTitle>
			A close-knit team with extensive experience <br /> and understanding of
			what is necessary for you
		</SubTitle>
		<ContactUsButtonContainer>
			<ContactUs isOutline={true} />
		</ContactUsButtonContainer>
		<ViewProjectsLink>view projects</ViewProjectsLink>
		<ScrollImage src={scroll_image} />
	</Banner>
);
