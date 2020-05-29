import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Placeholder = styled.div`
	position: absolute;
	font-size: 1rem;
	bottom: 3px;
	top: -0.1rem;
	transition-property: all;
	transition-duration: 0.3s;
	position: absolute;
	color: ${theme.colors.gray};
	pointer-events: none;
`;

const TextField = styled.input`
	width: 100%;
	padding: 0;
	font-size: 1rem;
	background: transparent;
	border: none;
	bottom: 3px;
`;

const TextAreaField = styled.textarea`
	width: 100%;
	padding: 0;
	font-size: 1rem;
	background: transparent;
	border: none;
	bottom: 3px;
`;

const TextFieldContainer = styled.div`
	margin: 1rem 0;
	position: relative;
	flex: 1 0 auto;
	border-bottom: 1px solid ${theme.colors.black};

	&:focus-within ${Placeholder}, ${Placeholder}.fixed {
		display: block;
		font-size: 0.7rem;
		top: -1rem;
	}
`;

export default ({ placeholder, name, onChange, required, rows = 1 }) => {
	const [value, setValue] = useState('');
	useEffect(() => {
		onChange && typeof onChange === 'function' && onChange(value);
	}, [value, onChange]);

	return (
		<TextFieldContainer>
			<Placeholder className={value ? 'fixed' : null}>
				{placeholder}
			</Placeholder>
			{rows > 1 ? (
				<TextAreaField
					name={name}
					value={value}
					rows={rows}
					onChange={e => setValue(e.target.value)}
					required={required}
				/>
			) : (
				<TextField
					name={name}
					value={value}
					onChange={e => setValue(e.target.value)}
					required={required}
				/>
			)}
		</TextFieldContainer>
	);
};
