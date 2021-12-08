import { routes } from '../utilities/routes';

const address = 'Kyiv, Ukraine';
const addressRu = 'Киев, Украина';
const addressUa = 'Київ, Україна';
const email = 'sales@buildapps.pro';
const phone = '+38 (050) 611 54 99';

const en = {
	address,
	email,
	phone,
	list:
		[
			{
				key: 'form',
				title: 'Contact form',
				href: routes.contactForm,
			},
			{
				key: 'address',
				title: address,
				href: `http://maps.google.com/?q=${address}`,
			},
			{
				key: 'email',
				title: email,
				href: `mailto:${email}`,
			},
		]
};

const ru = {
	addressRu,
	email,
	phone,
	list:
		[
			{
				key: 'form',
				title: 'Форма связи',
				href: routes.contactForm,
			},
			{
				key: 'address',
				title: addressRu,
				href: `http://maps.google.com/?q=${address}`,
			},
			{
				key: 'email',
				title: email,
				href: `mailto:${email}`,
			},
		]
};

const ua = {
	addressUa,
	email,
	phone,
	list:
		[
			{
				key: 'form',
				title: `Форма зв'язку`,
				href: routes.contactForm,
			},
			{
				key: 'address',
				title: addressUa,
				href: `http://maps.google.com/?q=${address}`,
			},
			{
				key: 'email',
				title: email,
				href: `mailto:${email}`,
			},
		]
};

export const contactUsListData = { en, ru, ua };