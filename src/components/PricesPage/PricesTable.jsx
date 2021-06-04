import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { pricesAndServicesTableData } from '../../data/pricesAndServicesTableData';

export const PricesTable = () => {
	return (
		<StyledPricesTable>
			<thead>
				<tr>
					<th>Type of website</th>
					<th>Price</th>
					<th>Time estimate</th>
				</tr>
			</thead>
			<tbody>
				{pricesAndServicesTableData.map(el => (
					<tr key={el.name}>
						<td>{el.name}</td>
						<td>{el.price}</td>
						<td>{el.estimate}</td>
					</tr>
				))}
			</tbody>
		</StyledPricesTable>
	);
};

const StyledPricesTable = styled.table`
	display: none;

	@media all and (min-width: ${breakpoints.notebook}) {
		display: table;
		margin-bottom: 64px;
		width: 100%;
		table-layout: fixed;
		border-collapse: collapse;
		font-size: 1.5rem;
		line-height: 160%;

		tr {
			border-bottom: 1px solid #eff0f3;
		}

		th {
			padding: 32px 6% 32px 11%;
			text-align: start;
			background: #eff0f3;
		}

		td {
			padding: 32px 0 32px 11%;
		}
	}
`;
