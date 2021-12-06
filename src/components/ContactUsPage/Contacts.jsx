import React from 'react';
import styled from 'styled-components';
import { SocialMediaList } from '../shared/SocialMediaList';
import { breakpoints } from '../../styles/breakpoints';
import { useContactInformation } from '../../data';

export const Contacts = () => {
	const { email, phone } = useContactInformation();

	return (
		<ContactsWrap>
			<Title>Contacts</Title>
			<ContactsList>
				<ContactsListItem>
					<span>Phone</span>
					<a href={`tel:${phone}`}>{phone}</a>
				</ContactsListItem>
				<ContactsListItem>
					<span> E-mail</span>
					<a href={`mailto:${email}`}>{email}</a>
				</ContactsListItem>
				<ContactsListItem>
					<SocialWrap>
						<SocialSpanStyled>Social medias</SocialSpanStyled>
						<SocialMediaList />
					</SocialWrap>
				</ContactsListItem>
			</ContactsList>
		</ContactsWrap>
	);
};

const Title = styled.div`
	font-size: 2rem;
	margin-bottom: 28px;
`;

const SocialWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
`;
const SocialSpanStyled = styled.span`
	margin-right: 10px;
`;
const ContactsWrap = styled.div`
	/* width: 100%; */
	height: fit-content;
	border-radius: 8px;
	padding: 28px;
	background: #eff0f3;
	font-size: 1.5rem;
	line-height: 160%;
	/* white-space: nowrap; */
	margin-top: 32px;

	h3 {
		margin: 0 0 32px 0;
		padding: 0;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		width: 30%;
		margin-top: -24px;
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
		margin-bottom: 24px;
	}

	span {
		opacity: 0.5;
		font-size: 1.5rem;
	}
	a {
		text-decoration: none;
		font-size: 1.5rem;
		line-height: 160%;
	}

	@media all and (min-width: 1480px) {
		a {
			font-size: 1.5rem;
		}
		span {
			font-size: 1.5rem;
		}
		flex-direction: row;
		margin-top: 0px;
	}
`;
