import React from 'react';
import Layout from '../components/layout';
import Preview from '../components/preview';
import ContactForm from '../components/contact-form';
import Portfolio from '../components/portfolio';

export default () => (
	<Layout>
		<Preview />
		<Portfolio />
		<ContactForm />
	</Layout>
);
