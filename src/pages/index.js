import React from 'react';
import Layout from '../components/layout';
import Preview from '../components/preview';
import ContactForm from '../components/contact-form';
import Portfolio from '../components/portfolio';
import { Helmet } from 'react-helmet';

export default () => (
	<>
		<Helmet>
			<title>Build Apps</title>
		</Helmet>
		<Layout>
			<Preview />
			<Portfolio />
			<ContactForm />
		</Layout>
	</>
);
