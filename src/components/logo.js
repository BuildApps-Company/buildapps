import React from 'react';
import styled from 'styled-components';
import logo from '../../static/images/logo.svg';
import logoModified from '../../static/images/logo_modified.svg';
import { smoothScrollTo } from '../utils/url';
import { Menu } from '../data/menu';

const LogoContainer = styled.a`
	width: 108px;
	display: inline-block;

	&:hover img:first-of-type {
		display: none;
	}
	&:hover img:last-of-type {
		display: block;
	}
`;

const DefaultImage = styled.img`
	display: block;
`;

const ModifiedImage = styled.img`
	display: none;
`;

export default ({ ...rest }) => (
	<LogoContainer
		{...rest}
		href="#about"
		onClick={e => smoothScrollTo(e, Menu.about.key)}
	>
		<DefaultImage src={logo} alt="BuildApps" />
		<ModifiedImage src={logoModified} alt="BuildApps ^" />
	</LogoContainer>
);
