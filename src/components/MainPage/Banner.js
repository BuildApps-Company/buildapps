import React from 'react';
import styled from 'styled-components';
import { H1, Body1 } from '../styled-headers';
import { colors } from '../../data/colors';
import { PrimaryButton } from '../buttons';
import { breakpoints } from '../../data/breakpoints';
import { Header } from '../header';
import main_background from '../../../static/images/main_background.png';
import design from '../../../static/images/design.svg';
import arrows from '../../../static/images/arrows.svg';
import logo from '../../../static/images/logo.svg';
import burger from '../../../static/images/burger.svg';
import '../../styles/global.css';

export function MainBanner() {
	return (
		<Banner>
			<Header>
				<Logo src={logo} />
				<Burger src={burger} />
			</Header>
			<Design src={design}></Design>
			<Container>
				<StyledHeader>WEB</StyledHeader>
				<StyledHeader>MOBILE</StyledHeader>
				<StyledHeader>DESKTOP</StyledHeader>
				<StyledBody>DESIGN & DEVELOPMENT</StyledBody>
				<div>
					<StyledButton href="/ContactFormPage/ContactFormPage">
						contact us
					</StyledButton>
					<StyledButton href="/PricesPage/PricesPage">prices</StyledButton>
				</div>
			</Container>
			<Arrows src={arrows}></Arrows>
		</Banner>
	);
}


const Banner = styled.div`
	height: 100vh;
	width: 100%;
    min-height: 450px;
    max-height: 1080px;
    display: flex;
    flex-direction: column;
	position: relative;
	justify-content: flex-start;
	background: linear-gradient(72.44deg, rgba(17, 3, 34, 0.92) 38.02%, rgba(17, 3, 34, 0.6) 100%)
            , url("${main_background}");
	background-size: cover;
	display: block;
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
	:not(:first-child) {
		margin-top: 10vh;
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

	@media all and (max-width: ${breakpoints.phone}) {
		padding-top: 7vh;
	}
`;

const StyledButton = styled(PrimaryButton)`
	margin-top: 20px;
	font-size: 1rem;
	padding: 1rem 1.5rem;
	&:not(:first-child) {
		margin-left: 2%;
	}
	@media all and (max-width: ${breakpoints.phone}) {
		font-size: 0.8rem;
	}
`;

const Logo = styled.img`
    padding-left: 2rem;
	width: 12rem;
	height: 7rem;
    float: left;
	@media all and (max-width: ${breakpoints.phone}) {
		width: 8rem;
        height: 4rem;
        padding-top: 1rem;
	}
`;

const Burger = styled.img`
    padding-top: 1.5rem;
    padding-right: 2.5rem;
	width: 5rem;
	heigth: 5rem;
	float: right;
	@media all and (max-width: ${breakpoints.phone}) {
		width: 3.5rem;
        heigth: 3.5rem;
        padding-top: 1.5rem;
        padding-right: 1.5rem;
	}
`;