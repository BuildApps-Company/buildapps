import { routes } from '../utilities/routes';

const en = [
	{
		key: 'portfolio',
		title: 'Portfolio',
		href: routes.portfolio,
	},
	{
		key: 'prices',
		title: 'Prices and services',
		href: routes.prices,
	},
	{
		key: 'about',
		title: 'About us',
		href: routes.aboutUs,
	},
];

const ru = [
	{
		key: 'portfolio',
		title: 'Портфолио',
		href: routes.portfolio,
	},
	{
		key: 'prices',
		title: 'Цены и услуги',
		href: routes.prices,
	},
	{
		key: 'about',
		title: 'О нас',
		href: routes.aboutUs,
	},
];

const ua = [
	{
		key: 'portfolio',
		title: 'Портфоліо',
		href: routes.portfolio,
	},
	{
		key: 'prices',
		title: 'Ціни та послуги',
		href: routes.prices,
	},
	{
		key: 'about',
		title: 'Про нас',
		href: routes.aboutUs,
	},
];

export const ourTeamListData = { en, ru, ua };