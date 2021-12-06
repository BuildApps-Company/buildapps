import styled from 'styled-components';
import { breakpoints } from './breakpoints';

export const ProjectDetailsContainer = styled.div`
	padding-left: 16px;
	padding-right: 16px;
	p {
		font-size: 1rem;
		line-height: 160%;
	}
	li {
		font-size: 1rem;
		line-height: 160%;
	}
	img {
		max-width: 50%;
		@media all and (min-width: ${breakpoints.notebook}) {
			margin-right: 18px;
		}
	}
	margin-bottom: 48px;
	@media all and (min-width: ${breakpoints.tablet}) {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 24px;
		padding-left: 18%;
		padding-right: 18%;
		margin-top: 32px;

		p {
			font-size: 1.5rem;
			line-height: 160%;
		}
		li {
			font-size: 1.5rem;
			line-height: 160%;
		}
	}
`;
