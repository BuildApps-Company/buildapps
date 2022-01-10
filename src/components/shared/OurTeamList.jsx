import React from 'react';
import styled from 'styled-components';
import { ListTitleWithUnderline } from '../../styles/styled-headers';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby-plugin-react-i18next';
import { useOurTeamListData } from '../../data';

export const OurTeamList = () => {
	const ourTeamListData = useOurTeamListData();

  const { t } = useTranslation();

	return (
		<TeamListWrap>
			<TitleWrap>
				<ListTitleWithUnderline>{t('footer.ourTeamTitle')}</ListTitleWithUnderline>
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
  min-width: 210px;
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
	font-size: 1.2rem;
	line-height: 160%;

	li {
		margin-bottom: 16px;
	}

	li:last-child {
		margin-bottom: 32px;
	}
`;

const StyledLink = styled(Link)`
  display: inline-block;
	text-decoration: none;
	font-size: 1.2rem;
	color: ${colors.light.white};
	opacity: 0.75;

  &:after {
    content: '';
    width: 0px;
    height: 3px;
    display: block;
    background: ${colors.Main};
    transition: width 0.25s;
  }

  &:hover {
    opacity: 1;
  }
  &:hover:after {
    width: 100%;
  }
`;
