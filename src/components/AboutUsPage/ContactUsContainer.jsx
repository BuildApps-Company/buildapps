import React from 'react';
import styled from 'styled-components';

export const ContactUsContainer = () => {
	return (
		<ContactUsWrap>
			<StyledAdress>Kyiv, Ukraine</StyledAdress>
			<StyledEmail>buildapps.pro@gmail.com</StyledEmail>
			<StyledBtn>Contact us</StyledBtn>
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

const StyledBtn = styled.button`
	padding: 12px 32px;
	border: none;
	font-size: 2rem;
	line-height: 160%;
	text-transform: uppercase;
	color: #874aad;
	background: #ffffff;
`;
