import React from 'react';
import styled from 'styled-components';
import logo from '../../../static/images/logo_white.png';
import burger from '../../../static/images/burger.svg';
import { breakpoints } from '../../styles/breakpoints';

export function Toolbar() {
	return (
		<StyledHeader>
			<Logo src={logo} />
			<Burger src={burger} />
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	width: 100%;
	height: 5rem;
	z-index: 1;
`;

const Logo = styled.img`
	margin: 10px 0 0 50px;

	@media all and (max-width: ${breakpoints.phone}) {
		height: 4rem;
		margin-top: 1rem;
	}
`;

const Burger = styled.img`
	padding-top: 1.5rem;
	padding-right: 2.5rem;
	width: 5rem;
	heigth: 5rem;
	float: right;
	@media all and (max-width: ${breakpoints.phone}) {
		width: 3.5rem;
		heigth: 3.5rem;
		padding-top: 1.5rem;
		padding-right: 1.5rem;
	}
`;
