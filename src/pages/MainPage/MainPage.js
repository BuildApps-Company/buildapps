import React from 'react';
import styled from 'styled-components';
import '../../styles/global.css'
import {colors} from '../../data/colors'

const Header1 = styled.h1`
    font-weight: bold;
    font-size: 64px;
    line-height: 160%;
`;

const Header2 = styled.h2`
    font-weight: bold;
    font-size: 32px;
    line-height: 160%;
`;

const Header3 = styled.h3`
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
`;

const Header4 = styled.h4`
    font-weight: bold;
    font-size: 24px;
    line-height: 160%;
`;

const SubHeader1 = styled.h1`
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
`;

const SubHeader2 = styled.h2`
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    text-transform: uppercase;
`;

const SubHeader3 = styled.h3`
    font-weight: bold;
    font-size: 12px;
    line-height: 160%;
`;

const Body1 = styled.body`
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
`;

const Body2 = styled.body`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
`;

const Button1 = styled.a`
    width: 152px;
    height: 38px;
    padding: 10px 30px;
    border: 2px solid ${colors.Main};
    font-family: 'Muli Light', sans-serif;
    font-size: 24px;
    line-height: 160%;
    box-sizing: border-box;
    text-transform: uppercase;
    color: ${colors.Main};
    text-decoration: none;
    &hover {
        color:${colors.Main};
    }
    &visited {
        color:${colors.Main};
    }
`;

const Button2 = styled.a`
    width: 317px;
    font-size: 64px;
    height: 38px;
    font-family: 'Muli', sans-serif;
    color: ${colors.White};
    text-decoration: none;
    border-bottom: 6px solid ${colors.Main};
    padding-bottom: 2px;
    &hover {
        color:${colors.White};
    }
    &visited {
        color:${colors.White};
    }
`;

export default function MainPage() {
	return (
		<Body1>
			<h1>Main</h1>
			<a href="/AboutUsPage/AboutUsPage">About</a>
            <hr></hr>
            <a href="/PortfolioDetailsPage/PortfolioDetailsPage">Portfolio Details</a>
            <hr></hr>
            <a href="/PortfolioPage/PortfolioPage">Portfolio</a>
            <hr></hr>
            <a href="/PricesPage/PricesPage">Prices</a>
            <hr></hr>
            <a href="/ContactFormPage/ContactFormPage">Contact Form</a>
            <hr></hr>
            <Header1>Clients</Header1>
            <Header2>Clients</Header2>
            <Header3>Clients</Header3>
            <Header4>Clients</Header4>
            <SubHeader1>Clients</SubHeader1>
            <SubHeader2>Clients</SubHeader2>
            <SubHeader3>Clients</SubHeader3>
            <Button1 href="/ContactFormPage/ContactFormPage">contact us</Button1>
            <Button2 href="/ContactFormPage/ContactFormPage">Contact us</Button2>
		</Body1>
	);
}
