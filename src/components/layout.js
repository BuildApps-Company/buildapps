import React from 'react';
import styled from 'styled-components';
import { Header } from "./header";
import { Footer } from "./footer";
import { breakpoints } from '../data/breakpoints';
import logo from '../../static/images/logo.svg';
import burger from '../../static/images/burger.svg';

export function Layout({ children }) {
	return (
		<>
			<Header>
                <Logo src={logo} />
				<Burger src={burger} />
            </Header>
			{children}
			<Footer />
		</>
	);
}

const Logo = styled.img`
    padding-left: 2rem;
	width: 12rem;
	height: 7rem;
    float: left;
	@media all and (max-width: ${breakpoints.phone}) {
		width: 8rem;
        height: 4rem;
        padding-top: 1rem;
	}
`;

const Burger = styled.img`
    padding-top: 2rem;
    padding-right: 2rem;
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