import React from 'react';
import styled from 'styled-components';
import { SocialMediaList } from '../shared/SocialMediaList';
import { email, tel } from '../../data/contactUsListData.js';

export const Contacts = () => {
	return (
		<ContactsWrap>
			<h3>Contacts</h3>
			<ContactsList>
				<ContactsListItem>
					<span>Phone number</span>
					<a href={`tel:${tel}`}>{tel}</a>
				</ContactsListItem>
				<ContactsListItem>
					<span> E-mail</span>
					<a href={`mailto:${email}`}>{email}</a>
				</ContactsListItem>
				<ContactsListItem>
					<span>Social medias</span>
					<SocialMediaList />
				</ContactsListItem>
			</ContactsList>
		</ContactsWrap>
	);
};

const ContactsWrap = styled.div`
	width: 50%;
	height: fit-content;
	padding: 40px;
	background: #eff0f3;
	font-size: 2rem;
	line-height: 160%;

	h3 {
		margin: 0 0 32px 0;
		padding: 0;
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
	white-space: nowrap;

	&:last-child {
		padding-top: 10px;
		border-top: 1px solid #d9dbe4;
	}

	&:not(:last-child) {
		margin-bottom: 24px;
	}

	span {
		opacity: 0.5;
	}
	a {
		text-decoration: none;
		font-size: 2rem;
		line-height: 160%;
	}
`;
