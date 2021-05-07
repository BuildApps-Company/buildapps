import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useWindowSize } from '../../utilities/useWindowSize';
import { ourTeamListData } from '../../data/ourTeamListData';
import { ListTitleWithUnderline } from '../../styles/styled-headers';
import { colors } from '../../styles/colors';
import plusIcon from '../../../static/images/ic_plus.svg';
import minusIcon from '../../../static/images/ic_minus.svg';

export const OurTeamList = () => {
	const { width } = useWindowSize();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		width > 450 && setIsOpen(true);
	}, [width]);

	const toogleList = () => setIsOpen(prevState => !prevState);

	return (
		<div>
			<TitleWrap>
				<ListTitleWithUnderline>Our Team</ListTitleWithUnderline>

				{width <= 450 && (
					<>
						{isOpen ? (
							<img src={minusIcon} alt="Minus Icon" onClick={toogleList} />
						) : (
							<img src={plusIcon} alt="Plus Icon" onClick={toogleList} />
						)}
					</>
				)}
			</TitleWrap>

			{isOpen && (
				<OurTeamListStyle>
					{ourTeamListData.map(el => (
						<li key={el.key}>
							<StyledLink to={el.href}>{el.title}</StyledLink>
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
	font-size: 1.25rem;
	line-height: 160%;

	li {
		margin-bottom: 16px;
	}

	li:last-child {
		margin-bottom: 32px;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${colors.light.white};
`;
