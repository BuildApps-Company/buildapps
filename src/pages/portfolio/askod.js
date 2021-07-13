import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { H3 } from '../../styles/styled-headers';
import { PortfolioDetails } from '../../components/PortfolioPage/index';
import { colors } from '../../styles/colors';
import mainImg from '../../../static/images/projects/askod/main.png';
import detailsImg from '../../../static/images/projects/askod/details.png';
import screenshot_4 from '../../../static/images/projects/askod/screenshot_4.png';
import login from '../../../static/images/projects/askod/login.png';
import screenshot_contract from '../../../static/images/projects/askod/screenshot_contract.png';
import screenshot_contract2 from '../../../static/images/projects/askod/screenshot_contract2.png';
import screenshot_3 from '../../../static/images/projects/askod/screenshot_3.png';
import mainpageImg from '../../../static/images/projects/askod/mainpage.png';
import arrowLeftSlider from '../../../static/images/arrowLeftSlider.svg';
import arrowLeftSliderHover from '../../../static/images/arrowLeftSliderHover.svg';
import arrowRightSliderHover from '../../../static/images/arrowRightSliderHover.svg';
import arrowRightSlider from '../../../static/images/arrowRightSlider.svg';

const Askod = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toogleList = () => setIsOpen(prevState => !prevState);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<PortfolioDetails id={'askod'}>
			<MainImgWrap>
				<img src={mainImg} alt="mainimg" />
				<GreyText>
					Askod is an online electronic document management system that allows
					you to organize work with electronic documents (creation,
					modification, search), as well as interaction between employees
					(transfer of documents, issuing tasks, sending notifications, etc.).
					Also, such a system is called EDMS (Electronic Document Management
					Systems).
				</GreyText>
			</MainImgWrap>
			<AskodWrap>
				<MainPageImg>
					<img src={mainpageImg} alt="mainpage" />
				</MainPageImg>
				<ProjectDetailsContainer>
					<BlockWrap>
						<AdvantagesDiv>
							<H3>Advantages</H3>
							<p>
								Transparency of business processes. Due to the system can
								monitor all the steps in the organization. Business processes
								become completely transparent for management and they are easier
								to control.
							</p>
						</AdvantagesDiv>
						<ImgWrap>
							<img src={detailsImg} alt="detailsImg" />
						</ImgWrap>
					</BlockWrap>
					<div>
						<H3>Higher performing discipline</H3>
						<p>
							According to statistics, 20% of the tasks received are not
							performed by the employees responsible for them. With full control
							over all stages of work, the ECM system directly affects the
							performance discipline of employees.
						</p>
					</div>
					<BlockWrap>
						<ImgWrap>
							<img src={screenshot_4} alt="screenshot_contract" />
						</ImgWrap>
						<LowerDiv>
							<H3>Lower labor costs for managers and employees</H3>
							<p>
								The system reduces the time that employees spend on almost all
								routine operations with documents: creation, search, approval,
								etc. Document flow is accelerated. And as a result, all
								processes in the organization go through faster.
							</p>
						</LowerDiv>
					</BlockWrap>
					<BlockWrap>
						<AdvantagesDiv>
							<H3>Confidentiality of information is ensured</H3>
							<p>
								A data breach can cause millions in losses to an organization.
								Unlike traditional "paper" workflow, the ECM system provides
								access to documents strictly in accordance with the assigned
								user rights. All actions on the document (reading, changing,
								signing) are recorded.
							</p>
						</AdvantagesDiv>
						<ImgWrap>
							<img src={login} alt="login" />
						</ImgWrap>
					</BlockWrap>
					<BlockWrap>
						<ImgWrap>
							<img src={screenshot_contract} alt="screenshot_contract" />
						</ImgWrap>
						<LowerDiv>
							<H3>The requirements of ISO 9000 standards are met</H3>
							<p>
								The setting of quality management has now become one of the
								priority tasks in Russian companies. Among the requirements for
								the quality management system (QMS) there is a transparently
								delivered workflow, as well as information interaction between
								employees.
							</p>
						</LowerDiv>
					</BlockWrap>
					{isOpen && (
						<>
							<BlockWrap>
								<AdvantagesDiv>
									<H3>Easily to innovate and to teach beginners</H3>
									<p>
										Thanks to the notification system, built on the basis of the
										ECM system, you can quickly bring the new rules of work to
										all employees. The training time for new employees is
										reduced by quickly searching for the necessary information
										(regulations, instructions, etc.). The routes and templates
										of documents are easily changed, after which the employees
										automatically start working in a new way.
									</p>
								</AdvantagesDiv>
								<ImgWrap>
									<img src={screenshot_contract2} alt="screenshot_contract2" />
								</ImgWrap>
							</BlockWrap>
							<BlockWrap>
								<ImgWrap>
									<img src={screenshot_3} alt="screenshot_3" />
								</ImgWrap>
								<LowerDiv>
									<H3>More competitive advantages</H3>
									<p>
										The ECM system directly affects the competitive advantages
										of the company over other market players. The speed and
										quality of customer service are increased due to the rapid
										movement of information flows and precise control of all
										processes. Even the largest enterprise is becoming more
										mobile and less dependent on some “irreplaceable” employees.
									</p>
								</LowerDiv>
							</BlockWrap>
						</>
					)}
					{!isOpen && (
						<BtnWrap>
							<ButtonClick onClick={toogleList}>Find more</ButtonClick>
						</BtnWrap>
					)}
				</ProjectDetailsContainer>
				<BlockSlider>
					<div>
						<Slider {...settings}>
							<img src={mainImg} alt="mainimg" />
							<img src={detailsImg} alt="detailsImg" />
							<img src={screenshot_4} alt="screenshot_contract" />
							<img src={login} alt="login" />
							<img src={screenshot_contract} alt="screenshot_contract" />
							<img src={screenshot_contract2} alt="screenshot_contract2" />
							<img src={screenshot_3} alt="screenshot_3" />
						</Slider>
					</div>
				</BlockSlider>
			</AskodWrap>
		</PortfolioDetails>
	);
};

