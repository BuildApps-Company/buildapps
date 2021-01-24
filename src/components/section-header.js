import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Divider = styled.div`
	background-color: ${theme.colors.lightGray};
	width: ${theme.divederWidthPercent}%;
	height: 1px;
	margin: 0 auto 0 auto;
	margin-bottom: 64px;
`;

const SmallDescription = styled.h2`
	color: ${theme.colors.black};
	font-size: 3rem;
	text-align: center;
	text-transform: uppercase;
	font-weight: 400;
	margin: 0 0 2rem;
	padding: ${theme.slideBottomMarginRem}rem 0 0;
`;

const LargeDescription = styled.div`
	color: inherit;
	font-size: 2rem;
	margin: 0 0 44px;
	padding: 0;
	text-align: center;
	font-weight: 400;
	margin: 2rem 0 0;
	text-transform: none;
`;

export default ({ smallDescription, largeDescription, ...rest }) => (
	<>
		<SmallDescription {...rest}>
			{smallDescription}
			<LargeDescription>{largeDescription}</LargeDescription>
		</SmallDescription>
		<Divider />
	</>
);
