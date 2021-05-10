import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Toolbar } from '../../components/shared/Toolbar';
import {
	ContributorsList,
	ContactUsContainer,
} from '../../components/AboutUsPage';
import { PreFooter } from '../../components/MainPage/PreFooter';
import { SmallContainer } from '../../styles/container';
import { breakpoints } from '../../styles/breakpoints';

export default function AboutUsPage() {
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', setWidth(window.innerWidth));
	}, []);

	return (
		<>
			<Toolbar />

			<StyledContainer>
				<div>
					<TitleContainer>
						<SubTitle>Build apps - About us</SubTitle>

						<Title>About us</Title>

						<AboutPage>
							Tempor tempus purus ipsum blandit est elit condimentum. Pulvinar
							molestie neque, sit amet tortor vel tortor hac. Pulvinar arcu eu
							porttitor ut orci blandit tortor interdum et. Quam lectus dolor at
							elementum lectus vivamus.
						</AboutPage>
					</TitleContainer>

					<ContributorsList />
				</div>

				{width > 450 && <ContactUsContainer />}
			</StyledContainer>

			<PreFooter />
		</>
	);
}

const StyledContainer = styled(SmallContainer)`
	display: flex;
`;

const TitleContainer = styled.div`
	margin-bottom: 40px;

	@media all and (min-width: ${breakpoints.phone}) {
		margin-bottom: 100px;
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
	margin: 0 0 8px 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 4rem;
	}
`;

const AboutPage = styled.p`
	margin: 0;
	padding: 0;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.phone}) {
		max-width: 900px;
		font-size: 1.5rem;
	}
`;
