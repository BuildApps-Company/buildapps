import * as React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { PrimaryButtonOutline } from '../../styles/buttons';
import { colors } from '../../styles/colors';
import { H3 } from '../../styles/styled-headers';

export const PreFooter = () => {
	return (
		<Container>
			<Content>
				Ready to get started? <ContactUs>Contact Us</ContactUs>
			</Content>
		</Container>
	);
};

const Container = styled.div`
	margin-top: 90px;
	display: flex;
	height: 179px;
	justify-content: center;
	align-items: center;
	background: ${colors.grey.background};

	@media all and (min-width: ${breakpoints.phone}) {
		margin-top: 200px;
	}
`;

const Content = styled(H3)``;

const ContactUs = styled(PrimaryButtonOutline)`
	font-size: 2rem;
	font-weight: 400;
	line-height: 100%;
	border-width: 3px;
	&,
	&:hover,
	&:active,
	&:focus {
		color: ${colors.Font};
	}
`;
