import React from 'react';
import styled from 'styled-components';
import { H1, Body1, UnderlinedH } from '../../styles/styled-headers';
import { colors } from '../../styles/colors';
import { PrimaryButton } from '../../styles/buttons';
import { breakpoints } from '../../styles/breakpoints';
import { Toolbar } from '../shared/Toolbar';
import main_background from '../../../static/images/main_background.png';
import design from '../../../static/images/design.svg';
import arrows from '../../../static/images/arrows.svg';
import '../../styles/global.css';
import { HeroBlock } from '../../styles/layout';

export function MainBanner() {
	return (
		<HeroHeader>
			<Toolbar />
			<Container>
				<LeftSection>
					<Gap />
					<StyledH1>WEB</StyledH1>
					<StyledH1>MOBILE</StyledH1>
					<StyledH1>DESKTOP</StyledH1>
					<StyledBody>DESIGN & DEVELOPMENT</StyledBody>
					<div>
						<StyledButton href="/ContactFormPage/ContactFormPage">
							contact us
						</StyledButton>
						<StyledButton href="/PricesPage/PricesPage">prices</StyledButton>
					</div>
				</LeftSection>
				<RightSection>
					<Design src={design}></Design>
				</RightSection>
			</Container>
			<ArrowContainer>
				<Arrows src={arrows}></Arrows>
			</ArrowContainer>
		</HeroHeader>
	);
}

const HeroHeader = styled(HeroBlock)`
	justify-content: flex-start;
	background: linear-gradient(72.44deg, rgba(17, 3, 34, 0.92) 38.02%, rgba(17, 3, 34, 0.6) 100%)
            , url("${main_background}");
	background-size: cover;
`;

const Container = styled.div`
	padding: 0 11%;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: center;

	@media all and (max-width: ${breakpoints.phone}) {
		padding-top: 7vh;
	}
`;

const ArrowContainer = styled.div`
	text-align: center;
	flex: 0 0 auto;
	padding: 0 0 2vh 0;
`;

const Design = styled.img`
	top: 40vh;
	right: 20%;
	width: 20vw;
	height: 10vh;
	@media all and (max-width: ${breakpoints.phone}) {
		display: none;
	}
`;

const Arrows = styled.img``;

const Gap = styled.div`
	flex: 3 1 0;
`;

const StyledH1 = styled(UnderlinedH(H1))`
	margin: 0;
	flex: 2 1 0;

	color: ${colors.light.white};
	font-size: 3.5rem;
	@media all and (max-width: ${breakpoints.phone}) {
		font-size: 3rem;
	}
`;

const StyledBody = styled(Body1)`
	color: ${colors.light.white};
	font-size: 1.3rem;
	@media all and (max-width: ${breakpoints.phone}) {
		font-size: 1rem;
	}
`;

const Section = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
`;

const LeftSection = styled(Section)`
	padding: 40px 0;
	height: 100%;
	justify-content: space-around;
`;

const RightSection = styled(Section)`
	align-items: center;
`;

const StyledButton = styled(PrimaryButton)`
	margin-top: 20px;
	font-size: 1.5rem;
	padding: 1rem 1.5rem;
	&:not(:first-child) {
		margin-left: 2%;
	}
	@media all and (max-width: ${breakpoints.phone}) {
		font-size: 0.8rem;
	}
`;
