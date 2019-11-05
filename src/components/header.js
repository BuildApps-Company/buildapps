import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/theme';
import Logo from './logo.js';
import Menu from './menu';

const HeaderContainer = styled.div`
	display: flex;
	background: rgba(0, 0, 0, 0.2);
	color: rgb(0, 0, 0, 0.8);
	height: ${theme.headerHeight}px;
    align-items: center;
    justify-content: space-between;
	padding: 0 2%;
	position: fixed;
	width: 100%;
`;

const LogoContainer = styled.div`
	flex: 0 0 auto;
`;

const MenuContainer = styled.div`
    flex: 0 0 40%;
    
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
