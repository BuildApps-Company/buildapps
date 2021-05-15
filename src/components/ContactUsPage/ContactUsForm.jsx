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
			<label>
				<input
					type="text"
					name="name"
					value={inputValues.name}
					placeholder="Your name*"
					onChange={handleChange}
				/>
			</label>

			<label>
				<input
					type="text"
					name="number"
					value={inputValues.number}
					placeholder="Phone number*"
					onChange={handleChange}
				/>
			</label>

			<label>
				<input
					type="email"
					name="email"
					value={inputValues.email}
					placeholder="E-mail*"
					onChange={handleChange}
				/>
			</label>

			<select
				required
				name="typeOfWork"
				value={inputValues.typeOfWork}
				onChange={handleChange}
			>
				<option value="" disabled selected>
					Type of work
				</option>
				<option value="Business website">Business website</option>
				<option value="Landing page">Landing page</option>
				<option value="Test3">E-commerce</option>
			</select>

			<label>
				<input
					type="text"
					name="details"
					value={inputValues.details}
					placeholder="Details"
					onChange={handleChange}
				/>
			</label>

			<StyledBtn type="submit">
				Send<SpanStyledArrow>&rarr;</SpanStyledArrow>
			</StyledBtn>
		</StyledContactUsForm>
	);
};

const SpanStyledArrow = styled.span`
	color: #874aad;
	width: 24px;
	height: 8px;
	padding-left: 40px;
`;

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

		&:invalid {
			color: gray;
		}
	}
`;

const StyledBtn = styled.button`
	padding: 8px 30px;
	font-size: 2rem;
	line-height: 160%;
	text-transform: uppercase;
	color: #874aad;
	border: 2px solid #874aad;
	background: transparent;
	cursor: pointer;
	&:hover,
	&:focus {
		color: #ffffff;
		background: #874aad;

		${SpanStyledArrow} {
			color: #ffffff;
		}
	}
`;
