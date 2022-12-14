import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { sendContactForm } from '../../api/email.js';
import { useTranslation } from 'react-i18next';

export const ContactUsForm = () => {
	const { t } = useTranslation();

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
			const message = `From contact us form:\nName: ${inputValues.name}\nNumber: ${inputValues.number}\nEmail: ${inputValues.email}\nType of work: ${inputValues.typeOfWork}\nDetails: ${inputValues.details} `;

			sendContactForm(message).then(response => {
				if (response.status === 200) {
					setInputValues({
						name: '',
						number: '',
						email: '',
						typeOfWork: '',
						details: '',
					});
				}
			});
		},
		[inputValues]
	);

	return (
		<StyledContactUsForm autoComplete="off" onSubmit={handleSubmit}>
			<label>
				<input
					required
					type="text"
					name="name"
					value={inputValues.name}
					placeholder={t('contactUs.placeholderName')}
					onChange={handleChange}
				/>
			</label>

			<label>
				<input
					required
					type="text"
					name="number"
					value={inputValues.number}
					placeholder={t('contactUs.placeholderPhone')}
					onChange={handleChange}
				/>
			</label>

			<label>
				<input
					type="email"
					name="email"
					value={inputValues.email}
					placeholder={t('contactUs.placeholderMail')}
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
					{t('contactUs.placeholderWorkType')}
				</option>
				<option value="Business website">{t('contactUs.workType1')}</option>
				<option value="Landing page">{t('contactUs.workType2')}</option>
				<option value="E-commerce">{t('contactUs.workType3')}</option>
				<option value="Mobile application">{t('contactUs.workType4')}</option>
			</select>

			<label>
				<input
					type="text"
					name="details"
					value={inputValues.details}
					placeholder={t('contactUs.placeholderDetails')}
					onChange={handleChange}
				/>
			</label>
			<BtnWrap>
				<StyledBtn type="submit">
					{t('contactUs.submitBtn')}<SpanStyledArrow>&rarr;</SpanStyledArrow>
				</StyledBtn>
			</BtnWrap>
		</StyledContactUsForm>
	);
};

const BtnWrap = styled.div`
	text-align: end;
	@media all and (min-width: ${breakpoints.notebook}) {
		text-align: start;
	}
`;

const SpanStyledArrow = styled.span`
	color: #874aad;
	width: 24px;
	height: 8px;
	padding-left: 14px;
`;

const StyledContactUsForm = styled.form`
	display: block;

	input {
		width: 100%;
		margin-bottom: 32px;
		padding: 8px 0;
		color: #874aad;
		font-size: 1rem;
		font-weight: bold;
		line-height: 160%;
		border: none;
		border-bottom: 2px solid #99939f;
		opacity: 1;

		&:focus {
			border-bottom: 2px solid #874aad;
		}
	}

	select {
		width: 100%;
		margin-bottom: 32px;
		padding: 8px 0;
		font-size: 1rem;
		font-weight: bold;
		color: #874aad;
		line-height: 160%;
		border: none;
		border-bottom: 2px solid #99939f;
		background: transparent;
		opacity: 1;

		&:invalid {
			color: gray;
		}
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		width: 100%;
		font-size: 2rem;
	}
	@media all and (min-width: 1480px) {
		width: 100%;
	}
`;

const StyledBtn = styled.button`
	box-sizing: border-box;
	padding: 8px 24px;
	font-size: 0.75rem;
	font-weight: bold;
	line-height: 160%;
	text-transform: uppercase;
	color: #874aad;
	border: 2px solid #874aad;
	border-radius: 4px;
	background: transparent;
	cursor: pointer;
	&:hover,
	&:focus {
		color: #ffffff;
		background: #874aad;
		opacity: 0.5;

		${SpanStyledArrow} {
			color: #ffffff;
		}
	}
	@media all and (min-width: 1480px) {
		font-size: 1rem;
	}
`;
