import React from 'react';
import styled from 'styled-components';
import logo from '../../static/images/logo.svg';
import logoModified from '../../static/images/logo_modified.svg';

const LogoContainer = styled.a`
	font-size: 1.8rem;
	font-weight: 700;
	color: rgba(0, 0, 0, 0.9);

	&:hover,
	&:active,
	&:focus {
		color: rgba(0, 0, 0, 0.9);
	}
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

export default () => (
	<LogoContainer href="/">
		<DefaultImage src={logo} alt="BuildApps" />
		<ModifiedImage src={logoModified} alt="BuildApps" />
	</LogoContainer>
);
