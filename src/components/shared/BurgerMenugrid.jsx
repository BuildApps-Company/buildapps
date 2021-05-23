import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { OurTeamList } from './OurTeamList';
import { ContactUsList } from './ContactUsList';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import logoWhite from '../../../static/images/logo/logoWhite.svg';
import logoWhiteHover from '../../../static/images/logo/logoWhiteHover.svg';
import burgerClose from '../../../static/images/burger/burgerClose.svg';

export function BurgerMenu({ toogleList }) {
	return (
		<StyledBurgerMenu>
			<StyledBurgerHeader>
				<Link to={routes.home}>
					<Logo
						src={logoWhite}
						onMouseOver={e => (e.currentTarget.src = logoWhiteHover)}
						onMouseOut={e => (e.currentTarget.src = logoWhite)}
					/>
				</Link>

				<Burger src={burgerClose} onClick={toogleList} />
			</StyledBurgerHeader>

			<LanguagesWrap>
				<p>EN</p>
				<p>RU</p>
				<p>UA</p>
			</LanguagesWrap>

			<BurgerMenuWrap>
				<div>
					<BurgerTitle>Ready to get started?</BurgerTitle>
					<ContactUsLink to={routes.contactForm}>Contact Us</ContactUsLink>
				</div>

				<OurTeamList />

				<ContactUsList />
			</BurgerMenuWrap>

			<SocialLinksWrap>
				<SocialLink to="/">Facebook</SocialLink>
				<SocialLink to="/">Linkedin</SocialLink>
				<SocialLink to="/">Instagram</SocialLink>
			</SocialLinksWrap>
		</StyledBurgerMenu>
	);
}

const StyledBurgerMenu = styled.div`
	display: grid;
	grid-template-areas:
		'header header header'
		'div div div'
		'div1 div1 div1'
		'footer footer footer';
	grid-template-rows: 60px 1fr 60px;
	grid-template-columns: 20% 1fr 15%;
	grid-gap: 10px;
	height: 100vh;
	margin: 0;
	//
	z-index: 999;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: #110322;
`;

const StyledBurgerHeader = styled.div`
	grid-area: header;
	//
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
	width: 32px;
	height: 32px;
	cursor: pointer;

	@media all and (min-width: ${breakpoints.phone}) {
		width: 64px;
		height: 64px;
	}
`;

const LanguagesWrap = styled.div`
	grid-area: div;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding-right: 85px;

	p {
		line-height: 160%;
		color: #ffffff;
		opacity: 0.5;
		cursor: pointer;
	}

	p:hover {
		opacity: 1;
	}
`;

const BurgerMenuWrap = styled.div`
	grid-area: div1;
	//
	display: flex;
	justify-content: space-between;
	/* padding: 0 215px; */
`;

const BurgerTitle = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 4rem;
	line-height: 160%;
	color: #ffffff;
`;

const ContactUsLink = styled(Link)`
	display: inline-block;
	font-size: 4rem;
	line-height: 160%;
	text-decoration: none;
	border-bottom: 6px solid #874aad;
	color: #ffffff;
`;

const SocialLinksWrap = styled.div`
	margin: 0 auto;
	grid-area: footer;
	//
	display: flex;
	justify-content: center;
	align-self: flex-end;
`;

const SocialLink = styled(Link)`
	line-height: 160%;
	text-transform: uppercase;
	text-decoration: none;
	color: #ffffff;
	opacity: 0.5;

	&:not(:last-child) {
		margin-right: 24px;
	}

	&:hover {
		opacity: 1;
	}
`;

// const OurTeamListWrap = styled(OurTeamList)`
// 	grid-area: article;
// `;

// const ContactUsListWrap = styled(ContactUsList)`
// 	grid-area: ads;
// `;

// const NavWrap = styled.div`
// 	grid-area: nav;
// `;
