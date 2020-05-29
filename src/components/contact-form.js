import axios from 'axios';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import closeImage from '../../static/images/ic_close.svg';
import { Menu } from '../data/menu';
import { SlideContainer } from '../styles/shared';
import { theme } from '../styles/theme';
import FloatingInput from './floating-text-field';

const FormContainer = styled(SlideContainer)`
	background: ${theme.colors.whiteSmoke};
	padding: 64px 62px;
	display: flex;
	flex-direction: column;
	max-width: 1200px;
`;

const Title = styled.div`
	color: ${theme.colors.black};
	font-size: 3rem;
	text-transform: uppercase;
	margin-bottom: 24px;
	text-align: center;
`;

const SubTitle = styled.div`
	color: ${theme.colors.black};
	font-size: 2rem;
	padding-bottom: 44px;
	margin-bottom: 46px;
	text-align: center;
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

const ButtonContainer = styled.div`
	text-align: center;
`;

const FloatingInputContainer = styled.div`
	flex: 0 0 49%;
	min-width: 49%;

	@media all and (max-width: ${theme.breakpoints.tablet}px) {
		flex-base: 100%;
		min-width: 100%;
	}
`;

const RelativeForm = styled.form`
	position: relative;
`;

const MessageContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9;
	background: ${theme.colors.whiteSmoke};
`;

const CloseIcon = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
	width: 20px;
	height: 20px;
`;

const ResponseMessage = styled.div`
	font-size: 1.4rem;
`;

export default () => {
	const [isBusy, setIsBusy] = useState(false);
	const [message, setMessage] = useState(null);
	const formRef = useRef();

	function getErrorMessage(error) {
		const errorArray = [
			error.title,
			error.message,
			...Object.entries(error.errors || {})
				.map(([, messages]) => messages || [])
				.reduce((prev, next) => [...prev, ...next], []),
		].filter(x => x);
		return errorArray && errorArray.length
			? errorArray.join('<br/>')
			: 'Error happened. Please, try again.';
	}

	async function submitForm(e) {
		e.preventDefault();
		setIsBusy(true);
		try {
			const formData = new FormData(formRef.current);
			const response = await axios.post(
				'https://devrybalko.com/buildapps/api/email/send',
				formData
			);

			if (response.status === 200) {
				setMessage('Thanks, we will contact You');
			} else {
				setMessage(getErrorMessage(response.data));
			}
		} catch (error) {
			setMessage(
				getErrorMessage(
					(error && error.response && error.response.data) || error
				)
			);
		} finally {
			setIsBusy(false);
		}
	}

	return (
		<FormContainer id={Menu.contacts.key}>
			<Title>Contact us</Title>
			<SubTitle>We will help you with your project</SubTitle>
			<RelativeForm onSubmit={submitForm} ref={formRef}>
				{message && (
					<MessageContainer>
						<ResponseMessage
							dangerouslySetInnerHTML={{ __html: message }}
						></ResponseMessage>
						<CloseIcon onClick={() => setMessage(undefined)}>
							<img src={closeImage} alt="close" />
						</CloseIcon>
					</MessageContainer>
				)}
				<HorizontalContainer>
					<FloatingInputContainer>
						<FloatingInput placeholder="User name" name="name" required />
					</FloatingInputContainer>
					<FloatingInputContainer>
						<FloatingInput placeholder="Email" name="email" required />
					</FloatingInputContainer>
				</HorizontalContainer>
				<FloatingInput
					rows={3}
					placeholder="Additional information or question (optional)"
					name="message"
				/>
				<ButtonContainer>
					<SendButton disabled={isBusy} className="primary transparent">
						send
					</SendButton>
				</ButtonContainer>
			</RelativeForm>
		</FormContainer>
	);
};
