import styled from 'styled-components';
import { theme } from './theme';

export const SlideContainer = styled.div`
    width: ${theme.containerWidthPercent}%;
	margin: 0 auto ${theme.slideBottomMarginRem}rem;

	@media all and (max-width: ${theme.breakpoints.hdScreen}px) {
		width: ${theme.containerWidthPercent + 5}%;
	}
`;
