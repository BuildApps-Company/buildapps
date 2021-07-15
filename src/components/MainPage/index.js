import React, { useMemo } from 'react';
import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';
import { MainBanner } from './Banner';
// import { Clients } from './Clients';
import { LatestProjectDesktop } from './LatestProjectDesktop';
import { LatestProjectMobile } from './LatestProjectMobile';
import { Portfolio } from '../../data/projects';
import { PreFooter } from './PreFooter';

export function MainPage() {
	const latestProjectsDesktop = useMemo(
		() => Object.values(Portfolio).slice(0, 4),
		[Portfolio]
	);
	const latestProjectsMobile = useMemo(
		() => Object.values(Portfolio).slice(0, 2),
		[Portfolio]
	);

	return (
		<>
			<MainBanner />
			{/* <Clients /> */}
			<LatestProjectDesktopContainer>
				<LatestProjectDesktop projectsDesktop={latestProjectsDesktop} />
			</LatestProjectDesktopContainer>
			<LatestProjectMobileContainer>
				<LatestProjectMobile projectsMobile={latestProjectsMobile} />
			</LatestProjectMobileContainer>
			<PreFooter />
		</>
	);
}

const LatestProjectDesktopContainer = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
	}
`;
const LatestProjectMobileContainer = styled.div`
	@media all and (min-width: ${breakpoints.tablet}) {
		display: none;
	}
`;
