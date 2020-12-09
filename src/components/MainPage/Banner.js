import React from 'react';
import styled from 'styled-components';
import {Header1, Body1} from '../styled-headers';
import {colors} from '../../data/colors';
import {Button1} from '../buttons';
import logo from '../../../static/images/logo.svg';
import main_background from '../../../static/images/main_background.png';
import burger from '../../../static/images/burger.svg';
import design from '../../../static/images/design.svg';
import arrows from '../../../static/images/arrows.svg';
import '../../styles/global.css';

const Banner = styled.div`
    height: 100vh;
    width: 100vw;
    min-height: 450px;
    max-height: 1080px;
    display: flex;
    flex-direction: column;
	position: relative;
    justify-content: flex-start;
    &:before {
        background: linear-gradient(72.44deg, rgba(17, 3, 34, 0.92) 38.02%, rgba(17, 3, 34, 0.6) 100%)
            , url("${main_background}");
		background-size: cover;
		background-position-y: 100%;
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
		z-index: -1;
		left: 0;
		top: 0;
	}
    
`;

const Logo = styled.img`
    position: absolute;
    width: 14vw;
    height: 10vh;
    float: left;
    left: 0.5%;
    top: 0.5%;
    @media all and (max-width: 450px)
    {
        left: 2%;
        top: 2%;
        width: 64px;
        height: 32px;
    }
`;

const Burger = styled.img`
    position: absolute;
    width: 2.5vw;
    heigth: 2.5vh;
    float: right;
    top: 2.5%;
    right: 2.5%;
    @media all and (max-width: 450px)
    {
        top: 0.5%;
        right: 2%;
        width: 32px;
        height: 32px;
    }
`;

const Design = styled.img`
    position: absolute;
    top: 40%;
    right: 20%;
    width:20%;
    height:10%;
    @media all and (max-width: 450px)
    {
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
    @media all and (max-width: 450px)
    {
        width: 5vw;
        height: 5vh;
    }
`;

const StyledHeader = styled(Header1)`
    &:after{
        content: "";
        background: ${colors.Main};
        height: 0.5vh;
        width: 4%;
        display:block;
    }
    color: ${colors.White};
    font-size: 3.5vw;
    @media all and (max-width: 450px)
    {
        font-size: 40px;
        &:after{
            width: 40px;
        }
    }
`;

const StyledBody = styled(Body1)`
    color: ${colors.White};
    font-size: 1.3vw;
    @media all and (max-width: 450px)
    {
        font-size: 12px;
    }
`;

const Container = styled.div`
    margin-top: 15vh;
    margin-left: 12%;
`;

const StyledButton = styled(Button1)`
    margin-top: 20px;
    font-size: 1vw;
    padding: 1vw 1.5vw;
    @media all and (max-width: 450px)
    {
        font-size: 12px;
        font-weight: bold;
        padding: 10px 15px;
    }
`;

const MarginLeft = {
    marginLeft: '2%'
}

const MarginTop = {
    marginTop: '10vh'
}

export default function MainBanner() {
	return (
		<Banner>
			<Logo src={logo} />
            <Burger src={burger}></Burger>
            <Design src={design}></Design>
			<Container>
				<StyledHeader>WEB</StyledHeader>
				<StyledHeader style={MarginTop}>MOBILE</StyledHeader>
				<StyledHeader style={MarginTop}>DESKTOP</StyledHeader>
				<StyledBody>DESIGN & DEVELOPMENT</StyledBody>
				<StyledButton href="/ContactFormPage/ContactFormPage">
					contact us
				</StyledButton>
				<StyledButton href="/PricesPage/PricesPage" style={MarginLeft}>
					prices
				</StyledButton>
			</Container>
            <Arrows src={arrows}></Arrows>
		</Banner>
	);
}