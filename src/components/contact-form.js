import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Menu } from '../data/menu';
import FloatingInput from './floating-text-field';

const FormContainer = styled.div`
	background-color: ${theme.colors.whiteSmoke};
	margin: 0 auto 0 auto;
	padding: 64px 62px;
	width: ${theme.containerWidthPercent}%;
	display: flex;
	flex-direction: column;
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
	padding-bottom: 64px;
	margin-bottom: 46px;
	border-bottom: 2px solid ${theme.colors.lightGray};
`;

const HorizontalContainer = styled.div`
	display: flex;
	margin-bottom: 46px;
	flex-direction: row;
`;

const HorizontalDivider = styled.div`
	width: 24px;
`;

const SendButton = styled.button`
	width: 140px;
	margin: 64px auto 0 auto;
`;

export default () => (
	<FormContainer id={Menu.Contacts.key}>
		<Title>Contact us</Title>
		<SubTitle>We will help you with your project</SubTitle>
		<HorizontalContainer>
			<FloatingInput placeholder="User name" id="name" />
			<HorizontalDivider />
			<FloatingInput placeholder="Email" id="email" />
		</HorizontalContainer>
		<FloatingInput
			placeholder="Additional information or question (optional)"
			id="description"
		/>
		<SendButton className="primary transparent">send</SendButton>
	</FormContainer>
);