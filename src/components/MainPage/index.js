import React, { useMemo } from 'react';
import { MainBanner } from './Banner';
import { Clients } from './Clients';
import { clients } from '../../data/clients';
import { LatestProjects } from './LatestProjects';
import { Portfolio } from '../../data/projects';
import { PreFooter } from './PreFooter';

export function MainPage() {
	const latestProjects = useMemo(
		() => Object.values(Portfolio).slice(0, 4),
		[]
	);

	return (
		<>
			<MainBanner />
			<Clients clients={clients} />
			<LatestProjects projects={latestProjects} />
			<PreFooter />
		</>
	);
}
