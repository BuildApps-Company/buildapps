import React from 'react';
import styled from 'styled-components';
import { H1, Body1 } from '../styled-headers';
import { colors } from '../../data/colors';
import { PrimaryButton } from '../buttons';
import { breakpoints } from '../../data/breakpoints';
import main_background from '../../../static/images/main_background.png';
import design from '../../../static/images/design.svg';
import arrows from '../../../static/images/arrows.svg';
import '../../styles/global.css';
import { Layout } from '../layout';

export default function MainBanner() {
	return (
		<Layout>
			<Banner>
				<Design src={design}></Design>
				<Container>
					<StyledHeader>WEB</StyledHeader>
					<MarginTopHeader>MOBILE</MarginTopHeader>
					<MarginTopHeader>DESKTOP</MarginTopHeader>
					<StyledBody>DESIGN & DEVELOPMENT</StyledBody>
					<StyledButton href="/ContactFormPage/ContactFormPage">
						contact us
					</StyledButton>
					<MarginLeftButton href="/PricesPage/PricesPage">
						prices
					</MarginLeftButton>
				</Container>
				<Arrows src={arrows}></Arrows>
			</Banner>
		</Layout>
	);
}

const Banner = styled.div`
    height: 100vh;
    width: 100vw;
    min-height: 450px;
    max-height: 1080px;
    display: flex;
    flex-direction: column;
	position: relative;
	justify-content: flex-start;
	background: linear-gradient(72.44deg, rgba(17, 3, 34, 0.92) 38.02%, rgba(17, 3, 34, 0.6) 100%)
            , url("${main_background}");
	background-size: cover;
	background-position-y: 100%;
	display: block;
	z-index: -10;
`;

const Design = styled.img`
	position: absolute;
	top: 40vh;
	right: 20%;
	width: 20vw;
	height: 10vh;
	@media all and (max-width: ${breakpoints.phone}) {
		display: none;
	}
`;

const Arrows = styled.img`
	position: absolute;
	width: 5%;
	height: 5%;
	top: 95vh;
	left: 45vw;
	display: block;
	@media all and (max-width: ${breakpoints.phone}) {
		width: 5vw;
		height: 5vh;
	}
`;

const StyledHeader = styled(H1)`
	&:after {
		content: '';
		background: ${colors.Main};
		height: 0.5vh;
		width: 3.5rem;
		display: block;
	}
	color: ${colors.White};
	font-size: 3.5rem;
	@media all and (max-width: ${breakpoints.phone}) {
		font-size: 3rem;
	}
`;

const StyledBody = styled(Body1)`
	color: ${colors.White};
	font-size: 1.3rem;
	@media all and (max-width: ${breakpoints.phone}) {
		font-size: 1rem;
	}
`;

const Container = styled.div`
	padding-top: 15vh;
	padding-left: 12%;
`;

const StyledButton = styled(PrimaryButton)`
	margin-top: 20px;
	font-size: 1rem;
	padding: 1rem 1.5rem;
	@media all and (max-width: ${breakpoints.phone}) {
		font-size: 0.8rem;
	}
	
`;

const MarginLeftButton = styled(StyledButton)`
	margin-left: 2%
`;

const MarginTopHeader = styled(StyledHeader)`
	margin-top: 10vh
`;