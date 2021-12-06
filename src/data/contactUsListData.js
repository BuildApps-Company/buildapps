import { routes } from '../utilities/routes';

const address = 'Kyiv, Ukraine';
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

export const contactUsListData = { en };