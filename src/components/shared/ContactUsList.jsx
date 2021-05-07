import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { ListTitleWithUnderline } from '../../styles/styled-headers';
import { contactUsListData } from '../../data/contactUsListData';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { routes } from '../../utilities/routes';

export const ContactUsList = () => {
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', setWidth(window.innerWidth));
	}, []);

	return (
		<div>
			{width <= 450 && (
				<StyledLinkTitle to={routes.contactForm}>Contact Us</StyledLinkTitle>
			)}

			{width > 450 && (
				<>
					<ListTitleWithUnderline>Contact Us</ListTitleWithUnderline>

					<ContuctUsListStyle>
						{contactUsListData.map(el => (
							<li key={el.key}>
								<StyledLink href={el.href}>{el.title}</StyledLink>
							</li>
						))}
					</ContuctUsListStyle>
				</>
			)}
		</div>
	);
};

const StyledLinkTitle = styled(Link)`
	display: block;
	margin: 0;
	padding: 0 0 16px 0;
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	text-decoration: none;
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	color: ${colors.light.white};
`;

const ContuctUsListStyle = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	font-size: 1.25rem;
	line-height: 160%;

	li {
		color: ${colors.light.white};
	}

	li:not(:last-child) {
		margin-bottom: 16px;
	}

	li:not(:first-child) {
		color: rgba(255, 255, 255, 0.5);
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;
