import React from 'react';
import styled from 'styled-components';
import { pricesAndServicesTableData } from '../../data/pricesAndServicesTableData';
import PricesSectionMob from './PricesSectionMob.js';
export const PricesTableMob = () => {
	return (
		<StyledPricesTableMob>
			{pricesAndServicesTableData.map(el => (
				<PricesSectionMob key={el.name} el={el} />
			))}
		</StyledPricesTableMob>
	);
};

const StyledPricesTableMob = styled.div`
	margin-bottom: 64px;
	width: 100%;
	font-size: 1.5rem;
	line-height: 160%;
`;
