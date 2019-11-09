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
`;
const TermsOfUseContainer = styled.div`
	color: ${theme.colors.gray};
`;

const StyledMenu = styled(Menu)`
	& a {
		padding: 0 0 0 2rem;
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
