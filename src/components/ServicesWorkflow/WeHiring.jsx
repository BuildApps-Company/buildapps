import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { ContentContainer } from '../../styles/container';
import { StyledLink } from '../../styles/layout';

const WeHiring = () => {
	const { t } = useTranslation();

	return (
		<ContentContainer>
			<WeHiringWrapper>
				<TitleContainer>
					<Title data-aos="fade-right">{t('servicesAndWorkflow.title')}</Title>
					<StyledLink data-aos="fade-up">
						{t('servicesAndWorkflow.more')}
					</StyledLink>
				</TitleContainer>
				<Subtitle>{t('servicesAndWorkflow.subTitle')}</Subtitle>
			</WeHiringWrapper>
		</ContentContainer>
	);
};

export default WeHiring;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const Title = styled.h2`
	margin: 0;
	padding: 0;
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

const Subtitle = styled.p``;

const WeHiringWrapper = styled.div`
	display: none;

	@media all and (min-width: ${breakpoints.notebook}) {
		display: block;
		width: 100%;
		margin: 0 0 240px;
	}
`;
