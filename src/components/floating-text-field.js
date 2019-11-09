import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const TextField = styled.input`
	width: 100%;
	padding: 0 0 0 0;
	font-size: 16px;
	position: absolute;
	bottom: 3px;
	background-color: transparent;
	border: 1px solid transparent;
`;

const TextFieldContainer = styled.div`
    height: 50px;
    position: relative;
	width: 100%;
    background-color: transparent;
	border-bottom: 1px solid #555;
    &:focus-within { div:first-of-type {
		font-size: 11px;
		bottom: 30px !important;
	}
`;

const TextPlaceholder = styled.div`
	position: absolute;
	font-size: 16px;
	bottom: 3px;
	background-color: transparent;
	transition-property: bottom, font-size;
	transition-duration: 0.3s;
	color: ${theme.colors.gray};
`;

export default ({ placeholder, id }) => {
	return (
		<TextFieldContainer>
			<TextPlaceholder>{placeholder}</TextPlaceholder>
			<TextField id={id} />
		</TextFieldContainer>
	);
};
