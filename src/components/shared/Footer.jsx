import React from 'react';
import styled from 'styled-components';
import { OurTeamList } from './OurTeamList';
import { ContactUsList } from './ContactUsList';
import { SocialMediaList } from './SocialMediaList';
import { ListTitle } from '../../styles/styled-headers';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';

export const Footer = () => (
	<StyledFooter>
		<FlexContainer>
			<AboutContainer>
				<ListTitle>
					A close-knit team with extensive experience and understanding of what
					is necessary for you
				</ListTitle>

				<SocialMediaList />
			</AboutContainer>

			<OurTeamList />

			<ContactUsList />

			<SocialMediaListMobile>
				<SocialMediaList />
			</SocialMediaListMobile>
		</FlexContainer>

		<TermsOfUseContainerMobile>
			<span>Build Apps</span> © 2021 BuildApps
		</TermsOfUseContainerMobile>

		<TermsOfUseContainerDesktop>
			Copyright © 2021 BuildApps. Design and development company.
		</TermsOfUseContainerDesktop>
	</StyledFooter>
);

const StyledFooter = styled.footer`
	padding: 32px 16px;
	background-color: ${colors.grey.dark};

	@media all and (min-width: ${breakpoints.phone}) {
		padding: 32px 215px;
	}
`;

const FlexContainer = styled.div`
	@media all and (min-width: ${breakpoints.phone}) {
		display: flex;
		justify-content: space-between;
		margin-bottom: 70px;
	}
`;

const AboutContainer = styled.div`
	@media all and (max-width: ${breakpoints.phone}) {
		display: none;
	}
`;

const SocialMediaListMobile = styled.div`
	@media all and (min-width: ${breakpoints.phone}) {
		display: none;
	}
`;

const TermsOfUseContainer = styled.p`
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;

	font-size: 20px;
	line-height: 160%;
	color: rgba(255, 255, 255, 0.5);

	@media all and (min-width: ${breakpoints.phone}) {
		justify-content: center;
	}

	span {
		color: inherit;
	}
`;

const TermsOfUseContainerMobile = styled(TermsOfUseContainer)`
	@media all and (min-width: ${breakpoints.phone}) {
		display: none;
	}
`;

const TermsOfUseContainerDesktop = styled(TermsOfUseContainer)`
	@media all and (max-width: ${breakpoints.phone}) {
		display: none;
	}
`;
