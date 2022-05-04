import styled from 'styled-components';
import { Link } from 'gatsby-plugin-react-i18next';
import { colors } from './colors';
import { breakpoints } from './breakpoints';

export const HeroBlock = styled.div`
	min-height: 100vh;
	width: 100%;
	min-height: 450px;
	max-height: 1080px;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const StyledLink = styled(Link)`
	display: none;

	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
		opacity: 0.75;
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 160%;
		text-transform: uppercase;
		text-decoration: none;
		color: ${colors.Main};
	}

	&:hover,
	&:focus {
		opacity: 1;
	}
`;
