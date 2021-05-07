import styled from 'styled-components';
import { colors } from './colors';

export const PrimaryButton = styled.a`
	padding: 15px 30px;
	display: inline-block;
	border: 2px solid ${colors.Main};
	font-size: 2em;
	text-transform: uppercase;
	color: ${colors.Main};
	text-decoration: none;
	&:hover,
	&:visited {
		color: ${colors.Main};
	}
`;

export const PrimaryButtonOutline = styled.a`
	font-size: 64px;
	display: inline-block;
	color: ${colors.light.white};
	text-decoration: none;
	border-bottom: 6px solid ${colors.Main};
	padding-bottom: 2px;
	&:hover,
	&:visited {
		color: ${colors.light.white};
	}
`;
