import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/theme';
import Logo from './logo.js';
import Menu from './menu';

const logoWidth = 170;

const HeaderContainer = styled.div`
	display: flex;
	background: #ffffff;
	height: ${theme.headerHeight}px;
	align-items: center;
	border-bottom: rgba(0, 0, 0, 0.05) 1px solid;
	padding: 0 5%;
	position: fixed;
	width: 100%;
`;

const LogoContainer = styled.div`
	flex: 0 0 auto;
	width: ${logoWidth}px;
`;

const MenuContainer = styled.div`
	flex: 1 0 auto;
	margin-right: ${logoWidth}px;
`;

const GlobalStyles = createGlobalStyle`
    body: padding-top: ${theme.headerHeight}px
`;

export default () => (
	<>
		<GlobalStyles />
		<HeaderContainer>
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<MenuContainer>
				<Menu />
			</MenuContainer>
		</HeaderContainer>
	</>
);
