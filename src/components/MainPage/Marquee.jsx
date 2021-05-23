import React from 'react';
import Ticker from 'react-ticker';
import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

const Marquee = () => {
	return (
		<MarqueeContainer>
			<Ticker>
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
	margin-top: 170px;
`;
