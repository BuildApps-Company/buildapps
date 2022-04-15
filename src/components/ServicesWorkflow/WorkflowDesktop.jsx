import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { ContentContainer } from '../../styles/container';
import btn1 from '../../../static/images/workflow/wrapper_buttons/message.png';
import btn2 from '../../../static/images/workflow/wrapper_buttons/map.png';
import btn3 from '../../../static/images/workflow/wrapper_buttons/plus.png';
import btn4 from '../../../static/images/workflow/wrapper_buttons/check.png';

export const WorkflowDesktop = () => {
	const { t } = useTranslation();
	const [point, setPoint] = useState(1);

	return (
		<WorkflowComponent>
			<ContentContainer>
				<WorkflowTextContainer>
					<WorkflowTitle>{t('servicesAndWorkflow.workflow')}</WorkflowTitle>
					<WorkflowSubtitle active={point === 1}>
						{t('servicesAndWorkflow.workflow1')}
					</WorkflowSubtitle>
					<WorkflowSubtitle active={point === 2}>
						{t('servicesAndWorkflow.workflow2')}
					</WorkflowSubtitle>
					<WorkflowSubtitle active={point === 3}>
						{t('servicesAndWorkflow.workflow3')}
					</WorkflowSubtitle>
					<WorkflowSubtitle active={point === 4}>
						{t('servicesAndWorkflow.workflow4')}
					</WorkflowSubtitle>
				</WorkflowTextContainer>
			</ContentContainer>
			<BrickContainer>
				<WorkflowWrapper>
					<Brick1 />
					<Brick2 />
					<Brick3 />
				</WorkflowWrapper>
				<ContentContainer>
					<Circle1 point={point} onClick={e => setPoint(1)} />
					<Circle2 point={point} onClick={e => setPoint(2)} />
					<Circle3 point={point} onClick={e => setPoint(3)} />
					<Circle4 point={point} onClick={e => setPoint(4)} />
				</ContentContainer>
			</BrickContainer>
		</WorkflowComponent>
	);
};

export default WorkflowDesktop;

const WorkflowComponent = styled.div`
	display: block;
	overflow: hidden;
`;

const BrickContainer = styled.div`
	display: none;

	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
		position: relative;
		width: 100%;
		margin-bottom: 280px;
	}
`;

const WorkflowWrapper = styled.div`
	display: none;

	@media all and (min-width: ${breakpoints.tablet}) {
		display: block;
		position: relative;
		background-color: ${colors.Main};
		width: 60%;
		height: 300px;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		width: 45%;
		height: 400px;
	}
`;

const Circle1 = styled.div`
	display: block;
	box-sizing: border-box;
	position: absolute;
	background-color: ${props =>
		props.point === 1 ? colors.Main : colors.grey.background};
	width: 110px;
	height: 110px;
	border: 12px solid ${colors.light.white};
	border-radius: 100%;
	bottom: -25%;
	transition: background-color 300ms linear;
	cursor: pointer;

	&::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border: 0px;
		border-radius: 100%;
		background: transparent;
		background-image: url(${btn1});
		background-repeat: no-repeat;
		background-position: center;
	}

	&::before {
		display: ${props => (props.point === 1 ? 'block' : 'none')};
		box-sizing: border-box;
		content: 'Discuss and Research';
		font-weight: bold;
		position: absolute;
		width: 170px;
		top: 120%;
		left: -25px;
		border: 0px;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		width: 138px;
		height: 138px;
	}
`;

