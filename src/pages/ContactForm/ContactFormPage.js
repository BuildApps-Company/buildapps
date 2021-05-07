import React from 'react';
import styled from 'styled-components';
import { Toolbar } from '../../components/shared/Toolbar';
import { ContactUsForm, Contacts } from '../../components/ContactUsPage';
import { Footer } from '../../components/shared/Footer';
import { breakpoints } from '../../styles/breakpoints';

export default function ContactFormPage() {
	return (
		<>
			<Toolbar />

			<StyledPageContainer>
				<SubTitle>Build apps - Contact form</SubTitle>

				<Title>Contact form</Title>

				<FlexContainer>
					<ContactUsForm />

					<Contacts />
				</FlexContainer>
			</StyledPageContainer>
		</>
	);
}

const StyledPageContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 120px;
	padding-left: 16px;
	padding-right: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 215px;
		padding-right: 64px;
	}
`;

const SubTitle = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 0.75rem;
	line-height: 160%;
	opacity: 0.75;
	text-transform: uppercase;
`;

const Title = styled.h1`
	margin: 0 0 40px 0;
	padding: 0;
	font-size: 4rem;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 4rem;
	}
`;

const FlexContainer = styled.div`
	display: flex;
`;
