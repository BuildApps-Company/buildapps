import React, { useState } from 'react';
import styled from 'styled-components';
import { BurgerMenu } from './BurgerMenu';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import logoWhite from '../../../static/images/logo/logoWhite.svg';
import logoWhiteHover from '../../../static/images/logo/logoWhiteHover.svg';
import logoBlack from '../../../static/images/logo/logoBlack.svg';
import logoBlackHover from '../../../static/images/logo/logoBlackHover.svg';
import burgerWhite from '../../../static/images/burger/burgerWhite.svg';
import burgerBlack from '../../../static/images/burger/burgerBlack.svg';
import { Link } from 'gatsby-plugin-react-i18next';

export function Toolbar({ isWhite }) {
	const [isOpen, setIsOpen] = useState(false);
	const toogleList = () => setIsOpen(prevState => !prevState);

	return (
		<StyledHeader>
			<Link to={routes.home}>
				<Logo
					src={isWhite ? logoWhite : logoBlack}
					onMouseOver={e =>
						(e.currentTarget.src = isWhite ? logoWhiteHover : logoBlackHover)
					}
					onMouseOut={e =>
						(e.currentTarget.src = isWhite ? logoWhite : logoBlack)
					}
				/>
			</Link>

			<Burger
				src={isWhite ? burgerWhite : burgerBlack}
				onClick={toogleList}
				active={isOpen}
			/>

			{isOpen && <BurgerMenu toogleList={toogleList} />}
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4px 6%;

	@media all and (min-width: ${breakpoints.notebook}) {
		padding: 16px 6%;
	}
`;

const Logo = styled.img`
	width: 70px;
	height: 32px;

	@media all and (min-width: ${breakpoints.phone}) {
		width: 200px;
		height: 92px;
	}
`;

const Burger = styled.img`
	width: 32px;
	height: 32px;
	cursor: pointer;

	@media all and (min-width: ${breakpoints.phone}) {
		width: 64px;
		height: 64px;
	}
`;
