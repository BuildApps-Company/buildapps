import React from 'react';
import Header from './header';

export default ({ children }) => (
	<>
		<link href="https://fonts.googleapis.com/css?family=Muli:400,700&display=swap" rel="stylesheet"></link>
		<Header />
		{children}
	</>
);
