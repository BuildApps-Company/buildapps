import React from 'react';
import Layout from '../components/layout';
import Preview from '../components/preview';
import ContactForm from '../components/contact-form';
import Portfolio from '../components/portfolio';
import Services from '../components/services';
import Team from '../components/team';
import { Helmet } from 'react-helmet';

export default () => (
	<>
		<Helmet>
			<title>BuildApps | Software development agency | UI/UX Design</title>
			<meta
				name="description"
				content="We specialize in developing applications for various platforms and services. BuildApps creates mobile, websites, desktop applications using the of best approaches."
			/>
			<meta http-equiv="Content-Language" content="en"></meta>
		</Helmet>
		<Layout>
			<Preview />
			<Services />
			<Portfolio />
			<Team />
			<ContactForm />
		</Layout>
	</>
);
