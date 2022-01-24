import React, { useMemo, useEffect } from 'react';
import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';
import { MainBanner } from './Banner';
import { LatestProjectDesktop } from './LatestProjectDesktop';
import { LatestProjectMobile } from './LatestProjectMobile';
import { OurServices } from './OurServices';
import { PreFooter } from './PreFooter';
import { usePortfolio, useServices } from '../../data';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function MainPage() {
	const projects = usePortfolio();
  const services = useServices();

	const latestProjectsDesktop = useMemo(
		() => Object.values(projects).slice(0, 6),
		[projects]
	);

	const latestProjectsMobile = useMemo(
		() => Object.values(projects).slice(0, 2),
		[projects]
	);

  const ourServices = useMemo(
		() => Object.values(services),[services]
	);
  console.log(ourServices);

  useEffect(() => {
    Aos.init({});
	}, []);

	return (
		<>
			<MainBanner />
			<LatestProjectDesktopContainer>
				<LatestProjectDesktop projectsDesktop = { latestProjectsDesktop } />
			</LatestProjectDesktopContainer>
			<LatestProjectMobileContainer>
				<LatestProjectMobile projectsMobile = { latestProjectsMobile } />
			</LatestProjectMobileContainer>
      <OurServices services = { ourServices } />
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
