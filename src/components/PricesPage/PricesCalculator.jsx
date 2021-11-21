import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { sendContactForm } from '../../api/email.js';
import { useCalculationOptionsData } from '../../data';

const initPriceValues = {
	planning: 0,
	design: 0,
	development: 0,
	maintain: 0,
	days: 0,
};
export const PricesCalculator = () => {
	const calculationOptionsData = useCalculationOptionsData();
	const [priceValues, setPriceValues] = useState({ ...initPriceValues });
	const [selectedButtons, setSelectedButtons] = useState({});
	const [totalPrice, setTotalPrice] = useState(0);
	const [inputValues, setInputValues] = useState({
		email: '',
	});
	const handleChange = useCallback(
		({ target }) => {
			setInputValues({
				...inputValues,
				[target.name]: target.value,
			});
		},

		[inputValues]
	);

	const serviceList = Object.entries(calculationOptionsData);

	const handleServiceSelect = (sectionName, button) => {
		const newSelectedButtons = {
			...selectedButtons,
			[sectionName]: button,
		};
		setSelectedButtons(newSelectedButtons);
	};

	useEffect(() => {
		const totalValuesPrice = Object.values(selectedButtons).reduce(
			(acc, el) => {
				acc.planning += el.planning;
				acc.design += el.design;
				acc.development += el.development;
				acc.maintain += el.maintain;
				acc.days += el.days;
				return acc;
			},
			{ ...initPriceValues }
		);
		setPriceValues(totalValuesPrice);
		const total =
			totalValuesPrice.planning +
			totalValuesPrice.design +
			totalValuesPrice.development +
			totalValuesPrice.maintain;

		setTotalPrice(total);
	}, [selectedButtons]);

	const handleSubmit = useCallback(
		e => {
			e.preventDefault();

			const message = `From price list:\nWhat are you working on?: ${JSON.stringify(
				selectedButtons.workingOn
			)}\nWith design?: ${JSON.stringify(
				selectedButtons.withDesign
			)}\nCMS?: ${JSON.stringify(
				selectedButtons.cms
			)}\nMultiple languages?: ${JSON.stringify(
				selectedButtons.languages
			)}\nEmail: ${inputValues.email} `;

			sendContactForm(message).then(response => {
				if (response.status === 200) {
					setSelectedButtons({});
					setInputValues({
						email: '',
					});
				}
			});
		},
		[inputValues, selectedButtons]
	);

	const selectedButtonValues = Object.values(selectedButtons);
	return (
		<PricesContainer>
			<ServicesList>
				{serviceList.map(([key, el]) => (
					<li key={key}>
						<ServicesTitle>{el.title}</ServicesTitle>
						{el.buttons.map(el => (
							<ServicesBtn key={el.key}>
								<input
									id={el.key}
									name={key}
									type="radio"
									onClick={() => handleServiceSelect(key, el)}
									data-planning={el.planning}
									data-design={el.design}
									data-development={el.development}
									data-maintain={el.maintain}
									data-days={el.days}
									checked={selectedButtonValues.some(x => x.key === el.key)}
								/>
								<StyledLabel for={el.key}>{el.name}</StyledLabel>
							</ServicesBtn>
						))}
					</li>
				))}
			</ServicesList>

			<CostsContainer>
				<CostsTitle>Development costs</CostsTitle>

				<CostsList>
					<li>
						<span>Planning</span> $ {priceValues.planning}
					</li>
					<li>
						<span>Design</span> $ {priceValues.design}
					</li>
					<li>
						<span>Development</span> $ {priceValues.development}
					</li>
					<li>
						<span>Maintain</span> $ {priceValues.maintain}
					</li>
					<li>
						<span>Estimated time</span>
						<SpanEstimate>from {priceValues.days} working days</SpanEstimate>
					</li>
					<li>
						<span>Total cost </span> from $ {totalPrice}
					</li>
					<li>
						<SendForm onSubmit={handleSubmit} id="calculator-form">
							<input
								required
								type="email"
								name="email"
								value={inputValues.email}
								placeholder="Enter your e-mail ..."
								onChange={handleChange}
							/>
							<CostsBtnWrap>
								<CostsBtn for="calculator-form" type="submit">
									Send request
								</CostsBtn>
							</CostsBtnWrap>
						</SendForm>
					</li>
				</CostsList>
			</CostsContainer>
		</PricesContainer>
	);
};

const SendForm = styled.form`
	width: 100%;
	input {
		width: 100%;
		padding: 6px;
		font-size: 1.5rem;
		border: none;
		opacity: 0.5;
		margin-bottom: 32px;
		border-radius: 4px;
		::placeholder {
			color: #874aad;
			font-size: 1.5rem;
		}
	}
`;
const StyledLabel = styled.label`
	border-radius: 4px;
`;
const SpanEstimate = styled.span`
	text-align: end;
`;
const PricesContainer = styled.div`
	display: none;
	@media all and (min-width: ${breakpoints.notebook}) {
		width: 100%;
		padding: 64px 6% 64px 11%;
		display: flex;
		justify-content: space-between;
	}
`;

const ServicesList = styled.ul`
	width: 60%;
	margin: 0;
	padding: 0;
	list-style: none;

	li:not(:last-child) {
		margin-bottom: 32px;
	}
`;

const ServicesTitle = styled.h3`
	margin: 0 0 24px 0;
	padding: 0;
	font-size: 1.5rem;
	line-height: 160%;
`;

const ServicesBtn = styled.div`
	display: inline-block;

	&:not(:last-child) {
		margin-right: 16px;
	}

	input {
		display: none;
	}

	label {
		min-width: 80px;
		padding: 12px 16px;
		display: flex;
		justify-content: center;
		cursor: pointer;
		font-size: 1.5rem;
		line-height: 160%;
		background-color: transparent;
		border: 1px solid #313131;
		user-select: none;
		margin-bottom: 20px;
	}

	input:checked + label {
		color: #ffffff;
		background: #874aad;
	}
`;

const CostsContainer = styled.div`
	min-width: 560px;
	width: 40%;
	border-radius: 8px;
	height: fit-content;
	padding: 40px;
	background: linear-gradient(88deg, #874aad 3.37%, #e19bb4 96.63%);
	color: #ffffff;
`;

const CostsTitle = styled.h3`
	margin: 0 0 16px 0;
	padding: 0;
	font-size: 2rem;
	line-height: 160%;
	text-transform: uppercase;
	color: #ffffff;
`;

const CostsList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	font-size: 1.5rem;
	line-height: 160%;

	li {
		margin: 0 0 16px 0;
		display: flex;
		justify-content: space-between;
		color: #ffffff;
	}

	li:nth-child(5) {
		padding: 16px 0;
		border-top: 1px solid #eff0f3;
	}

	li:last-child {
		margin-bottom: 32px;
	}

	span {
		color: inherit;
	}
`;

const CostsBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

const CostsBtn = styled.button`
	display: flex;
	align-items: center;
	opacity: 1;
	border-radius: 4px;
	margin: 0 auto;
	padding: 12px 32px;
	cursor: pointer;
	border: none;
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	color: #874aad;
	background-color: #ffffff;
	&:hover,
	&:focus {
		opacity: 0.85;
		transition: 1s;
	}
`;
