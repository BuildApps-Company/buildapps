import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Portfolio } from '../../data/projects';
import { allProjects } from '../../data/projects';

export const ButtonsList = ({ selectedCategories, onSelectCategory }) => {
	const buttons = useMemo(
		() => [
			allProjects,
			...Object.entries(Portfolio)
				.map(([_, el]) => el.responsibility)
				.flat()
				.filter((el, index, self) => self.indexOf(el) === index),
		],
		[Portfolio]
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
	margin-right: 16px;
	display: block;
	border-radius: 4px;
	white-space: nowrap;
	padding: 12px 16px;
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	background-color: transparent;
	border: 1px solid #d9dbe4;
	word-wrap: break-word;
	cursor: pointer;

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
