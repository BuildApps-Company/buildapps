import React, { useMemo } from 'react';
import styled from 'styled-components';
import { usePortfolio } from '../../data';
import { breakpoints } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';

export const ButtonsListProducts = ({
	selectedCategories,
	onSelectCategory,
	data,
}) => {
	const { t } = useTranslation();
	const buttons = useMemo(
		() => [
			`${t('portfolio.filterResetBtn')}`,
			...data.data.map(el => el.attributes.tagName),
		],
		[data]
	);

	return (
		<StyledButtonsList>
			{buttons.map(el => (
				<StyledLi
					key={el}
					selected={selectedCategories.includes(el)}
					onClick={() => onSelectCategory(el)}
				>
					{el}
				</StyledLi>
			))}
		</StyledButtonsList>
	);
};

const StyledLi = styled.li`
	display: block;
	margin-right: 8px;
	border-radius: 4px;
	white-space: nowrap;
	padding: 12px 10px 8px;
	font-weight: 700;
	line-height: 120%;
	text-transform: uppercase;
	background-color: transparent;
	border: 1px solid #d9dbe4;
	word-wrap: break-word;
	cursor: pointer;

	@media all and (min-width: ${breakpoints.phone}) {
		padding: 16px 16px 12px;
		font-weight: 700;
		line-height: 160%;
	}

	${({ selected }) =>
		selected &&
		`
		color: #ffffff;
		background: #874aad;
`}
`;

const StyledButtonsList = styled.ul`
	overflow: auto;
	margin: 0 0 16px 0;
	padding: 0;
	display: flex;
	align-items: center;
	list-style: none;
`;
