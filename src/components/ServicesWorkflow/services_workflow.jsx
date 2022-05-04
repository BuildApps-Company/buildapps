import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import { useTranslation } from 'react-i18next';
import { UseAccordionServices } from '../../data';
import { ContentContainer } from '../../styles/container';
import Accordion from './Acordion';
import WorkflowDesktop from './WorkflowDesktop';
import WorkflowMobile from './WorkflowMobile';
import WeHiring from './WeHiring';

import ourTeam from '../../../static/images/ourservices/ourTeam.jpg';
import bg from '../../../static/images/ourservices/bg.jpg';

export const ServicesAndWorkflow = () => {
	const [ActiveTab, setActiveTab] = useState(null);

	const { t } = useTranslation();
	const accordionServices = Object.values(UseAccordionServices());

	return (
		<>
			<ContentContainer>
				<TitleContainer>
					<Title>{t('servicesAndWorkflow.mainTitle')}</Title>
					<AboutPage>{t('servicesAndWorkflow.about')}</AboutPage>
				</TitleContainer>
			</ContentContainer>
			<BannerContainer />
			<ContentContainer>
				<ServicesAndCultureSection>
					<AccordionSection>
						<AcordionContent>
							<InfoSectionTitle>
								{t('servicesAndWorkflow.services')}
							</InfoSectionTitle>
							{accordionServices.map(({ id, title, content }) => (
								<Accordion
									key={id}
									id={id}
									title={title}
									content={content}
									ActiveTab={ActiveTab}
									setActiveTab={setActiveTab}
								/>
							))}
						</AcordionContent>
					</AccordionSection>
					<CultureSection>
						<CultureTextSection>
							<InfoSectionTitle>
								{t('servicesAndWorkflow.culture')}
							</InfoSectionTitle>
							<CultureDescription>
								{t('servicesAndWorkflow.cultureAbout')}
							</CultureDescription>
						</CultureTextSection>
						<OurTeamPhotoContainer>
							<OurTeamPhoto />
						</OurTeamPhotoContainer>
					</CultureSection>
				</ServicesAndCultureSection>
			</ContentContainer>
			<SloganTitle>{t('servicesAndWorkflow.slogan')}</SloganTitle>
			<WorkflowDesktop />
			{/* <WorkflowMobile /> */}
			{/* <WeHiring /> */}
		</>
	);
};

const OurTeamPhoto = styled.div`
	display: block;
	height: 296px;
	width: 100%;
	background-image: url(${ourTeam});
	background-size: cover;
	background-position: center;
`;

const OurTeamPhotoContainer = styled.div`
	display: block;
	width: 100%;
	height: 296px;
	overflow: hidden;
`;

const CultureTextSection = styled.div``;

const AcordionContent = styled.div`
	display: block;
	max-width: 600px;
`;

const AccordionSection = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid ${colors.grey.background};
	margin-bottom: 52px;

	@media all and (min-width: ${breakpoints.phone}) {
		width: 100%;
	}
`;

const CultureSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media all and (min-width: ${breakpoints.phone}) {
		width: 100%;
	}
`;

const CultureDescription = styled.p`
	line-height: 160%;
	font-size: 14px;
	font-weight: 400;
	padding: 0;
	margin: 0 0 32px 0;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 16px;
	}
`;

const SloganTitle = styled.h3`
	max-width: 800px;
	text-align: center;
	color: ${colors.Font};
	font-size: 24px;
	line-height: 160%;
	font-weight: 700;
	padding: 0 40px;
	margin: 0 auto 60px;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 32px;
		margin: 0 auto 240px;
	}
`;

const InfoSectionTitle = styled.h3`
	color: ${colors.Font};
	font-size: 24px;
	font-weight: 700;
	text-transform: uppercase;
	padding: 0;
	margin: 0 0 32px 0;
	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 40px;
	}
`;

const ServicesAndCultureSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	align-items: flex-start;
	gap: 20px;
	margin-bottom: 140px;

	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}
`;

const TitleContainer = styled.div`
	margin-bottom: 40px;

	@media all and (min-width: ${breakpoints.phone}) {
		margin-bottom: 108px;
	}
`;

const Title = styled.h1`
	margin: 16px 0 16px;
	padding: 0;
	font-size: 2rem;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 4rem;
	}
`;

const AboutPage = styled.p`
	max-width: 800px;
	margin: 0;
	padding: 0;
	font-weight: 400;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 1.5rem;
	}
`;

const BannerContainer = styled.div`
	display: block;
	position: relative;
	width: 100%;
	height: 364px;
	margin-bottom: 56px;
	background-image: url(${bg});
	background-size: cover;
	background-position: top right;

	@media all and (min-width: ${breakpoints.tablet}) {
		margin-bottom: 108px;
	}

	&::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: transparent;
		background-image: linear-gradient(to left, #874aad, #e19bb4);
		opacity: 0.8;
	}
`;
