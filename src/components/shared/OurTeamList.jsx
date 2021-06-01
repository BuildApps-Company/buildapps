import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { ourTeamListData } from '../../data/ourTeamListData';
import { ListTitleWithUnderline } from '../../styles/styled-headers';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';

export const OurTeamList = () => {
	return (
		<TeamListWrap>
			<TitleWrap>
				<ListTitleWithUnderline>Our Team</ListTitleWithUnderline>
			</TitleWrap>
			<OurTeamListStyle>
				{ourTeamListData.map(el => (
					<li key={el.key}>
						<StyledLink to={el.href}>{el.title}</StyledLink>
					</li>
				))}
			</OurTeamListStyle>
		</TeamListWrap>
	);
};
const TeamListWrap = styled.div`
	margin-right: 9%;
	white-space: nowrap;
`;
const TitleWrap = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const OurTeamListStyle = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	font-size: 1.25rem;
	line-height: 160%;

	li {
		margin-bottom: 16px;
	}

	li:last-child {
		margin-bottom: 32px;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${colors.light.white};
`;
