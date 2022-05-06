import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { routes } from '../../utilities/routes';
import { useTranslation } from 'react-i18next';
import { ServiceCard } from '../shared/ServiceCard';
import Slider from 'react-slick';
import { Link } from 'gatsby-plugin-react-i18next';
import { StyledLink } from '../../styles/layout';

const settings = {
	arrows: false,
	className: 'slider variable-width',
	dots: false,
	infinite: true,
	variableWidth: true,
	swipeToSlide: true,
	slidesToShow: 1,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 2000,
	cssEase: 'ease-out',
};

export const OurServices = ({ services }) => {
	const { t } = useTranslation();

	return (
		<OurServicesContainer>
			<TopContainer>
				<TitleWrap>
					<Title data-aos="fade-right">{t('ourservices.mainTitle')}</Title>
					<StyledLink data-aos="fade-up" to={routes.services_workflow}>
						{t('ourservices.more')}
					</StyledLink>
				</TitleWrap>
			</TopContainer>
			<BlockSlider>
				<Slider {...settings}>
					{services.map(service => {
						return (
							<Service key={service.id}>
								<ServiceCard service={service} />
							</Service>
						);
					})}
				</Slider>
			</BlockSlider>
		</OurServicesContainer>
	);
};

export const Service = styled.div`
	display: none;
	text-decoration: none;
  cursor: pointer;

	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
	}
`;

const OurServicesContainer = styled.article`
	display: flex;
	flex-direction: column;
	height: 400px;

	@media all and (min-width: ${breakpoints.tablet}) {
		height: 670px;
	}
`;

const TopContainer = styled.div`
	@media all and (min-width: ${breakpoints.tablet}) {
		margin: 0;
		padding: 0 40px 0 30px;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		padding: 40px 11% 0;
	}
`;

const TitleWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
`;

const Title = styled.h2`
	margin: 0 0 38px;
	padding: 16px;
	font-size: 3rem;
	line-height: 100%;
	text-transform: uppercase;
	&:after {
		content: '';
		background: ${colors.Main};
		height: 6px;
		width: 64px;
		display: block;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 4rem;
		margin: 0 0 66px;
		padding: 0;
		font-size: 3rem;
		line-height: 160%;
	}
`;

const BlockSlider = styled.div`
	display: block;
	width: 100%;
`;
