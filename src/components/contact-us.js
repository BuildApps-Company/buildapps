import React from 'react';
import { smoothScrollTo } from '../utils/url';
import { Menu } from '../data/menu';

export default ({ isOutline }) => (
	<button
		type="button"
		onClick={e => smoothScrollTo(e, Menu.contacts.key)}
		className={isOutline ? 'primary-outline' : 'primary'}
	>
		Contact Us
	</button>
);
