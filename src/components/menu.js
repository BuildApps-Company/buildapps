import React from 'react';
import styled from 'styled-components';

const menuTabs = [
	{
		key: 'about',
		title: 'About',
	},
	{
		key: 'service',
		title: 'Services',
	},
	{
		key: 'portfolio',
		title: 'Portfolio',
	},
	{
		key: 'contacts',
		title: 'Contacts',
	}
];

const MenuContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const MenuItem = styled.div`
	flex: 0 0 auto;
	display: flex;
`;

const MenuLink = styled.a`
	padding: 0 1rem;
	font-size: 1rem;
	text-transform: uppercase;
`;

export default () => (
	<MenuContainer>
		{menuTabs.map(x => (
			<MenuItem key={x.key}><MenuLink href="#" key={x.key}>{x.title}</MenuLink></MenuItem>
		))}
	</MenuContainer>
);
