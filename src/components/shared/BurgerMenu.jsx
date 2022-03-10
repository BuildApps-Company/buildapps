import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { OurTeamList } from './OurTeamList';
import { ContactUsList } from './ContactUsList';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import logoWhite from '../../../static/images/logo/logoWhite.svg';
import logoWhiteHover from '../../../static/images/logo/logoWhiteHover.svg';
import burgerClose from '../../../static/images/burger/burgerClose.svg';
import { colors } from '../../styles/colors';
import { useTranslation } from 'react-i18next';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { useContactInformation, useSocialMediaListData } from '../../data';

export function BurgerMenu({ toogleList, isOpen }) {
	const { languages, changeLanguage, language, originalPath } = useI18next();
	const socialMediaListData = useSocialMediaListData();
	const { email } = useContactInformation();

	const { t } = useTranslation();

	return (
		<StyledBurgerMenu
			style={
				isOpen
					? { transform: 'translateY(0%)', overflow: 'auto' }
					: { transform: 'translateY(-100%)', overflow: 'hidden' }
			}
		>
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
				{languages.map(lang => (
					<Language
						key={lang}
						to={originalPath}
						language={lang}
						isActive={lang === language}
						onClick={event => {
							event.preventDefault();
							changeLanguage(lang);
						}}
					>
						{lang}
					</Language>
				))}
			</LanguagesWrap>

			<BurgerMenuWrap>
				<BurgerWrapDesktop>
					<BurgerTitle>{t('burgerMenu.question')}</BurgerTitle>
					<ContactUsLink to={routes.contactForm} target="_blank">
						{t('burgerMenu.contactUsButton')}
					</ContactUsLink>
				</BurgerWrapDesktop>

				<WrapMob>
					<OurTeamList />
					<ContactUsWrap>
						<StyledEmail href={`mailto:${email}`} target="_blank">
							{email}
						</StyledEmail>
						<StyledLink to={routes.contactForm}>
							{t('burgerMenu.contactUsButton')}
						</StyledLink>
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
			<GlobalStyle isOpen={isOpen}></GlobalStyle>
		</StyledBurgerMenu>
	);
}

const WrapDesktop = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: flex;
		margin-top: 48px;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		margin-top: 0px;
		box-sizing: content-box;
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
	border-radius: 4px;
	font-size: 1.5rem;
	line-height: 160%;
	font-weight: 600;
	text-decoration: none;
	text-transform: uppercase;
	color: #874aad;
	background: #ffffff;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
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
	}
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.isOpen ? 'hidden' : 'auto')};
  }
`;

const StyledBurgerMenu = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 1001;
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: #110322;
	transition: transform 0.4s;
`;

const StyledBurgerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4px 16px 4px 14px;

	@media all and (min-width: ${breakpoints.notebook}) {
		padding: 16px 96px;
	}
`;

const Logo = styled.img`
	width: 100px;

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

const Language = styled(Link)`
	line-height: 160%;
	color: #ffffff;
	opacity: 0.5;
	cursor: pointer;
	text-transform: uppercase;
	text-decoration: none;
	padding: 5px 0;

	${({ isActive }) => isActive && `opacity: 0.8;`}

	&:hover {
		opacity: 1;
	}
`;

const LanguagesWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 0 8%;

	@media all and (min-width: ${breakpoints.notebook}) {
		padding: 16px 115px;
	}
`;

const BurgerMenuWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 11%;
	margin-top: 15vh;

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