const Circle2 = styled.div`
	display: block;
	position: absolute;
	background-color: ${props =>
		props.point === 2 ? colors.Main : colors.grey.background};
	width: 110px;
	height: 110px;
	border: 12px solid ${colors.light.white};
	border-radius: 100%;
	bottom: -25%;
	transform: translateX(150%);
	transition: background-color 300ms linear;
	cursor: pointer;

	&::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border: 0px;
		border-radius: 100%;
		background: transparent;
		background-image: url(${btn2});
		background-repeat: no-repeat;
		background-position: center;
	}

	&::before {
		display: ${props => (props.point === 2 ? 'block' : 'none')};
		box-sizing: border-box;
		content: 'Roadmap';
		font-weight: bold;
		position: absolute;
		text-align: center;
		width: 114px;
		top: 120%;
		left: 0;
		border: 0px;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		width: 138px;
		height: 138px;
	}
`;

const Circle3 = styled.div`
	display: block;
	position: absolute;
	background-color: ${props =>
		props.point === 3 ? colors.Main : colors.grey.background};
	width: 110px;
	height: 110px;
	border: 12px solid ${colors.light.white};
	border-radius: 100%;
	bottom: -25%;
	transform: translateX(300%);
	transition: background-color 300ms linear;
	cursor: pointer;

	&::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border: 0px;
		border-radius: 100%;
		background: transparent;
		background-image: url(${btn3});
		background-repeat: no-repeat;
		background-position: center;
	}

	&::before {
		display: ${props => (props.point === 3 ? 'block' : 'none')};
		box-sizing: border-box;
		content: 'Development';
		font-weight: bold;
		position: absolute;
		text-align: center;
		width: 114px;
		top: 120%;
		left: 0;
		border: 0px;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		width: 138px;
		height: 138px;
	}
`;

const Circle4 = styled.div`
	display: block;
	position: absolute;
	background-color: ${props =>
		props.point === 4 ? colors.Main : colors.grey.background};
	width: 110px;
	height: 110px;
	border: 12px solid ${colors.light.white};
	border-radius: 100%;
	bottom: -25%;
	transform: translateX(450%);
	transition: background-color 300ms linear;
	cursor: pointer;

	&::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border: 0px;
		border-radius: 100%;
		background: transparent;
		background-image: url(${btn4});
		background-repeat: no-repeat;
		background-position: center;
	}

	&::before {
		display: ${props => (props.point === 4 ? 'block' : 'none')};
		box-sizing: border-box;
		content: 'Approve';
		font-weight: bold;
		position: absolute;
		text-align: center;
		width: 114px;
		top: 120%;
		left: 0;
		border: 0px;
	}

	@media all and (min-width: ${breakpoints.notebook}) {
		width: 138px;
		height: 138px;
	}
`;

const Brick1 = styled.div`
	display: block;
	position: absolute;
	width: 150px;
	height: 150px;
	background-color: ${colors.Main};
	left: 99%;
	top: 50%;

	@media all and (min-width: ${breakpoints.notebook}) {
		width: 200px;
		height: 200px;
		left: 100%;
		top: 50%;
	}
`;

const Brick2 = styled.div`
	display: block;
	position: absolute;
	width: 150px;
	height: 150px;
	background-color: ${colors.Main};
	left: calc(99% + 150px);

	@media all and (min-width: ${breakpoints.notebook}) {
		width: 200px;
		height: 200px;
		left: calc(100% + 200px);
	}
`;

const Brick3 = styled.div`
	display: block;
	position: absolute;
	width: 200px;
	height: 200px;
	background-color: ${colors.Main};
	left: calc(100% + 600px);
	top: 50%;
`;
const WorkflowTextContainer = styled.div`
	display: block;
	position: relative;
`;

const WorkflowTitle = styled.h3`
	display: block;
	position: absolute;
	font-size: 40px;
	color: ${colors.light.white};
	line-height: 160%;
	text-transform: uppercase;
	padding: 0;
	margin: 64px 0 0;
	z-index: 1;
`;

const WorkflowSubtitle = styled.p`
	display: block;
	position: absolute;
	font-size: 16px;
	color: ${colors.light.white};
	line-height: 160%;
	padding: 0;
	margin: 144px 0 0;
	z-index: 1;
	opacity: ${props => (props.active ? 1 : 0)};
	transition: opacity 200ms linear;
`;
