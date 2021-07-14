import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';
import { OurTeamList } from './OurTeamList';
import { ContactUsList } from './ContactUsList';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import logoWhite from '../../../static/images/logo/logoWhite.svg';
import logoWhiteHover from '../../../static/images/logo/logoWhiteHover.svg';
import burgerClose from '../../../static/images/burger/burgerClose.svg';
import { email } from '../../data/contactUsListData';
import { socialMediaListData } from '../../data/socialMediaListData';
import { colors } from '../../styles/colors';
// import StyledBurger from '../StyledBurger/StyledBurger';

export function BurgerMenu({ toogleList, active }) {
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
				{/* <StyledBurger toogleList={toogleList} active={active}></StyledBurger> */}
			</StyledBurgerHeader>

			{/* <LanguagesWrap>
				<p>EN</p>
				<p>RU</p>
				<p>UA</p>
			</LanguagesWrap> */}

			<BurgerMenuWrap>
				<BurgerWrapDesktop>
					<BurgerTitle>Ready to get started?</BurgerTitle>
					<ContactUsLink href={routes.contactForm} target="_blank">
						Contact Us
					</ContactUsLink>
				</BurgerWrapDesktop>

				<WrapMob>
					<OurTeamList />
					<ContactUsWrap>
						<StyledEmail href={`mailto:${email}`} target="_blank">
							{email}
						</StyledEmail>
						<StyledLink to={routes.contactForm}>Contact us</StyledLink>
					</ContactUsWrap>
				</WrapMob>
				<WrapDesktop>
					<OurTeamListDesktop />
					<ContactUsList />
				</WrapDesktop>
			</BurgerMenuWrap>

			<SocialLinksWrap>
				{socialMediaListData.map(el => (
					<SocialLink key={el.key}>
						<a href={el.href} target="_blank">
							{el.key}
						</a>
					</SocialLink>
				))}
			</SocialLinksWrap>
			<GlobalStyle></GlobalStyle>
		</StyledBurgerMenu>
	);
}

const WrapDesktop = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: flex;
		justify-content: space-between;
		margin-top: 48px;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		margin-top: 0px;
	}
`;
const OurTeamListDesktop = styled(OurTeamList)`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
	}
`;
const StyledEmail = styled.a`
	display: block;
	margin: 0 0 28px 0;
	padding: 0;
	line-height: 160%;
	color: #ffffff;
	text-decoration: none;
	cursor: pointer;
`;
const ContactUsWrap = styled.div`
	margin-top: 18px;
	padding: 34px 16px;
	height: fit-content;
	background: linear-gradient(88deg, #874aad 3.37%, #e19bb4 96.63%);
	text-align: center;
	max-width: 360px;
	border-radius: 4px;
`;
const StyledLink = styled(Link)`
	white-space: nowrap;
	padding: 12px 32px;
	font-size: 1.5rem;
	line-height: 160%;
	text-decoration: none;
	text-transform: uppercase;
	color: #874aad;
	background: #ffffff;
`;
const WrapMob = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: none;
	}
`;

const BurgerWrapDesktop = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
		margin-right: 6%;
	}
`;

const GlobalStyle = createGlobalStyle`
  body {
   overflow:hidden;
  }
`;
const StyledBurgerMenu = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 999;
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: #110322;
`;

const StyledBurgerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4px 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding: 16px 6%;
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
	display: flex;
	justify-content: space-between;
	padding: 0 11%;
	margin-top: auto;

	@media all and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.notebook}) {
		flex-direction: column;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
	}
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
	border-radius: 4px;
`;

const SocialLinksWrap = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	padding-bottom: 24px;
	&:last-of-type {
		margin-top: auto;
	}
`;

const SocialLink = styled.li`
	line-height: 160%;
	color: #ffffff;
	opacity: 0.5;
	list-style: none;

	&:not(:last-child) {
		margin-right: 24px;
	}

	&:hover {
		opacity: 1;
	}
	a {
		text-transform: uppercase;
		text-decoration: none;
		color: ${colors.light.white};
	}
`;
