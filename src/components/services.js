import React from 'react';
import styled from 'styled-components';
import ServiceCard from './service-card';
import SectionHeader from './section-header';
import web_stroke_image from '../../static/images/ic_web_stroke.svg';
import web_fill_image from '../../static/images/ic_web_fill.svg';
import mobile_stroke_image from '../../static/images/ic_mobile_stroke.svg';
import mobile_fill_image from '../../static/images/ic_mobile_fill.svg';
import design_stroke_image from '../../static/images/ic_design_stroke.svg';
import design_fill_image from '../../static/images/ic_design_fill.svg';
import desktop_stroke_image from '../../static/images/ic_desktop_stroke.svg';
import desktop_fill_image from '../../static/images/ic_desktop_fill.svg';
import { Menu } from '../data/menu';
import { SlideContainer } from '../styles/shared';

const CardsContainer = styled(SlideContainer)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

export default () => (
	<div id={Menu.service.key}>
		<SectionHeader
			smallDescription="services"
			largeDescription="UI/UX Design, Web and Mobile development"
		/>
		<CardsContainer>
			<ServiceCard
				text="mobile"
				defaultImage={mobile_stroke_image}
				tintImage={mobile_fill_image}
				description="Flutter, Xamarin Native, Xamarin Forms and frameworks: MVVMCross, FreshMVVM"
			/>
			<ServiceCard
				text="web"
				defaultImage={web_stroke_image}
				tintImage={web_fill_image}
				description="HTML/CSS, JavaScript and frameworks: React, NodeJS, jQuery"
			/>
			<ServiceCard
				text="UX/UI design"
				defaultImage={design_stroke_image}
				tintImage={design_fill_image}
				description="UX, UI, Prototyping, Supporting, Mobile, Web, Desktop"
			/>
			<ServiceCard
				text="desktop"
				defaultImage={desktop_stroke_image}
				tintImage={desktop_fill_image}
				description="WPF, UWP, Xamarin.Forms for Windows"
			/>
		</CardsContainer>
	</div>
);
