import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/theme';
import Logo from './logo.js';
import Menu from './menu';
import ContactUs from './contact-us';
import MobileMenu from './mobile-menu';

const logoWidth = 170;

const HeaderContainer = styled.div`
	display: flex;
	background: #ffffff;
	height: ${theme.headerHeight}px;
	align-items: center;
	padding: 0 50px;
	position: fixed;
	top: 0px;
	width: 100%;
	z-index: 999;
`;

const SideContainer = styled.div`
	flex: 0 0 auto;
	width: ${logoWidth}px;
`;

const MenuContainer = styled.div`
	flex: 1 0 auto;
`;

const GlobalStyles = createGlobalStyle`
    body {
		padding-top: ${theme.headerHeight}px;
	}
`;

const Center = styled.div`
	text-align: right;
`;

export default () => {
	const [layout, changeLayout] = useState('desktop');
	useEffect(() => {
		changeLayout(
			window.innerWidth <= theme.breakpoints.tablet ? 'tablet' : 'desktop'
		);
	}, []);

	return (
		<>
			<GlobalStyles />
			<HeaderContainer>
				<SideContainer>
					<Logo />
				</SideContainer>
				{layout === 'desktop' ? (
					<>
						<MenuContainer>
							<Menu showActive />
						</MenuContainer>
						<SideContainer>
							<ContactUs></ContactUs>
						</SideContainer>
					</>
				) : (
					<>
						<MenuContainer>
							<ContactUs></ContactUs>
						</MenuContainer>
						<SideContainer style={{ textAlign: 'right' }}>
							<MobileMenu />
						</SideContainer>
					</>
				)}
			</HeaderContainer>
		</>
	);
};
