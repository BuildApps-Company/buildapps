import React, { useState } from 'react';
import Ticker from 'react-ticker';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import PageVisibility from 'react-page-visibility';

const Marquee = () => {
	const [pageIsVisible, setPageIsVisible] = useState(true);

	const handleVisibilityChange = isVisible => {
		setPageIsVisible(isVisible);
	};

	return (
		<MarqueeContainer>
			<PageVisibility onChange={handleVisibilityChange}>
				{pageIsVisible && (
					<Ticker speed={3}>
						{({ index }) => (
							<>
								<MarqueeStyled>BUILDAPPS </MarqueeStyled>
							</>
						)}
					</Ticker>
				)}
			</PageVisibility>
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
	white-space: nowrap;
`;

const MarqueeContainer = styled.div`
	white-space: nowrap;
	@media all and (min-width: ${breakpoints.notebook}) {
	}
`;
