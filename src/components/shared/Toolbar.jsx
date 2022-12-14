import React, { useState } from 'react';
import styled from 'styled-components';
import { BurgerMenu } from './BurgerMenu';
import { StopWarBanner } from './stopWarBanner'
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
    <>
      <StopWarBanner />
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

        <BurgerMenu toogleList={toogleList} isOpen={isOpen}/>
      </StyledHeader>
    </>
	);
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4px 16px 4px 14px;

	@media all and (min-width: ${breakpoints.notebook}) {
		padding: 16px 96px;
	}
`;

const Logo = styled.img`
	width: 100px;

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
