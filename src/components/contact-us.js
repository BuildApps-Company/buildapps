import React from 'react';

export default ({ isOutline }) => (
	<a href="mailto:sales@buildapps.pro">
		<button type="button" className={isOutline ? 'primary-outline' : 'primary'}>
			Contact Us
		</button>
	</a>
);
