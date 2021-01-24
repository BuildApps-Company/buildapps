import React from 'react';
import Layout from '../components/layout';
import Preview from '../components/preview';
import ContactForm from '../components/contact-form';
import Portfolio from '../components/portfolio';
import Services from '../components/services';
import { Helmet } from 'react-helmet';
// import Team from '../components/team';


export default () => (
	<>
		<Helmet>
			<title>BuildApps | Software development agency | UI/UX Design</title>
			<meta
				name="description"
				content="We specialize in developing applications for various platforms and services. BuildApps creates mobile, websites, desktop applications using the of best approaches."

			/>
			<meta http-equiv="Content-Language" content="en"></meta>
			<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
		</Helmet>
		<Layout>
			<Preview />
			<Services />
			<Portfolio />
			{/* <Team /> */}
			<ContactForm />
		</Layout>
	</>
);
