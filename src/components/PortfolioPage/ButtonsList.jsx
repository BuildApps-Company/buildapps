import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Portfolio } from '../../data/projects';

export const ButtonsList = () => {
	const buttons = useMemo(
		() =>
			Object.entries(Portfolio)
				.map(([_, el]) => el.responsibility)
				.flat()
				.filter((el, index, self) => self.indexOf(el) === index),
		[Portfolio]
	);

	return (
		<StyledButtonsList>
			{buttons.map(el => (
				<li key={el}>
					<button>{el}</button>
				</li>
			))}
		</StyledButtonsList>
	);
};

const StyledButtonsList = styled.ul`
	overflow: scroll;
	margin: 0 0 16px 0;
	padding: 0;
	display: flex;
	list-style: none;

	li {
		margin-right: 16px;
	}

	button {
		white-space: nowrap;
		padding: 12px 16px;
		font-size: 16px;
		font-weight: 700;
		line-height: 160%;
		text-transform: uppercase;
		background-color: transparent;
		border: 1px solid rgba(49, 49, 49, 0.25);
		word-wrap: break-word;

		&:hover,
		&:focus {
			color: #ffffff;
			background: #874aad;
		}
	}
`;
