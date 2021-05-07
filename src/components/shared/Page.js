import React from 'react';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';

export function Page({ children }) {
	return (
		<>
			<Helmet>
				<title>BuildApps | Software development agency | UI/UX Design</title>
				<meta
					name="description"
					content="We specialize in developing applications for various platforms and services. BuildApps creates mobile, websites, desktop applications using the of best approaches."
				/>
				<meta http-equiv="Content-Language" content="en"></meta>
			</Helmet>
			{children}
			<Footer />
		</>
	);
}
