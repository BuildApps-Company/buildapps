import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { menuTabs } from '../data/menu';
import { theme } from '../styles/theme';

const MenuContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const MenuItem = styled.a`
	padding: 0 1rem;
	text-transform: uppercase;
`;

export default () => {
	const [activeMenuKey, setActiveMenuKey] = useState();
	function smoothScroll(event, menuItem) {
		event.preventDefault();
		const section = document.getElementById(menuItem.key);
		if (section) {
			window.scrollTo({
				top: section.offsetTop - theme.headerHeight,
				behavior: 'smooth',
			});
		}
	}

	useEffect(() => {
		const menuItems = Object.entries(menuTabs).map(([, x]) => x);
		const middleOfScreen = window.innerHeight / 2 + theme.headerHeight / 2;
		const handler = () => {
			const [closestSection] = menuItems
				.map(x => [x, document.getElementById(x.key)])
				.filter(([, node]) => node != null)
				.map(([item, node]) => [item, node.getBoundingClientRect().top])
				.filter(([, top]) => top <= middleOfScreen)
				.reduce(
					([item, top], [nextItem, nextTop]) =>
						top === undefined || nextTop > top
							? [nextItem, nextTop]
							: [item, top],
					[]
				);
			if (closestSection && activeMenuKey !== closestSection.key) {
				window.history.replaceState(null, null, `#${closestSection.key}`);
				setActiveMenuKey(closestSection.key);
			}
		};
		window.addEventListener('scroll', handler);
		return () => {
			window.removeEventListener('scroll', handler);
		};
	}, [activeMenuKey]);

	return (
		<MenuContainer>
			{Object.entries(menuTabs).map(([, x]) => (
				<MenuItem
					key={x.key}
					className={activeMenuKey === x.key ? 'active' : ''}
					onClick={event => smoothScroll(event, x)}
					href={`#${x.key}`}
				>
					{x.title}
				</MenuItem>
			))}
		</MenuContainer>
	);
};
