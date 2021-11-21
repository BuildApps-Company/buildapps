import React from 'react';
import styled from 'styled-components';
import spbProperty from '../../../static/images/portfolio/spbProperty.jpg';
import spbLong from '../../../static/images/portfolio/spb_long.png';
import askod from '../../../static/images/portfolio/askod.jpg';
import sushi from '../../../static/images/portfolio/sushi.png';
import sushiLong from '../../../static/images/portfolio/sushi_long.png';
import ppf from '../../../static/images/portfolio/ppf.png';
import ppfLong from '../../../static/images/portfolio/ppf_long.png';
import { PpfDetailsEn } from './PpfDetails';
import { SushiDetailsEn } from './SushiDetails';
import { SpbPropertyEn } from './SpbProperty';
import { AskodDetailsEn } from './AskodDetails';

export const en = {
	ppf: {
		id: 'ppf',
		background:
			'linear-gradient(88deg, rgba(126, 124, 235, 0.5) 3.37%, rgba(87, 195, 255, 0.5) 96.63%);',
		image: ppf,
		longImage: ppfLong,
		title: () => <>Lead management software</>,
		pageTitle: 'Lead management software',
		description: `A CRM that covers most of the organization's processes related to business lending. A full cycle of processing an application - from the moment of an obtaining to the issuance of a loan.
Integration with third-party services to obtain more complete information about the loan - credit history, information from registries for legal entities or individuals.
`,
		responsibility: ['Web', 'Desktop'],
		fullDescription: `Due to the high competition in the lending market and the high demand for loans for business purposes, the speed and the quality of working with clients are much appreciated, and, last but not least, the automation of work with each application. This is where software in the form of CRM comes into play.`,
		pageContent: PpfDetailsEn,
	},
	sushi: {
		id: 'sushi',
		background:
			'linear-gradient(88deg, rgba(87, 195, 255, 0.5) 3.37%, rgba(255, 87, 188, 0.5) 96.63%);',
		image: sushi,
		longImage: sushiLong,
		title: () => (
			<>
				SUSHI <SpanSushi>SHOP</SpanSushi>
			</>
		),
		pageTitle: 'SUSHI SHOP',
		description: `Online service for ordering sushi. The SushiShop system automatically determines your geolocation for the nearest sushi store to make the delivery time more comfortable for the user. The system also provides a bonus program, an accumulative system and various discounts for different holidays or seasons.`,
		responsibility: ['Mobile'],
		fullDescription: `Today a mobile application for delivery is the most effective, least expensive, and relevant way to attract new customers, increase their level of loyalty, and receive real feedback. As well as increasing sales and profits.`,
		pageContent: SushiDetailsEn,
	},

	spbProperty: {
		id: 'spbProperty',
		background:
			'linear-gradient(88deg, rgba(255, 87, 188, 0.5) 3.37%, rgba(249, 202, 158, 0.5) 96.63%);',
		image: spbProperty,
		pageTitle: 'Petersburg real estate',
		longImage: spbLong,
		title: () => (
			<>
				Petersburg <SpanSpb>real estate</SpanSpb>
			</>
		),
		description: `Mobile client for finding an apartment in residential complex in St. Petersburg and Moscow. The system allows you to book apartments, make pre-orders and find apartments at competitive prices`,
		responsibility: ['Mobile'],
		fullDescription: `Hundreds of people regularly search for apartments, conclude lease agreements with realtors, buy new properties or sell old ones. The growing demand and the accelerated pace of life leave people with less and less time to personally solve such problems.
Who would be asked more often for help in these matters? To someone who can solve them not only qualitatively, but also faster than others. A real estate mobile app will give your business a competitive advantage.
AgentPN is a professional application only for real estate agencies - partners of Petersburg Real Estate. Search and booking of apartments in the largest database of new buildings in St. Petersburg and the Leningrad region. A login to the application is by a phone number.
Use your favorite work tool wherever you are. Conduct consultations remotely in a place convenient for the client. Access to apartments, mortgage calculator, apartment reservations, as well as a convenient database of your clients - in one application.`,
		pageContent: SpbPropertyEn,
	},
	askod: {
		id: 'askod',
		background:
			'linear-gradient(88deg, rgba(249, 202, 158, 0.5) 3.37%, rgba(243, 122, 122, 0.5) 96.63%);',
		image: askod,
		longImage: askod,
		title: () => (
			<>
				ASKOD <SpanAskodOnline>Online</SpanAskodOnline>
			</>
		),
		pageTitle: 'ASKOD Online',
		description: `ASKOD Online service a is designed to automate the processes of document circulation between legal entities and individuals and provides review, approval, signing, sending, receiving and storing documents in a cloud environment`,
		responsibility: ['Design'],
		fullDescription: `Askod is an online electronic document management system that allows you to organize work with electronic documents (creation, modification, search), as well as interaction between employees (transfer of documents, issuing tasks, sending notifications, etc.). Also, such a system is called EDMS (Electronic Document Management Systems).`,
		pageContent: AskodDetailsEn,
	},
};

const SpanAskodOnline = styled.span`
	color: #32c178;
`;
const SpanSpb = styled.span`
	color: #fd233c;
	display: block;
`;

const SpanSushi = styled.span`
	color: #f8d343;
`;

export const portfolio = { en };
