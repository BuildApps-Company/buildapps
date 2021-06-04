import React from 'react';
import Ticker from 'react-ticker';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';

const Marquee = () => {
	return (
		<MarqueeContainer>
			<Ticker speed={2}>
				{() => (
					<>
						<MarqueeStyled>BUILDAPPS </MarqueeStyled>
					</>
				)}
			</Ticker>
		</MarqueeContainer>
	);
};

export default Marquee;

const MarqueeStyled = styled.div`
	background-color: aliceblue;
	color: ${colors.grey.constants};
	border: none;
	text-transform: uppercase;
	background-color: ${colors.light.white};
	padding: 12px;
`;

const MarqueeContainer = styled.div`
	margin-top: 64px;
	@media all and (min-width: ${breakpoints.notebook}) {
		margin-top: 170px;
	}
`;
