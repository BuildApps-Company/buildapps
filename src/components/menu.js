import React from 'react';
import styled from 'styled-components';

const menuTabs = [
	{
		title: 'About Us',
    },
    {
		title: 'Our Service',
    },
    {
		title: 'About',
	},
];

const MenuContainer = styled.div`
	display: flex;
`;
const MenuItem = styled.div`
    flex: 1 0 auto;
    padding: 2rem;
	font-size: 1.2rem;
`;

export default () => (
	<MenuContainer>
		{menuTabs.map(x => (
			<MenuItem>{x.title}</MenuItem>
		))}
	</MenuContainer>
);
