import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import PricesSectionMob from './PricesSectionMob.js';
import { usePricesAndServicesTableData } from '../../data';

export const PricesTableMob = () => {
	const pricesAndServicesTableData = usePricesAndServicesTableData();
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
	@media all and (min-width: ${breakpoints.notebook}) {
		display: none;
	}
`;
