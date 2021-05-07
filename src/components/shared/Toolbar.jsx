import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logoWhite from '../../../static/images/toolbar/logoWhite.svg';
import logoBlack from '../../../static/images/toolbar/logoBlack.svg';
import burgerWhite from '../../../static/images/toolbar/burgerWhite.svg';
import burgerBlack from '../../../static/images/toolbar/burgerBlack.svg';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { ourTeamListData } from '../../data/ourTeamListData';
import { colors } from '../../styles/colors';

export function Toolbar({ isWhite }) {
	const [isOpen, setIsOpen] = useState(false);
	const toogleList = () => setIsOpen(prevState => !prevState);

	return (
		<StyledHeader>
			<LogoLink to={routes.home}>
				<Logo src={isWhite ? logoWhite : logoBlack} />
			</LogoLink>

			<Burger src={isWhite ? burgerWhite : burgerBlack} onClick={toogleList} />

			{isOpen && (
				<BurgerMenu>
					<OurTeamListStyle>
						{ourTeamListData.map(el => (
							<li key={el.key}>
								<StyledLink to={el.href}>{el.title}</StyledLink>
							</li>
						))}
					</OurTeamListStyle>

					<MobileContactUs>
						<p>buildapps.pro@gmail.com</p>
						<MobileContactUsLink to={routes.contactForm}>
							Contact us
						</MobileContactUsLink>
					</MobileContactUs>

					<SocialMedia>
						<SocialMediaLink>Facebook</SocialMediaLink>
						<SocialMediaLink>Linkedin</SocialMediaLink>
						<SocialMediaLink>Instagram</SocialMediaLink>
					</SocialMedia>
				</BurgerMenu>
			)}
		</StyledHeader>
	);
}

const SocialMedia = styled.div`
	margin-top: 100px;
	display: flex;
	justify-content: space-evenly;
`;
const SocialMediaLink = styled(Link)`
	line-height: 160%;
	text-transform: uppercase;
	color: #ffffff;
	opacity: 0.5;
`;

const MobileContactUs = styled.div`
	padding: 24px 0;
	text-align: center;
	background: linear-gradient(88deg, #874aad 3.37%, #e19bb4 96.63%);

	p {
		margin: 0 0 24px 0;
		padding: 0;
		font-size: 1.25rem;
		line-height: 160%;
		color: #ffffff;
	}
`;

const MobileContactUsLink = styled(Link)`
	width: fit-content;
	margin: 0 auto 0 auto;
	padding: 12px 32px;
	display: block;
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	text-decoration: none;
	color: #874aad;
	background: #ffffff;
`;

const OurTeamListStyle = styled.ul`
	margin: 80px 0 0 0;
	padding: 0;
	list-style: none;

	li {
		margin-bottom: 32px;
	}

	li:last-child {
		margin-bottom: 24px;
	}
`;

const StyledLink = styled(Link)`
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 160%;
	text-decoration: none;
	color: ${colors.light.white};
`;

const BurgerMenu = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;
	background: #110322;
`;

const LogoLink = styled(Link)`
	z-index: 1;
`;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4px 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding: 16px 64px 16px 53px;
	}
`;

const Logo = styled.img`
	width: 70px;
	height: 32px;

	@media all and (min-width: ${breakpoints.phone}) {
		width: 200px;
		height: 92px;
	}
`;

const Burger = styled.img`
	z-index: 1;
	width: 32px;
	height: 32px;

	@media all and (min-width: ${breakpoints.phone}) {
		width: 64px;
		height: 64px;
	}
`;
