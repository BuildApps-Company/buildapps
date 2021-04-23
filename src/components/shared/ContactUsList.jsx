import React from 'react';
import styled from 'styled-components';
import { ListTitleWithUnderline } from '../../styles/styled-headers';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';

const contactUsList = [
	{
		key: 'form',
		title: 'Contact form',
		href: '',
	},
	{
		key: 'adress',
		title: 'Kyiv, Ukraine',
		href: '',
	},
	{
		key: 'email',
		title: 'buildapps.pro@gmail.com',
		href: '',
	},
];

export const ContactUsList = () => (
	<div>
		<ListTitleWithUnderline>Contact Us</ListTitleWithUnderline>

		<ContuctUsListStyle>
			{contactUsList.map(el => (
				<li key={el.key}>
					<a href={el.href}>{el.title}</a>
				</li>
			))}
		</ContuctUsListStyle>
	</div>
);

const ContuctUsListStyle = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;

	font-size: 20px;
	line-height: 160%;

	@media all and (max-width: ${breakpoints.phone}) {
		display: none;
	}

	li {
		color: ${colors.light.white};
	}

	li:not(:last-child) {
		margin-bottom: 16px;
	}

	li:not(:first-child) {
		color: rgba(255, 255, 255, 0.5);
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
