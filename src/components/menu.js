import React from 'react';
import styled from 'styled-components';

const menuTabs = [
	{
		key: 'about',
		title: 'About Us',
	},
	{
		key: 'service',
		title: 'Our Service',
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
	padding: 0 2rem;
	font-size: 1.2rem;
`;

export default () => (
	<MenuContainer>
		{menuTabs.map(x => (
			<MenuItem key={x.key}><MenuLink href="#" key={x.key}>{x.title}</MenuLink></MenuItem>
		))}
	</MenuContainer>
);
