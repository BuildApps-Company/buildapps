import React, { useState } from 'react';
import styled from 'styled-components';
import { routes } from '../../utilities/routes';
import { OurTeamList } from './OurTeamList';
import { ContactUsList } from './ContactUsList';
import { SocialMediaList } from './SocialMediaList';
import { ListTitle } from '../../styles/styled-headers';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import { ListTitleWithUnderline } from '../../styles/styled-headers';
import plusIcon from '../../../static/images/ic_plus.svg';
import minusIcon from '../../../static/images/ic_minus.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby-plugin-react-i18next';
import { LanguageSelector } from './LanguageSelector';

export const Footer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toogleList = () => setIsOpen(prevState => !prevState);

	const { t } = useTranslation();

	return (
		<StyledFooter>
			<FlexContainerDesktop>
				<ListTitleWrap>
					<ListTitle>{t('footer.description')}</ListTitle>
					<SocialMediaList />
					<LanguageSelector />
				</ListTitleWrap>
				<OurTeamList />
				<ContactUsList />
			</FlexContainerDesktop>
			<SocialMediaListWrapTablet>
				<SocialMediaList />
			</SocialMediaListWrapTablet>
			<FlexContainerMob>
				<OurTeamWrapMob>
					<ListTitleWithUnderline>
						{t('footer.ourTeamTitle')}
					</ListTitleWithUnderline>
					{isOpen ? (
						<img src={minusIcon} alt="Minus Icon" onClick={toogleList} />
					) : (
						<img src={plusIcon} alt="Plus Icon" onClick={toogleList} />
					)}
				</OurTeamWrapMob>
				{isOpen && <OurTeamList />}
				<StyledLinkTitle to={routes.contactForm}>
					{t('footer.contactUsTitle')}
				</StyledLinkTitle>

				<SocialMediaList />
			</FlexContainerMob>

			<TermsOfUseContainerMobile>
				<span>Build Apps</span> {t('footer.copyright')}
			</TermsOfUseContainerMobile>

			<TermsOfUseContainerDesktop>
				Copyright {t('footer.copyright')} {t('footer.termsOfUse')}
			</TermsOfUseContainerDesktop>
		</StyledFooter>
	);
};

const SocialMediaListWrapTablet = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.notebook}) {
		display: block;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		display: none;
	}
`;
const ListTitleWrap = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.notebook}) {
		display: block;
	}
`;
const FlexContainerDesktop = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: flex;
		justify-content: space-between;
	}
`;

const TermsOfUseContainerDesktop = styled.p`
	display: none;
	@media all and (min-width: ${breakpoints.notebook}) {
		display: flex;
		justify-content: center;
		text-align: center;
		margin: 0;
		padding: 0;
		font-size: 1rem;
		line-height: 160%;
		color: rgba(255, 255, 255, 0.5);

		span {
			color: inherit;
		}
	}
`;
const OurTeamWrapMob = styled.div`
	display: flex;
	justify-content: space-between;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: none;
	}
`;
const StyledLinkTitle = styled(Link)`
	display: block;
	margin: 0;
	padding: 0 0 16px 0;
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	text-decoration: none;
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	color: ${colors.light.white};
`;

const StyledFooter = styled.footer`
	background-color: ${colors.grey.dark};
	padding: 32px 16px;

	@media all and (min-width: ${breakpoints.tablet}) {
		padding: 32px 11%;
	}
`;

const FlexContainerMob = styled.div`
	display: block;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: none;
	}
`;

const TermsOfUseContainerMobile = styled.p`
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;
	font-size: 1rem;
	line-height: 160%;
	color: rgba(255, 255, 255, 0.5);

	span {
		color: inherit;
	}
	@media all and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.notebook}) {
		margin-top: 10px;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		display: none;
	}
`;
