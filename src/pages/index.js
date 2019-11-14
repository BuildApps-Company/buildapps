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
			<title>Build Apps</title>
			<meta
				name="description"
				content="We are strong development team with more than 4 years of commercial experience and more than 5 years of freelance experience in developing various applications. We are here to make your ideas a reality."
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
