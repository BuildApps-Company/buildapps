import React, { useMemo } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';

export const FilterList = ({ selectedCategories, onSelectCategory }) => {
	const { t } = useTranslation();

	return (
		<FilterBlock>
			<FilterHeader>{t('filter.filterHeader')}</FilterHeader>
			<FilterCategories>
				<CategoryBlock>
					<CategoryHeader>{t('filter.categryDepartment')}</CategoryHeader>
					<CategoryButtons>
						<Button
							selected={selectedCategories.includes('web')}
							onClick={() => onSelectCategory('web')}
						>
							{t('filter.btnWeb')}
						</Button>
						<Button
							selected={selectedCategories.includes('mobile')}
							onClick={() => onSelectCategory('mobile')}
						>
							{t('filter.btnMobile')}
						</Button>
						<Button
							selected={selectedCategories.includes('design')}
							onClick={() => onSelectCategory('design')}
						>
							{t('filter.btnDesign')}
						</Button>
					</CategoryButtons>
				</CategoryBlock>
				<CategoryBlock>
					<CategoryHeader>{t('filter.categryExp')}</CategoryHeader>
					<CategoryButtons>
						<Button
							selected={selectedCategories.includes('junior')}
							onClick={() => onSelectCategory('junior')}
						>
							{t('filter.btnJunior')}
						</Button>
						<Button
							selected={selectedCategories.includes('middle')}
							onClick={() => onSelectCategory('middle')}
						>
							{t('filter.btnMiddle')}
						</Button>
						<Button
							selected={selectedCategories.includes('senior')}
							onClick={() => onSelectCategory('senior')}
						>
							{t('filter.btnSenior')}
						</Button>
					</CategoryButtons>
				</CategoryBlock>
				<CategoryBlock>
					<CategoryHeader>{t('filter.categryWorkTime')}</CategoryHeader>
					<CategoryButtons>
						<Button
							selected={selectedCategories.includes('part-time')}
							onClick={() => onSelectCategory('part-time')}
						>
							{t('filter.btnPart')}
						</Button>
						<Button
							selected={selectedCategories.includes('full time')}
							onClick={() => onSelectCategory('full time')}
						>
							{t('filter.btnFull')}
						</Button>
					</CategoryButtons>
				</CategoryBlock>
				<CategoryBlock>
					<CategoryHeader>{t('filter.categryWorkspace')}</CategoryHeader>
					<CategoryButtons>
						<Button
							selected={selectedCategories.includes('remote')}
							onClick={() => onSelectCategory('remote')}
						>
							{t('filter.btnRemote')}
						</Button>
						<Button
							selected={selectedCategories.includes('office')}
							onClick={() => onSelectCategory('office')}
						>
							{t('filter.btnOffice')}
						</Button>
					</CategoryButtons>
				</CategoryBlock>
			</FilterCategories>
		</FilterBlock>
	);
};

const CategoryButtons = styled.div`
	display: flex;
	gap: 0px;

	@media all and (min-width: ${breakpoints.phone}) {
		gap: 16px;
	}
`;

const CategoryHeader = styled.p`
	font-size: 1rem;
	line-height: 160%;
	opacity: 0.8;
	margin: 0 0 8px;
	padding: 0;
`;

const CategoryBlock = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
`;

const FilterCategories = styled.div`
	display: flex;
	flex-direction: column;
`;

const FilterHeader = styled.h3`
	font-size: 1.5rem;
	padding: 0;
	margin: 0 0 24px;
`;

const Button = styled.li`
	display: block;
	margin-right: 8px;
	border-radius: 4px;
	white-space: nowrap;
	padding: 8px 12px 4px;

	font-weight: 700;
	line-height: 120%;
	text-transform: uppercase;
	background-color: transparent;
	border: 1px solid #d9dbe4;
	word-wrap: break-word;
	cursor: pointer;

	@media all and (min-width: ${breakpoints.phone}) {
		padding: 4px 12px 0px;
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

const FilterBlock = styled.ul`
	display: flex;
	flex-direction: column;
	overflow: auto;
	margin: 114px 0 16px 0;
	padding: 0;
	list-style: none;
`;
