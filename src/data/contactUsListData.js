import { routes } from '../utilities/routes';

export const address = 'Kyiv, Ukraine';
export const email = 'sales@buildapps.pro';
export const tel = '+38 (050) 611 54 99';

export const contactUsListData = [
	{
		key: 'form',
		title: 'Contact form',
		href: routes.contactForm,
	},
	{
		key: 'address',
		title: `${address}`,
		href: `http://maps.google.com/?q=${address}`,
	},
	{
		key: 'email',
		title: `${email}`,
		href: `mailto:${email}`,
	},
];
