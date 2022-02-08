import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { ServiceCard } from '../shared/ServiceCard';
import Slider from 'react-slick';
import { StyledLink } from '../../styles/layout';

const settings = {
	arrows: false,
	className: 'slider variable-width',
	dots: false,
	infinite: true,
	variableWidth: true,
	slidesToShow: 1,
	slidesToScroll: 1,
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
					{/* <StyledLink
							data-aos="fade-up"
							to={`#`}
						>
							{t('ourservices.more')}
						</StyledLink> */}
				</TitleWrap>
			</TopContainer>
			<BlockSlider>
				<Slider {...settings}>
					{services.map(service => {
						return <ServiceCard key={service.id} service={service} />;
					})}
				</Slider>
			</BlockSlider>
		</OurServicesContainer>
	);
};

const OurServicesContainer = styled.article`
    display: flex;
    flex-direction: column;
    height: 340px;

  @media all and (min-width: ${breakpoints.tablet}) {
    height: 500px;
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
	line-height: 160%;
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
		text-transform: uppercase;
	}
`;

const BlockSlider = styled.div`
	display: block;
	width: 100%;
`;
