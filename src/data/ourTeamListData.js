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
	{
		key: 'hiring',
		title: 'Hiring',
		href: routes.hiring,
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
	{
		key: 'hiring',
		title: 'Вакансии',
		href: routes.hiring,
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
  {
		key: 'hiring',
		title: 'Вакансії',
		href: routes.hiring,
	},
];

export const ourTeamListData = { en, ru, ua };
