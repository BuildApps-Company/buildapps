import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import btn1 from '../../../static/images/workflow/wrapper_buttons/message.png';
import btn2 from '../../../static/images/workflow/wrapper_buttons/map.png';
import btn3 from '../../../static/images/workflow/wrapper_buttons/plus.png';
import btn4 from '../../../static/images/workflow/wrapper_buttons/check.png';

const settings = {
	arrows: false,
	className: 'slider variable-width',
	dots: false,
	infinite: true,
	variableWidth: true,
	swipeToSlide: true,
	slidesToShow: 1,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 55552000,
	cssEase: 'ease-out',
};

const WorkflowMobile = () => {
	const { t } = useTranslation();

	return (
		<WorkflowComponent>
			<BrickContainer>
				<WorkflowWrapper>
					<WorkflowTitle>{t('servicesAndWorkflow.workflow')}</WorkflowTitle>
					<BlockSlider>
						<Slider {...settings}>
							<SliderElement>
								<SliderText>{t('servicesAndWorkflow.workflow1')}</SliderText>
								<Circle1 />
							</SliderElement>
							<SliderElement>
								<SliderText>{t('servicesAndWorkflow.workflow2')}</SliderText>
								<Circle2 />
							</SliderElement>
							<SliderElement>
								<SliderText>{t('servicesAndWorkflow.workflow3')}</SliderText>
								<Circle3 />
							</SliderElement>
							<SliderElement>
								<SliderText>{t('servicesAndWorkflow.workflow4')}</SliderText>
								<Circle4 />
							</SliderElement>
						</Slider>
					</BlockSlider>
					<Brick1 />
					<Brick2 />
				</WorkflowWrapper>
			</BrickContainer>
		</WorkflowComponent>
	);
};

export default WorkflowMobile;

const BlockSlider = styled.div`
	display: block;
	position: absolute;
	width: 100%;
	top: 78px;
`;

const SliderElement = styled.div`
	display: flex;
	flex-direction: column;
	height: 340px;
	margin-right: 100px;
`;

const SliderText = styled.p`
	display: block;
  max-width: 280px;
	font-size: 14px;
	color: ${colors.light.white};
	width: 100%;
	margin-left: 15px;
`;

const WorkflowComponent = styled.div`
	display: block;
	height: 450px;

	@media all and (min-width: ${breakpoints.tablet}) {
		display: none;
	}
`;

const BrickContainer = styled.div`
	display: block;
	position: relative;
	width: 100%;
	margin-bottom: 108px;
`;

const WorkflowWrapper = styled.div`
	display: block;
	position: relative;
	background-color: ${colors.Main};
	width: 100%;
	height: 228px;
`;

const Circle1 = styled.div`
	display: block;
	position: absolute;
	background-color: ${colors.Main};
	width: 110px;
	height: 110px;
	border: 12px solid ${colors.light.white};
	border-radius: 100%;
	transition: background-color 300ms linear;
	cursor: pointer;
	// bottom: 35px;
	transform: translateX(calc(50vw - 55px));

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
		display: block;
		box-sizing: border-box;
		content: 'Discuss and Research';
		position: absolute;
		width: 170px;
		top: 120%;
		left: -35px;
		border: 0px;
	}
`;

const Circle2 = styled.div`
	display: block;
	position: absolute;
	background-color: ${colors.Main};
	width: 110px;
	height: 110px;
	border: 12px solid ${colors.light.white};
	border-radius: 100%;
	transition: background-color 300ms linear;
	cursor: pointer;
	transform: translateX(calc(50vw - 55px));

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
		display: block;
		box-sizing: border-box;
		content: 'Roadmap';
		text-align: center;
		position: absolute;
		width: 86px;
		top: 120%;
	}
`;

const Circle3 = styled.div`
	display: block;
	position: absolute;
	background-color: ${colors.Main};
	width: 110px;
	height: 110px;
	border: 12px solid ${colors.light.white};
	border-radius: 100%;
	transition: background-color 300ms linear;
	cursor: pointer;
	transform: translateX(calc(50vw - 55px));

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
		display: block;
		box-sizing: border-box;
		content: 'Development';
		text-align: center;
		position: absolute;
		top: 120%;
		left: -8px;
	}
`;

const Circle4 = styled.div`
	display: block;
	position: absolute;
	background-color: ${colors.Main};
	width: 110px;
	height: 110px;
	border: 12px solid ${colors.light.white};
	border-radius: 100%;
	transition: background-color 300ms linear;
	cursor: pointer;
	transform: translateX(calc(50vw - 55px));

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
		display: block;
		width: 86px;
		box-sizing: border-box;
		content: 'Approve';
		text-align: center;
		position: absolute;
		top: 120%;
	}
`;

const Brick1 = styled.div`
	display: block;
	position: absolute;
	width: 78px;
	height: 78px;
	background-color: ${colors.light.white};
	right: 78px;
	bottom: 0;
`;

const Brick2 = styled.div`
	display: block;
	position: absolute;
	width: 78px;
	height: 78px;
	background-color: ${colors.light.white};
	right: 0;
	bottom: 78px;
`;

const WorkflowTitle = styled.h3`
	display: block;
	position: absolute;
	font-size: 24px;
	line-height: 160%;
	color: ${colors.light.white};
	text-transform: uppercase;
	padding: 0;
	margin: 16px 16px 24px;
	z-index: 1;
`;
