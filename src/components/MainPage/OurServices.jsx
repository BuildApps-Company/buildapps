import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { ServiceCard } from '../shared/ServiceCard';
import Slider from 'react-slick';

export const OurServices = ({ services }) => {
	const { t } = useTranslation();
	const settings = {
    className: "slider variable-width",
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

	return (
			<OurServicesContainer>
				<TopContainer>
					<TitleWrap>
            <Title
              data-aos="fade-right"
            >
              {t('ourservices.mainTitle')}
            </Title>
					</TitleWrap>
					<Pagination>
							<Tab active = { true }></Tab>
					</Pagination>
				</TopContainer>
        <BlockSlider>
          <Slider {...settings}>
            {services.map( (service) => {
              return (
                <ServiceCard
                  key = {service.id}
                  service = { service } />
              )
            })}
					</Slider>
        </BlockSlider>
			</OurServicesContainer>
	);
};

const OurServicesContainer = styled.article`
    display: flex;
    flex-direction: column;
		height: 70vh;
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
	margin: 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;
	text-transform: uppercase;
	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 4rem;
	}
`;

const Pagination = styled.div`
	@media all and (min-width: ${breakpoints.tablet}) {
		display: flex;
		margin-bottom: 32px;
	}
`;

const Tab = styled.div`
	padding: 8px;

	&:before {
		width: 64px;
		height: 6px;
		content: '';
		display: block;
		background: ${colors.Main};
		border-radius: 2px;
	}
`;

const BlockSlider = styled.div`
  display: block;
	width: 100%;
`;