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

const SmallDescription = styled.div`
	color: ${theme.colors.black};
	font-size: 3rem;
	text-align: center;
	text-transform: uppercase;
	margin: 0 0 2% 0;
`;

const LargeDescription = styled.div`
	color: ${theme.colors.black};
	font-size: 2rem;
	margin-bottom: 64px;
	text-align: center;
`;

export default ({ smallDescription, largeDescription }) => (
	<>
		<SmallDescription>{smallDescription}</SmallDescription>
		<LargeDescription>{largeDescription}</LargeDescription>
		<Divider />
	</>
);
