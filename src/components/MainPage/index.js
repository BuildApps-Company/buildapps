import React, { useMemo } from 'react';
import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';
import { MainBanner } from './Banner';
import { LatestProjectDesktop } from './LatestProjectDesktop';
import { LatestProjectMobile } from './LatestProjectMobile';
import { PreFooter } from './PreFooter';
import { usePortfolio } from '../../data';

export function MainPage() {
	const projects = usePortfolio();

	const latestProjectsDesktop = useMemo(
		() => Object.values(projects).slice(0, 4),
		[projects]
	);

	const latestProjectsMobile = useMemo(
		() => Object.values(projects).slice(0, 2),
		[projects]
	);

	return (
		<>
			<MainBanner />
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
