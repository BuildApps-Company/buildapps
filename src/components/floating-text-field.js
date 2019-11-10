import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Placeholder = styled.div`
	position: absolute;
	font-size: 1rem;
	bottom: 3px;
	background-color: transparent;
	transition-property: bottom, font-size;
	transition-duration: 0.3s;
	color: ${theme.colors.gray};
`;

const TextField = styled.input`
	width: 100%;
	padding: 0;
	font-size: 1rem;
	position: absolute;
	bottom: 3px;
	background: transparent;
	border: none;
`;

const TextFieldContainer = styled.div`
	height: 50px;
	position: relative;
	flex: 1 0 auto;
	border-bottom: 1px solid ${theme.colors.black};

	&:focus-within ${Placeholder}, ${Placeholder}.fixed {
		display: block;
		font-size: 0.7rem;
		bottom: 24px;
	}
`;

export default ({ placeholder, id }) => {
	const [value, setValue] = useState(null);
	return (
		<TextFieldContainer>
			<Placeholder className={value ? 'fixed' : null}>
				{placeholder}
			</Placeholder>
			<TextField
				id={id}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</TextFieldContainer>
	);
};
