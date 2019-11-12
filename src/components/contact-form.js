import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Menu } from '../data/menu';
import FloatingInput from './floating-text-field';
import { SlideContainer } from '../styles/shared';

const FormContainer = styled(SlideContainer)`
	background-color: ${theme.colors.whiteSmoke};
	padding: 64px 62px;
	display: flex;
	flex-direction: column;
	max-width: 1200px;
`;

const Title = styled.div`
	color: ${theme.colors.black};
	font-size: 3rem;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 24px;
`;

const SubTitle = styled.div`
	color: ${theme.colors.black};
	font-size: 2rem;
	text-align: center;
	padding-bottom: 44px;
	margin-bottom: 46px;
	border-bottom: 2px solid ${theme.colors.lightGray};
`;

const HorizontalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 46px;
	flex-direction: row;
	flex-wrap: wrap;
`;

const SendButton = styled.button`
	width: 140px;
	margin: 64px auto 0 auto;
`;

const FloatingInputContainer = styled.div`
	flex: 0 0 49%;
	min-width: 49%;
	
	@media all and (max-width: ${theme.breakpoints.tablet}px) {
		flex-base: 100%;
		min-width: 100%;
	}
`;

export default () => (
	<FormContainer id={Menu.contacts.key}>
		<Title>Contact us</Title>
		<SubTitle>We will help you with your project</SubTitle>
		<HorizontalContainer>
			<FloatingInputContainer>
				<FloatingInput placeholder="User name" id="name" />
			</FloatingInputContainer>
			<FloatingInputContainer>
				<FloatingInput placeholder="Email" id="email" />
			</FloatingInputContainer>
		</HorizontalContainer>
		<FloatingInput
			placeholder="Additional information or question (optional)"
			id="description"
		/>
		<SendButton className="primary transparent">send</SendButton>
	</FormContainer>
);
