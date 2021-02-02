import React from 'react';
import { Helmet } from 'react-helmet';
import  MainPage  from './MainPage/MainPage';
import { Layout } from '../components/layout';

export default () => (
	<Layout>
		<Helmet>
			<title>BuildApps | Software development agency | UI/UX Design</title>
			<meta
				name="description"
				content="We specialize in developing applications for various platforms and services. BuildApps creates mobile, websites, desktop applications using the of best approaches."
			/>
			<meta http-equiv="Content-Language" content="en"></meta>
		</Helmet>
		<MainPage />
	</Layout>
);
