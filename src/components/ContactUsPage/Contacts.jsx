import React from 'react';
import styled from 'styled-components';
import { SocialMediaList } from '../shared/SocialMediaList';

export const Contacts = () => {
	return (
		<ContactsWrap>
			<h3>Contacts</h3>

			<ContactsList>
				<ContactsListItem>
					<span>Phone number</span> +38 (063) 000 000 00
				</ContactsListItem>

				<ContactsListItem>
					<span>E-mail</span> buildapps.pro@gmail.com
				</ContactsListItem>

				<ContactsListItem>
					<span>Social medias</span> <SocialMediaList />
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
`;

const ContactsListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	&:last-child {
		padding-top: 24px;
		border-top: 1px solid #d9dbe4;
	}

	&:not(:last-child) {
		margin-bottom: 24px;
	}

	span {
		opacity: 0.5;
	}
`;
