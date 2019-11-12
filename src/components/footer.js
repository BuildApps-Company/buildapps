import React from 'react';
import Menu from './menu';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Footer = styled.div`
	height: ${theme.footerHeight}px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 ${(100 - theme.containerWidthPercent) / 2}%;
	font-size: 0.9rem;
`;
const TermsOfUseContainer = styled.div`
	color: ${theme.colors.gray};
`;

const StyledMenu = styled(Menu)`
	& a {
		font-size: 0.8rem;
		padding: 0 0 0 1rem;
	}

	@media all and (max-width: ${theme.breakpoints.tablet}px) {
		display: none;
	}
`;

export default () => (
	<Footer>
		<TermsOfUseContainer>
			© BuildApps, 2019 |{' '}
			<a href="mailto:buildappsua@gmail.com">buildappsua@gmail.com</a>
		</TermsOfUseContainer>
		<StyledMenu />
	</Footer>
);
