import React from 'react';
import styled from 'styled-components';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { Link } from 'gatsby-plugin-react-i18next';
import { useContactInformation } from '../../data';
import { useTranslation } from 'react-i18next';



export const ContactUsContainer = ({ ...rest }) => {
	const contactInformation = useContactInformation();
  const { t } = useTranslation();

	return (
		<ContactUsWrap {...rest}>
			<StyledAdress
				href={`http://maps.google.com/?q=${contactInformation.address}`}
				target="_blank"
			>
				{contactInformation.address}
			</StyledAdress>
			<StyledEmail href={`mailto:${contactInformation.email}`} target="_blank">
				{contactInformation.email}
			</StyledEmail>
			<ContactUsBtnWrap>
				<StyledLink to={routes.contactForm}>{t('contactUs.contactWrapLink')}</StyledLink>
			</ContactUsBtnWrap>
		</ContactUsWrap>
	);
};

const ContactUsBtnWrap = styled.div`
	display: flex;
	text-align: center;
	margin-top: 24px;
`;

const ContactUsWrap = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
		border-radius: 8px;
		margin-top: 36px;
		padding: 40px;
		padding-right: 60px;
		height: fit-content;
		background: linear-gradient(88deg, #874aad 3.37%, #e19bb4 96.63%);
	}
`;

const StyledText = styled.a`
	display: block;
	padding: 0;
	line-height: 160%;
	color: #ffffff;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

const StyledAdress = styled(StyledText)`
	font-size: 1.5rem;
`;

const StyledEmail = styled(StyledText)`
	font-size: 2rem;
`;

const StyledLink = styled(Link)`
	padding: 12px 32px;
	opacity: 1;
	display: flex;
	align-items: center;
	border-radius: 4px;
	font-size: 1.5rem;
	line-height: 160%;
	font-weight: 600;
	text-decoration: none;
	text-transform: uppercase;
	color: #874aad;
	background: #ffffff;
	&:hover {
		opacity: 0.85;
		transition: 1s;
	}
`;
