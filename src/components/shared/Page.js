import React from 'react';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';

export function Page({ children, pageName }) {
	return (
		<>
			<Helmet>
				<title>
					{pageName ? `${pageName} | ` : ''}Websites and mobile applications
					development agency | BuildApps
				</title>
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
