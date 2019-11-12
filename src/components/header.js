import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/theme';
import Logo from './logo.js';
import Menu from './menu';
import ContactUs from './contact-us';
import MobileMenu from './mobile-menu';
import { SlideContainer } from '../styles/shared';

const HeaderContainer = styled.div`
	background: #ffffff;
	height: ${theme.headerHeight}px;
	position: fixed;
	top: 0px;
	width: 100%;
	z-index: 999;
`;

const FlexSlideContainer = styled(SlideContainer)`
	display: flex;
	align-items: center;
	height: 100%;
`;

const FixedContainer = styled.div`
	flex: 0 0 auto;
	width: 170px;
`;

const ResponsiveContainer = styled.div`
	flex: 0 1 auto;
	margin-right: 2rem;
`;

const GrowContainer = styled.div`
	flex: 1 0 auto;
`;

const GlobalStyles = createGlobalStyle`
  body {
		padding-top: ${theme.headerHeight}px;
	}
`;

export default () => {
	const [layout, changeLayout] = useState(null);

	useEffect(() => {
		let newLayout = 'desktop';
		const { innerWidth } = window;

		if (innerWidth <= theme.breakpoints.phone) {
			newLayout = 'phone';
		} else if (innerWidth <= theme.breakpoints.tablet) {
			newLayout = 'tablet';
		}

		newLayout !== layout && changeLayout(newLayout);
	}, []);

	return (
		<>
			<GlobalStyles />
			<HeaderContainer>
				<FlexSlideContainer>
					{layout === 'desktop' && (
						<>
							<FixedContainer>
								<Logo />
							</FixedContainer>
							<GrowContainer>
								<Menu showActive />
							</GrowContainer>
							<FixedContainer>
								<ContactUs></ContactUs>
							</FixedContainer>
						</>
					)}
					{layout === 'tablet' && (
						<>
							<ResponsiveContainer>
								<MobileMenu />
							</ResponsiveContainer>
							<ResponsiveContainer>
								<Logo />
							</ResponsiveContainer>
							<GrowContainer style={{ textAlign: 'right' }}>
								<ContactUs></ContactUs>
							</GrowContainer>
						</>
					)}
					{layout === 'phone' && (
						<>
							<ResponsiveContainer>
								<MobileMenu />
							</ResponsiveContainer>
							<GrowContainer>
								<Logo />
							</GrowContainer>
						</>
					)}
				</FlexSlideContainer>
			</HeaderContainer>
		</>
	);
};
