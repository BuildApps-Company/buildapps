import React from 'react';
import styled from 'styled-components';
import { ListTitleWithUnderline } from '../../styles/styled-headers';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { useContactInformation } from '../../data';
import { useTranslation } from 'react-i18next';

export const ContactUsList = () => {
	const contactUsListData = useContactInformation();

  const { t } = useTranslation();
	return (
		<div>
			<ContactFormContainer>
				<ListTitleWithUnderline>{t('contactUsList.title')}</ListTitleWithUnderline>

				<ContuctUsListStyle>
					{contactUsListData.list.map(el => (
						<li key={el.key}>
							<StyledLink href={el.href} target="_blank">
								{el.title}
							</StyledLink>
						</li>
					))}
				</ContuctUsListStyle>
			</ContactFormContainer>
		</div>
	);
};

const ContactFormContainer = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
	}
`;

const ContuctUsListStyle = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	font-size: 1.25rem;
	line-height: 160%;

	li {
		color: ${colors.light.white};
	}

	li:not(:last-child) {
		margin-bottom: 14px;
	}

	li:not(:first-child) {
		color: rgba(255, 255, 255, 0.5);
	}
`;

const StyledLink = styled.a`
  display: inline-block;
	text-decoration: none;
	font-size: 1.2rem;
	color: inherit;
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
