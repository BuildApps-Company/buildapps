import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/theme';
import Logo from './logo.js';
import Menu from './menu';
import ContactUs from './contact-us';

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
	z-index: 9;
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

export default () => (
	<>
		<GlobalStyles />
		<HeaderContainer>
			<SideContainer>
				<Logo />
			</SideContainer>
			<MenuContainer>
				<Menu />
			</MenuContainer>
			<SideContainer>
				<ContactUs></ContactUs>
			</SideContainer>
		</HeaderContainer>
	</>
);
