import React, { useState } from 'react';
import styled from 'styled-components';
import { calculationOptionsData } from '../../data/pricesCalculatorData';

export const PricesCalculator = () => {
	const [priceValues, setPriceValues] = useState({
		planning: 0,
		design: 0,
		development: 0,
		maintain: 0,
	});
	const [estimatedTime, setEstimatedTime] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const handleServiceSelect = ({ target }) => {
		target.checked &&
			setPriceValues({
				planning: (priceValues.planning += Number(target.dataset.planning)),
				design: (priceValues.design += Number(target.dataset.design)),
				development: (priceValues.development += Number(
					target.dataset.development
				)),
				maintain: (priceValues.maintain += Number(target.dataset.maintain)),
			});

		!target.checked &&
			setPriceValues({
				planning: (priceValues.planning -= Number(target.dataset.planning)),
				design: (priceValues.design -= Number(target.dataset.design)),
				development: (priceValues.development -= Number(
					target.dataset.development
				)),
				maintain: (priceValues.maintain -= Number(target.dataset.maintain)),
			});

		setTotalPrice(
			priceValues.planning +
				priceValues.design +
				priceValues.development +
				priceValues.maintain
		);
	};

	return (
		<PricesContainer>
			<ServicesList>
				{Object.entries(calculationOptionsData).map(([key, el]) => (
					<li key={key}>
						<ServicesTitle>{el.title}</ServicesTitle>

						{el.buttons.map(el => (
							<ServicesBtn key={el.key}>
								<input
									id={el.key}
									type="checkbox"
									onClick={handleServiceSelect}
									data-planning={el.planning}
									data-design={el.design}
									data-development={el.development}
									data-maintain={el.maintain}
								/>
								<label for={el.key}>{el.name}</label>
							</ServicesBtn>
						))}
					</li>
				))}
			</ServicesList>

			<CostsContainer>
				<CostsTitle>Development costs</CostsTitle>

				<CostsList>
					<li>
						<span>Planning</span> {priceValues.planning} $
					</li>
					<li>
						<span>Design</span> {priceValues.design} $
					</li>
					<li>
						<span>Development</span> {priceValues.development} $
					</li>
					<li>
						<span>Maintain</span> {priceValues.maintain} $
					</li>
					<li>
						<span>Estimated time</span> {estimatedTime} working days
					</li>
					<li>
						<span>Total</span> {totalPrice} $
					</li>
				</CostsList>

				<CostsBtnWrap>
					<CostsBtn>Send request</CostsBtn>
				</CostsBtnWrap>
			</CostsContainer>
		</PricesContainer>
	);
};

const PricesContainer = styled.div`
	padding: 0 64px 0 215px;
	display: flex;
	justify-content: space-between;
`;

const ServicesList = styled.ul`
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
	}

	input:checked + label {
		color: #ffffff;
		background: #874aad;
	}
`;

const CostsContainer = styled.div`
	min-width: 630px;
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
	font-size: 2rem;
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
	margin: 0 auto 0 auto;
	padding: 12px 32px;
	cursor: pointer;
	border: none;
	font-size: 2rem;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	color: #874aad;
	background-color: #ffffff;
`;
