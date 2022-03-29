import styled from 'styled-components';
import { breakpoints } from './breakpoints';

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 11%;
		padding-right: 11%;
	}
`;

export const SmallContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 11%;
		padding-right: 3%;
	}
`;

export const ContentContainer = styled.div`
	display: block;
	max-width: 1460px;
	margin: 0 auto;
	padding: 0 30px;
`;
