import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Toolbar } from '../../components/shared/Toolbar';
import { PreFooter } from '../../components/MainPage/PreFooter';
import { Footer } from '../../components/shared/Footer';
import { breakpoints } from '../../styles/breakpoints';

export default function PortfolioDetailsPage({ location }) {
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', setWidth(window.innerWidth));
	}, []);

	return (
		<>
			<Toolbar />

			{width > 450 && (
				<StyledLink to="/Portfolio/PortfolioPage">
					GO back to portfolio
				</StyledLink>
			)}

			<ProjectImageContainer>
				<ImageWrap>
					<img
						src={location?.state?.project?.longImage}
						alt={location?.state?.project?.title}
					/>
				</ImageWrap>
			</ProjectImageContainer>

			<ProjectDetailsContainer>
				<Title>{location?.state?.project?.title}</Title>

				<StyledResponsibility>
					{location?.state?.project?.responsibility}
				</StyledResponsibility>

				<StyledDescription>
					{location?.state?.project?.description}
				</StyledDescription>
			</ProjectDetailsContainer>

			<PreFooter />
		</>
	);
}

const StyledLink = styled(Link)`
	margin: 0;
	padding: 0 0 0 215px;
	font-size: 0.75rem;
	line-height: 160%;
	opacity: 0.75;
	text-decoration: none;
	text-transform: uppercase;
	color: #874aad;
`;

const ProjectImageContainer = styled.div`
	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 516px;
		padding-right: 516px;
	}
`;

const ImageWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 32px;
	padding: 30px 100px;
	min-height: 215px;
	background: linear-gradient(88deg, #cfd9df 3.37%, #e2ebf0 96.63%);

	@media all and (min-width: ${breakpoints.phone}) {
		min-height: 325px;
	}

	img {
		max-width: 150px;
		max-height: 130px;
	}
`;

const Title = styled.h1`
	margin: 0 0 8px 0;
	padding: 0;
	font-size: 3rem;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 4rem;
	}
`;

const StyledResponsibility = styled.p`
	margin: 0 0 16px 0;
	padding: 0;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	opacity: 0.75;
`;

const StyledDescription = styled.p`
	margin: 0;
	padding: 0;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.phone}) {
		max-width: 900px;
		font-size: 1.5rem;
	}
`;

const ProjectDetailsContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 24px;
	padding-left: 16px;
	padding-right: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 516px;
		padding-right: 516px;
		margin-bottom: 48px;
	}
`;