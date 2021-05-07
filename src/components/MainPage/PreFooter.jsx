import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';

export const PreFooter = () => {
	return (
		<Container>
			<FlexWrap>
				<StyledText>Ready to get started?</StyledText>
				<StyledLink to={routes.contactForm}>Contact Us</StyledLink>
			</FlexWrap>
		</Container>
	);
};

const Container = styled.div`
	margin-top: 90px;
	padding: 40px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.grey.background};

	@media all and (min-width: ${breakpoints.phone}) {
		margin-top: 200px;
		padding: 64px 0;
	}
`;

const FlexWrap = styled.div`
	display: flex;
`;

const StyledText = styled.h3`
	margin: 0 10px 0 0;
	padding: 0;
	font-size: 1.25rem;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 2rem;
	}
`;

const StyledLink = styled(Link)`
	font-size: 1.25rem;
	line-height: 160%;
	text-decoration: none;
	border-bottom: 3px solid #874aad;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 2rem;
	}
`;
