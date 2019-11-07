import React from 'react';
import styled from 'styled-components';
import { menuTabs } from '../data/menu';

const MenuContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const MenuItem = styled.a`
	padding: 0 1rem;
	text-transform: uppercase;
`;

export default () => (
	<MenuContainer>
		{menuTabs.map(x => (
			<MenuItem key={x.key} href={`#${x.key}`}>{x.title}</MenuItem>
		))}
	</MenuContainer>
);
