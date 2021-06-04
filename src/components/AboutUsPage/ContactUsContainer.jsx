import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { routes } from '../../utilities/routes';
import { email, address } from '../../data/contactUsListData';
import { breakpoints } from '../../styles/breakpoints';

export const ContactUsContainer = () => {
	return (
		<ContactUsWrap>
			<StyledAdress
				href={`http://maps.google.com/?q=${address}`}
				target="_blank"
			>
				{address}
			</StyledAdress>
			<StyledEmail href={`mailto:${email}`} target="_blank">
				{email}
			</StyledEmail>
			<ContactUsBtnWrap>
				<StyledLink to={routes.contactForm}>Contact us</StyledLink>
			</ContactUsBtnWrap>
		</ContactUsWrap>
	);
};

const ContactUsBtnWrap = styled.div`
	text-align: center;
`;

const ContactUsWrap = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
		margin-top: 36px;
		padding: 40px;
		height: fit-content;
		background: linear-gradient(88deg, #874aad 3.37%, #e19bb4 96.63%);
	}
`;

const StyledText = styled.a`
	display: block;
	margin: 0 0 28px 0;
	padding: 0;
	line-height: 160%;
	color: #ffffff;
	text-decoration: none;
	cursor: pointer;
`;

const StyledAdress = styled(StyledText)`
	font-size: 2rem;
`;

const StyledEmail = styled(StyledText)`
	font-size: 3.125rem;
`;

const StyledLink = styled(Link)`
	padding: 12px 32px;
	display: inline-block;
	font-size: 2rem;
	line-height: 160%;
	text-decoration: none;
	text-transform: uppercase;
	color: #874aad;
	background: #ffffff;
`;
