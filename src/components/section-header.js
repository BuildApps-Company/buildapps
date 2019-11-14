import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Divider = styled.h1`
	background-color: ${theme.colors.lightGray};
	width: ${theme.divederWidthPercent}%;
	height: 1px;
	margin: 0 auto 0 auto;
	margin-bottom: 64px;
`;

const SmallDescription = styled.h1`
	color: ${theme.colors.black};
	font-size: 3rem;
	text-align: center;
	text-transform: uppercase;
	font-weight: 400;
	margin: 0 0 2%;
`;

const LargeDescription = styled.h2`
	color: ${theme.colors.black};
	font-size: 2rem;
	margin: 0 0 44px;
	padding: 0;
	text-align: center;
	font-weight: 400;
`;

export default ({ smallDescription, largeDescription }) => (
	<>
		<SmallDescription>{smallDescription}</SmallDescription>
		<LargeDescription>{largeDescription}</LargeDescription>
		<Divider />
	</>
);
