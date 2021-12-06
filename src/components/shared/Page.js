import React from 'react';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';

export function Page({ children, pageName }) {
	return (
		<>
			<Helmet>
				<title>
					{pageName ? `${pageName} | ` : ''}Website and Mobile Application
					Development Agency | BuildApps
				</title>
				<meta
					name="description"
					content="Software development agency that deals with website creation, mobile application creation, ui/ux design, ios/android multiplatform application development, e-commerce website and application development."
				/>
				<meta http-equiv="Content-Language" content="en"></meta>
			</Helmet>
			{children}
			<Footer />
		</>
	);
}
