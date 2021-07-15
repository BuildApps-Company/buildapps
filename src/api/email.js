export const sendContactForm = message => {
	return fetch('https://api.buildapps.pro/.netlify/functions/server/mail', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			message: message,
		}),
	});
};
