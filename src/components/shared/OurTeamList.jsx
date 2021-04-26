import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ListTitleWithUnderline } from '../../styles/styled-headers';
import { ourTeamListData } from '../../data/ourTeamListData';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import plusIcon from '../../../static/images/ic_plus.svg';
import minusIcon from '../../../static/images/ic_minus.svg';

export const OurTeamList = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [windowSize, setWindowSize] = useState(0);

	useEffect(() => {
		window.addEventListener('resize', setWindowSize(window.innerWidth));
		windowSize > 450 && setIsOpen(true);
	}, [windowSize]);

	const toogleList = () => setIsOpen(!isOpen);

	return (
		<div>
			<TitleWrap>
				<ListTitleWithUnderline>Our Team</ListTitleWithUnderline>

				<IconComtainer>
					{isOpen ? (
						<img src={minusIcon} alt="Minus Icon" onClick={toogleList} />
					) : (
						<img src={plusIcon} alt="Plus Icon" onClick={toogleList} />
					)}
				</IconComtainer>
			</TitleWrap>

			{isOpen && (
				<OurTeamListStyle>
					{ourTeamListData.map(el => (
						<li key={el.key}>
							<a href={el.href}>{el.title}</a>
						</li>
					))}
				</OurTeamListStyle>
			)}
		</div>
	);
};

const TitleWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const OurTeamListStyle = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;

	font-size: 20px;
	line-height: 160%;

	a {
		text-decoration: none;
		color: ${colors.light.white};
	}

	li:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const IconComtainer = styled.div`
	@media all and (min-width: ${breakpoints.phone}) {
		display: none;
	}
`;
