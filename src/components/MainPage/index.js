import React, { useMemo } from 'react';
import { MainBanner } from './Banner';
import { Clients } from './Clients';
import { LatestProjects } from './LatestProjects';
import { Portfolio } from '../../data/projects';
import { PreFooter } from './PreFooter';

export function MainPage() {
	const latestProjects = useMemo(() => Object.values(Portfolio).slice(0, 4), [
		Portfolio,
	]);

	return (
		<>
			<MainBanner />
			<Clients />
			<LatestProjects projects={latestProjects} />
			<PreFooter />
		</>
	);
}