export default Askod;

const AskodWrap = styled.div`
	padding-left: 16px;
	padding-right: 16px;
	@media all and (min-width: ${breakpoints.tablet}) {
		padding-left: 22%;
		padding-right: 22%;
	}
`;

const GreyText = styled.p`
	padding: 50px 0px;
	margin-bottom: 60px;
	text-align: left;
`;

const MainPageImg = styled.div`
	margin-top: -80px;
	text-align: center;

	img {
		filter: drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.15));
		width: 100%;
	}
`;

const ImgWrap = styled.div`
	width: 100%;
	@media all and (min-width: ${breakpoints.notebook}) {
		width: 50%;
	}
`;

const BlockSlider = styled.div`
	margin-top: 36px;
	width: 100%;
	overflow-y: clip;
	max-height: 190px;
	margin-bottom: 70px;
	@media all and (min-width: ${breakpoints.tablet}) {
		max-height: 432px;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		margin-top: 128px;
		margin-bottom: 100px;
	}
	.slick-prev {
		/* left: 0%;
		top: 86%; */
		display: none !important;
		@media all and (min-width: ${breakpoints.notebook}) {
			display: block !important;
			left: -27%;
			top: 32%;
			&:hover,
			&:focus {
				&.slick-prev:before {
					content: url(${arrowLeftSliderHover});
				}
			}
		}
	}
	.slick-next {
		/* right: 10%;
		top: 86%; */
		display: none !important;
		@media all and (min-width: ${breakpoints.notebook}) {
			display: block !important;
			right: -19%;
			top: 32%;
			&:hover,
			&:focus {
				&.slick-next:before {
					content: url(${arrowRightSliderHover});
				}
			}
		}
	}
	.slick-prev:before {
		@media all and (min-width: ${breakpoints.notebook}) {
			content: url(${arrowLeftSlider});
		}
	}
	.slick-next:before {
		@media all and (min-width: ${breakpoints.notebook}) {
			content: url(${arrowRightSlider});
		}
	}

	img {
		width: 100%;
	}
`;

const ButtonClick = styled.button`
	padding: 8px 10px;
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 160%;
	color: #874aad;
	border: 2px solid #874aad;
	background: transparent;
	cursor: pointer;
	&:hover,
	&:focus {
		color: #ffffff;
		background: #874aad;
		transition: 2s;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 2rem;
	}
`;

const BtnWrap = styled.div`
	text-align: center;
`;
const AdvantagesDiv = styled.div`
	margin: 32px 0;
	@media all and (min-width: ${breakpoints.notebook}) {
		width: 50%;
		padding-right: 40px;
		margin: 0;
	}
`;
const LowerDiv = styled.div`
	margin: 32px 0;
	@media all and (min-width: ${breakpoints.notebook}) {
		width: 50%;
		padding-left: 40px;
		margin: 0;
	}
`;

const BlockWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-top: 12px;
	margin-bottom: 12px;
	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
		margin-bottom: 80px;
		margin-top: 90px;
	}
	img {
		width: 100%;
		filter: drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.15));
	}
`;
const MainImgWrap = styled.div`
	background: ${colors.grey.background};
	text-align: center;
	padding: 16px;

	@media all and (min-width: ${breakpoints.tablet}) {
		padding-top: 36px;
		padding-left:22%;
		padding-right: 22%;
	}
	img {
		max-width: 100%;
	}
`;
const ProjectDetailsContainer = styled.div`
	font-size: 1rem;
	margin-bottom: 48px;
	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 1.5rem;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 24px;
		margin-top: 32px;
	}
`;
