import React from 'react';
import styled from 'styled-components';
import ServiceCard from './service-card';
import SectionHeader from './section-header';
import web_stroke_image from '../../static/images/ic_web_stroke.svg';
import mobile_stroke_image from '../../static/images/ic_mobile_stroke.svg';
import design_stroke_image from '../../static/images/ic_design_stroke.svg';
import web_fill_image from '../../static/images/ic_web_fill.svg';
import mobile_fill_image from '../../static/images/ic_mobile_fill.svg';
import design_fill_image from '../../static/images/ic_design_fill.svg';
import { menuTabs } from '../data/menu';

const CardsContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;
	margin: 0 auto 0 auto;
	margin-bottom: 128px;
`;

export default () => (
	<div id={menuTabs.Service.key}>
		<SectionHeader
			smallDescription="services"
			largeDescription="UI/UX Design, Web and mobile development"
		/>
		<CardsContainer>
			<ServiceCard
				text="mobile development"
				defaultImage={mobile_stroke_image}
				tintImage={mobile_fill_image}
				description="Flutter, Xamarin Native, MVVMCross"
			/>
			<ServiceCard
				text="web development"
				defaultImage={web_stroke_image}
				tintImage={web_fill_image}
				description="HTML/CSS, JavaScript + frameworks, React, NodeJS, jQuery"
			/>
			<ServiceCard
				text="UX/UI design"
				defaultImage={design_stroke_image}
				tintImage={design_fill_image}
				description="UX, UI, Prototyping, Supporting, Mobile, Web, Desktop"
			/>
			<ServiceCard
				text="desktop development"
				defaultImage={web_stroke_image}
				tintImage={web_fill_image}
				description="WPF, UWP, Xamarin.Forms for Windows"
			/>
		</CardsContainer>
	</div>
);
