import styled from 'styled-components';
import { breakpoints } from './breakpoints';
import { colors } from './colors';

export const H1 = styled.h1`
	font-weight: bold;
	font-size: 4rem;
	line-height: 160%;
`;

export const H2 = styled.h2`
	font-weight: bold;
	font-size: 2rem;
	line-height: 160%;
`;

export const H3 = styled.h3`
	font-size: 2rem;
	margin: 0;
	line-height: 160%;
`;

export const H4 = styled.h4`
	font-weight: bold;
	font-size: 1.5rem;
	margin: 0;
	line-height: 160%;
`;

export const SubH1 = styled.h1`
	font-size: 20px;
	line-height: 160%;
`;

export const SubH3 = styled.h3`
	font-weight: bold;
	font-size: 0.8rem;
	margin: 0;
	line-height: 160%;
`;

export const Body1 = styled.p`
	font-size: 1.5rem;
	line-height: 160%;
`;

export const Body2 = styled.p`
	font-size: 1rem;
	padding: 0;
	margin: 0;
	line-height: 160%;
`;

export const H2Block = styled(H2)`
	font-size: 4rem;
	text-transform: uppercase;
	margin: 0;
	line-height: 6.3rem;
`;

export const UnderlinedH = elem => styled(elem)`
	&:after {
		content: '';
		background: ${colors.Main};
		height: 6px;
		width: 64px;
		display: block;
		margin-top: -10px;
	}
`;

export const ListTitle = styled.h3`
	margin: 0 0 20px 0;
	padding: 0;
	max-width: 600px;

	font-size: 24px;
	line-height: 160%;
	color: ${colors.light.white};

	@media all and (max-width: ${breakpoints.phone}) {
		:last-of-type {
			margin-top: 16px;
		}
	}
`;

export const ListTitleWithUnderline = styled(ListTitle)`
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.phone}) {
		:after {
			width: 32px;
			height: 3px;
			content: '';
			display: block;
			background: ${colors.Main};
		}
	}
`;
