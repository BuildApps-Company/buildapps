import styled from 'styled-components';
import { breakpoints } from './breakpoints';

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 215px;
		padding-right: 215px;
	}
`;
