import React, { useState } from 'react';
import styled from 'styled-components';
import icon from '../../static/images/ic_mobile_menu.svg';
import { theme } from '../styles/theme';
import { Menu } from '../data/menu';
import { smoothScrollTo } from '../utils/url';

const MenuImage = styled.img`
	width: 30px;
	cursor: pointer;
`;

const MenuList = styled.div`
	position: absolute;
	z-index: 999;
	top: ${theme.headerHeight}px;
	left: 0;
	width: 100vw;
	flex-direction: column;
	background: ${theme.colors.whiteSmoke};
	text-align: center;
	overflow: hidden;
	height: 0;

	@keyframes showAnimation {
		0% {
			opacity: 0;
			height: auto;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes hideAnimation {
		0% {
			opacity: 1;
			height: auto;
		}
		50% {
			opacity: 0.5;
		}
		99% {
			opacity: 0;
			height: auto;
		}
		100% {
			opacity: 0;
			height: 0;
		}
	}

	&.visible {
		opacity: 1;
		height: auto;
		animation-name: showAnimation;
		animation-duration: 0.3s;
		animation-timing-function: linear;
	}

	&.hidden {
		opacity: 0;
		height: 0;
		animation-name: hideAnimation;
		animation-duration: 0.3s;
		animation-timing-function: linear;
	}
`;

const MenuItem = styled.a`
	padding: 1rem 0;
	display: block;
`;

export default () => {
	const [visible, setVisibleState] = useState(null);
	const listClassName =
		visible != null ? (visible ? 'visible' : 'hidden') : null;

	function toogleMenu(show) {
		show = show == null ? !visible : show;
		setVisibleState(show);
	}

	return (
		<>
			<MenuImage src={icon} alt="Menu" onClick={() => toogleMenu()} />
			<MenuList onClick={() => toogleMenu(false)} className={listClassName}>
				{Object.entries(Menu).map(([key, item]) => (
					<MenuItem
						key={key}
						onClick={event => smoothScrollTo(event, item.key)}
						href={`#${item.key}`}
					>
						{item.title}
					</MenuItem>
				))}
			</MenuList>
		</>
	);
};
