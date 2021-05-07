import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export const ContactUsForm = () => {
	const [isActive, setIsActive] = useState(true);
	const [inputValues, setInputValues] = useState({
		name: '',
		number: '',
		email: '',
		typeOfWork: '',
		details: '',
	});

	const handleChange = useCallback(
		({ target }) => {
			setInputValues({ ...inputValues, [target.name]: target.value });
		},

		[inputValues]
	);

	const handleSubmit = useCallback(
		e => {
			e.preventDefault();

			console.log(inputValues);

			setInputValues({
				name: '',
				number: '',
				email: '',
				typeOfWork: '',
				details: '',
			});
		},
		[inputValues]
	);

	return (
		<StyledContactUsForm autoComplete="off" onSubmit={handleSubmit}>
			<FloatLabel>
				<label>Your name*</label>
				<input
					type="text"
					name="name"
					value={inputValues.name}
					onChange={handleChange}
				/>
			</FloatLabel>

			<FloatLabel>
				<label>Phone number*</label>
				<input
					type="text"
					name="number"
					value={inputValues.number}
					onChange={handleChange}
				/>
			</FloatLabel>

			<FloatLabel>
				<label>E-mail*</label>
				<input
					type="email"
					name="email"
					value={inputValues.email}
					onChange={handleChange}
				/>
			</FloatLabel>

			<FloatLabel>
				<label>Type of work</label>
				<select
					name="typeOfWork"
					value={inputValues.typeOfWork}
					onChange={handleChange}
				>
					<option value="" disabled></option>
					<option value="Test">Test1</option>
					<option value="Test2">Test2</option>
					<option value="Test3">Test3</option>
					<option value="Test4">Test4</option>
				</select>
			</FloatLabel>

			<FloatLabel>
				<label>Details</label>
				<input
					type="text"
					name="details"
					value={inputValues.details}
					onChange={handleChange}
				/>
			</FloatLabel>

			<StyledBtn type="submit">Send</StyledBtn>
		</StyledContactUsForm>
	);
};

const StyledContactUsForm = styled.form`
	width: 60%;

	input {
		width: 90%;
		margin-bottom: 40px;
		padding: 8px;
		font-size: 2rem;
		line-height: 160%;
		border: none;
		border-bottom: 2px solid #110322;
	}

	select {
		width: 90%;
		margin-bottom: 40px;
		padding: 8px;
		font-size: 2rem;
		line-height: 160%;
		border: none;
		border-bottom: 2px solid #110322;
		background: transparent;
	}
`;

const StyledBtn = styled.button`
	padding: 8px 32px;
	font-size: 2rem;
	line-height: 160%;
	text-transform: uppercase;
	color: #874aad;
	border: 1px solid #874aad;
	background: transparent;
`;

const FloatLabel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 350px;

	&:focus-within label {
		transform: translate(0, -30%) scale(0.5);
	}

	label {
		position: absolute;
		font-size: 2rem;
		line-height: 160%;
		opacity: 0.5;
		transform: translate(1%, 15%) scale(1);
		transform-origin: top left;
		transition: all 0.2s ease-out;
		pointer-events: none;
	}
`;
