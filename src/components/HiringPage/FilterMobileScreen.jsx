import React from 'react';
import styled from 'styled-components';
import { FilterList } from './FilterList';

export const FilterMobileScreen = ({
	modalIsOpen,
	setModalState,
	selectedCategories,
	setSelectedCategories,
	onSelectCategory,
}) => {
	return (
		<FilterScreen modalIsOpen={modalIsOpen}>
			<FilterList
				selectedCategories={selectedCategories}
				onSelectCategory={onSelectCategory}
			/>

			<ButtonsWrap>
				<ButtonDone onClick={() => setModalState(false)}>Done</ButtonDone>
				<ButtonClear
					onClick={() => {
						setSelectedCategories([]);
						setModalState(false);
					}}
				>
					Clear Filters
				</ButtonClear>
			</ButtonsWrap>
		</FilterScreen>
	);
};

const FilterScreen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: fixed;
	background-color: #fff;
	padding: 48px 16px;
	height: 100vh;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	transition: transform 0.4s;
	transform: translateX(${props => (props.modalIsOpen ? '0' : '100%')});
`;

const ButtonsWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const ButtonDone = styled.p`
	display: block;
	border-radius: 4px;
	padding: 8px 12px 4px;
	font-weight: 700;
	line-height: 120%;
	text-transform: uppercase;
	text-align: center;
	color: #ffffff;
	background: #874aad;
	border: 1px solid #d9dbe4;
	word-wrap: break-word;
	cursor: pointer;
`;

const ButtonClear = styled.p`
	display: block;
	border-radius: 4px;
	padding: 8px 12px 4px;
	font-weight: 700;
	line-height: 120%;
	text-transform: uppercase;
	text-align: center;
	color: #d9dbe4;
	border: 1px solid #d9dbe4;
	word-wrap: break-word;
	cursor: pointer;
`;
