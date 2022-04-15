import React from 'react';
import styled from 'styled-components';
import { SocialMediaList } from '../shared/SocialMediaList';
import { breakpoints } from '../../styles/breakpoints';
import { useContactInformation } from '../../data';
import { useTranslation } from 'react-i18next';
import { colors } from '../../styles/colors';

export const Contacts = () => {
	const { t } = useTranslation();

	const { email, phone } = useContactInformation();

	return (
		<ContactsWrap>
			<Title>{t('contactUs.contactWrapTitle')}</Title>
			<ContactsList>
				<ContactsListItem>
					<span>{t('contactUs.contactWrapPhone')}</span>
					<a href={`tel:${phone}`}>{phone}</a>
				</ContactsListItem>
				<ContactsListItem>
					<span>{t('contactUs.contactWrapMail')}</span>
					<a href={`mailto:${email}`}>{email}</a>
				</ContactsListItem>
				<ContactsListItem>
					<SocialWrap>
						<SocialSpanStyled>
							{t('contactUs.contactWrapSocials')}
						</SocialSpanStyled>
						<SocialMediaList />
					</SocialWrap>
				</ContactsListItem>
			</ContactsList>
		</ContactsWrap>
	);
};

const Title = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 24px;
`;

const SocialWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
`;
const SocialSpanStyled = styled.p`
	color: ${colors.Font};
	font-size: 1.25rem;
	font-weight: bold;
	margin: 0 10px 0 0;
`;
const ContactsWrap = styled.div`
	display: block;
	width: 100%;
	height: fit-content;
	border-radius: 8px;
	padding: 32px;
	background: #eff0f3;
	font-size: 1.5rem;
	line-height: 160%;
	/* white-space: nowrap; */

	h3 {
		margin: 0 0 32px 0;
		padding: 0;
	}

	@media all and (min-width: ${breakpoints.tablet}) {
		max-width: 90%;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		width: 545px;
	}
`;

const ContactsList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
`;

const ContactsListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	flex-direction: column;
	flex-wrap: wrap;

	&:last-child {
		padding-top: 10px;
		border-top: 1px solid #d9dbe4;
	}

	&:not(:last-child) {
		margin-bottom: 12px;
	}

	span {
		opacity: 0.5;
		font-size: 1.25rem;
	}
	a {
		text-decoration: none;
		font-size: 1.25rem;
		line-height: 160%;
	}

	@media all and (min-width: ${breakpoints.tablet}) {
		a {
			font-size: 1.25rem;
		}
		span {
			font-size: 1.25rem;
		}
		flex-direction: row;
		margin-top: 0px;
	}
`;
