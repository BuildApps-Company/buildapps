import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/Page';
import { Toolbar } from '../components/shared/Toolbar';
import {
	ContributorsList,
	ContactUsContainer,
} from '../components/AboutUsPage';
import { PreFooter } from '../components/MainPage/PreFooter';
import { SmallContainer } from '../styles/container';
import { breakpoints } from '../styles/breakpoints';

export default function AboutUsPage() {
	return (
		<Page pageName="About Us">
			<Toolbar />

			<StyledContainer>
				<AboutUsWrap>
					<TitleContainer>
						<SubTitle>Build apps - About us</SubTitle>
						<Title>About us</Title>
						<AboutPage>
							<p>
								The BuildApps company has been operating since 2019 and
								specializes in the development of web-projects that can solve
								and automate tasks for small and medium-sized businesses.
							</p>

							<p>
								Our most valuable resource is our team. We constantly invest in
								the training and development of our employees, and we do
								everything to make BuildApps not just an agency, but a lifestyle
								and way of thinking. Our experts have a deep understaning of the
								specifics of various solutions and software products: from the
								right website interface to modern technologies in online
								projects.
							</p>
							<p>
								We love what we do and do it perfectly well, enjoying every
								project. Our products always solve the task at hand and bring
								advantages and benefits to our customers.
							</p>
						</AboutPage>
					</TitleContainer>
					<ContributorsList />
				</AboutUsWrap>
				<ContactUsVerticalStretch>
					<ContactUsContainerWrap />
				</ContactUsVerticalStretch>
			</StyledContainer>
			<PreFooter />
		</Page>
	);
}
const ContactUsVerticalStretch = styled.div``;

const AboutUsWrap = styled.div`
	width: 100%;
	padding-right: 16px;
	@media all and (min-width: ${breakpoints.notebook}) {
		width: 65%;
	}
`;
const ContactUsContainerWrap = styled(ContactUsContainer)`
	position: sticky;
	top: 20px;
`;
const StyledContainer = styled(SmallContainer)`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: stretch;

	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
		justify-content: space-around;
	}
`;

const TitleContainer = styled.div`
	margin-bottom: 40px;
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
	margin: 0 0 8px 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 4rem;
	}
`;

const AboutPage = styled.p`
	font-size: 1rem;

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 1.5rem;
	}
`;
