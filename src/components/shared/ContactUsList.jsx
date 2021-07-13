import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { ListTitleWithUnderline } from '../../styles/styled-headers';
import { contactUsListData } from '../../data/contactUsListData';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';

export const ContactUsList = () => {
	return (
		<div>
			<ContactFormContainer>
				<ListTitleWithUnderline>Contact Us</ListTitleWithUnderline>

				<ContuctUsListStyle>
					{contactUsListData.map(el => (
						<li key={el.key}>
							<StyledLink href={el.href} target="_blank">
								{el.title}
							</StyledLink>
						</li>
					))}
				</ContuctUsListStyle>
			</ContactFormContainer>
		</div>
	);
};

const ContactFormContainer = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
	}
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
	font-size: 1.2rem;
	color: inherit;
	opacity: 0.75;
	&:hover {
		opacity: 1;
	}
`;
