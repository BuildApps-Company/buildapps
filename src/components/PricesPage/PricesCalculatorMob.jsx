import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { calculationOptionsData } from '../../data/pricesCalculatorData';
import { breakpoints } from '../../styles/breakpoints';
import selectIcon from '../../../static/images/ic_select.svg';

const initPriceValues = {
	planning: 0,
	design: 0,
	development: 0,
	maintain: 0,
	days: 0,
};

const initSelectedButtons = Object.entries(calculationOptionsData).reduce(
	(acc, [key, value]) => ({ ...acc, [key]: value.buttons[0] }),
	{}
);

export const PricesCalculatorMob = () => {
	const [priceValues, setPriceValues] = useState({
		...initPriceValues,
	});
	const [selectedButtons, setSelectedButtons] = useState({
		...initSelectedButtons,
	});
	const [totalPrice, setTotalPrice] = useState(0);

	const serviceList = Object.entries(calculationOptionsData);

	const handleServiceSelect = (target, section, key) => {
		const selectedButtonKey = target.value;
		const button = section.buttons.find(el => el.key === selectedButtonKey);
		const newSelectedButtons = {
			...selectedButtons,
			[key]: button,
		};
		setSelectedButtons(newSelectedButtons);

		const totalValuesPrice = Object.values(newSelectedButtons).reduce(
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

	return (
		<PricesContainer>
			<ServicesList>
				{serviceList.map(([key, el]) => (
					<li key={key}>
						<ServicesTitle>{el.title}</ServicesTitle>
						<SelectWrap
							name={key}
							value={selectedButtons[key].key}
							onChange={({ target }) => handleServiceSelect(target, el, key)}
						>
							{el.buttons.map(el => (
								<option
									value={el.key}
									data-planning={el.planning}
									data-design={el.design}
									data-development={el.development}
									data-maintain={el.maintain}
									data-days={el.days}
								>
									{el.name}
								</option>
							))}
						</SelectWrap>
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
				</CostsList>

				<CostsBtnWrap>
					<CostsBtn>Send request</CostsBtn>
				</CostsBtnWrap>
			</CostsContainer>
		</PricesContainer>
	);
};
const SelectWrap = styled.select`
	border: none;
	width: 100%;
	font-size: 1.5rem;
	border-bottom: 2px solid ${colors.grey.dark};
	appearance: none;
	background-image: url(${selectIcon});
	background-repeat: no-repeat;
	background-position-x: 100%;
	background-position-y: 5px;
	padding-bottom: 8px;
`;
const SpanEstimate = styled.span``;
const PricesContainer = styled.div`
	width: 100%;
	padding: 2px 4%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media all and (min-width: ${breakpoints.notebook}) {
		display: none;
	}
`;

const ServicesList = styled.ul`
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
	/* margin-right: 4%; */

	li:not(:last-child) {
		margin-bottom: 32px;
	}
`;

const ServicesTitle = styled.h3`
	margin: 0 0 24px 0;
	padding: 0;
	font-size: 1rem;
	line-height: 160%;
	text-transform: uppercase;
`;

const CostsContainer = styled.div`
	height: fit-content;
	padding: 40px;
	background: linear-gradient(88deg, #874aad 3.37%, #e19bb4 96.63%);
	color: #ffffff;
	margin-top: 30px;
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
	font-size: 2rem;
	line-height: 160%;

	li {
		margin: 0 0 16px 0;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		color: #ffffff;
		font-size: 1.5rem;
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
`;
