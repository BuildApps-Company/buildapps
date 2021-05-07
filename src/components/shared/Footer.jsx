import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { OurTeamList } from './OurTeamList';
import { ContactUsList } from './ContactUsList';
import { SocialMediaList } from './SocialMediaList';
import { ListTitle } from '../../styles/styled-headers';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';

export const Footer = () => {
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', setWidth(window.innerWidth));
	}, []);

	return (
		<StyledFooter>
			<FlexContainer>
				{width > 450 && (
					<div>
						<ListTitle>
							A close-knit team with extensive experience and understanding of
							what is necessary for you
						</ListTitle>

						<SocialMediaList />
					</div>
				)}

				<OurTeamList />

				<ContactUsList />

				{width < 450 && <SocialMediaList />}
			</FlexContainer>

			{width <= 450 ? (
				<TermsOfUseContainer>
					<span>Build Apps</span> © 2021 BuildApps
				</TermsOfUseContainer>
			) : (
				<TermsOfUseContainer>
					Copyright © 2021 BuildApps. Design and development company.
				</TermsOfUseContainer>
			)}
		</StyledFooter>
	);
};

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

const TermsOfUseContainer = styled.p`
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;
	font-size: 1.25rem;
	line-height: 160%;
	color: rgba(255, 255, 255, 0.5);

	@media all and (min-width: ${breakpoints.phone}) {
		justify-content: center;
	}

	span {
		color: inherit;
	}
`;
