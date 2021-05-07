import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { routes } from '../../utilities/routes';

export const ContactUsContainer = () => {
	return (
		<ContactUsWrap>
			<StyledAdress>Kyiv, Ukraine</StyledAdress>
			<StyledEmail>buildapps.pro@gmail.com</StyledEmail>
			<StyledLink to={routes.contactForm}>Contact us</StyledLink>
		</ContactUsWrap>
	);
};

const ContactUsWrap = styled.div`
	padding: 40px;
	height: fit-content;
	background: linear-gradient(88deg, #874aad 3.37%, #e19bb4 96.63%);
`;

const StyledText = styled.p`
	margin: 0 0 32px 0;
	padding: 0;
	line-height: 160%;
	color: #ffffff;
`;

const StyledAdress = styled(StyledText)`
	font-size: 2rem;
`;

const StyledEmail = styled(StyledText)`
	font-size: 3.125rem;
`;

const StyledLink = styled(Link)`
	padding: 12px 32px;
	font-size: 2rem;
	line-height: 160%;
	text-decoration: none;
	text-transform: uppercase;
	color: #874aad;
	background: #ffffff;
`;
