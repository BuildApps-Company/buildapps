import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { H3 } from '../../styles/styled-headers';
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
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from '../../styles/colors';

export const AskodDetailsEn = () => {
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
		<>
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
								priority tasks. Among the requirements for
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
		</>
	);
};

export const AskodDetailsRu = () => {
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
		<>
			<MainImgWrap>
				<img src={mainImg} alt="mainimg" />
				<GreyText>
          Askod - это онлайн-система электронного документооборота, позволяющая
          организовать работу с электронными документами (создание, изменение,
          поиск), а также взаимодействие между cотрудниками (передача документов,
          выдача задач, отправка уведомлений и т. Д.). Также такая система
          называется СЭД (Системы электронного документооборота).
				</GreyText>
			</MainImgWrap>
			<AskodWrap>
				<MainPageImg>
					<img src={mainpageImg} alt="mainpage" />
				</MainPageImg>
				<ProjectDetailsContainer>
					<BlockWrap>
						<AdvantagesDiv>
							<H3>Преимущества</H3>
							<p>
                Прозрачность бизнес-процессов. Благодаря системе можно отслеживать
                все шаги в организации. Бизнес-процессы становятся полностью
                прозрачными для управления и их легче контролировать.
							</p>
						</AdvantagesDiv>
						<ImgWrap>
							<img src={detailsImg} alt="detailsImg" />
						</ImgWrap>
					</BlockWrap>
					<div>
						<H3>Высокий уровень исполнительской дисциплины</H3>
						<p>
              По статистике, 20% полученных заданий не выполняются ответственными
              за них сотрудниками. Имея полный контроль над всеми этапами работы,
              ECM-система напрямую влияет на исполнительскую дисциплину сотрудников.
						</p>
					</div>
					<BlockWrap>
						<ImgWrap>
							<img src={screenshot_4} alt="screenshot_contract" />
						</ImgWrap>
						<LowerDiv>
							<H3>Снижение затрат на менеджеров и других сотрудников</H3>
							<p>
                Система сокращает время, которое сотрудники тратят практически на все
                рутинные операции с документами: создание, поиск, утверждение и так далее.
                Ускоряется документооборот. В результате все процессы в организации
                проходят быстрее.
							</p>
						</LowerDiv>
					</BlockWrap>
					<BlockWrap>
						<AdvantagesDiv>
							<H3>Обеспечивается конфиденциальность информации.</H3>
							<p>
                Нарушение целостности данных может нанести организации миллионы убытков.
                В отличие от традиционного «бумажного» документооборота, ECM-система
                предоставляет доступ к документам строго в соответствии с назначенными
                правами пользователя. Все действия над документом (чтение, изменение,
                подписание) фиксируются.
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
							<H3>Соответсвие требованиям стандартоа ISO 9000.</H3>
							<p>
                Построение менеджмента качества стало одной из приоритетных задач. Среди требований к системе менеджмента качества
                (QMS) - прозрачно поставленный рабочий процесс, а также
                информационное взаимодействие между сотрудниками.
							</p>
						</LowerDiv>
					</BlockWrap>
					{isOpen && (
						<>
							<BlockWrap>
								<AdvantagesDiv>
									<H3>Легко вводить новшества и обучать новичков</H3>
									<p>
								  	Благодаря системе уведомлений, построенной на базе ECM-системы,
                    вы можете быстро довести новые правила работы до всех сотрудников.
                    Время обучения новых сотрудников сокращается за счет быстрого
                    поиска необходимой информации (положения, инструкции и т.д.).
                    Маршруты и шаблоны документов легко меняются, после чего сотрудники
                    автоматически начинают работать по-новому.
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
									<H3>Больше конкурентных преимуществ</H3>
									<p>
                    Система ECM напрямую влияет на конкурентные преимущества компании
                    перед другими игроками рынка. Скорость и качество обслуживания
                    клиентов повышаются за счет быстрого движения информационных
                    потоков и точного контроля всех процессов. Даже самое крупное
                    предприятие становится более мобильным и менее зависимым от
                    некоторых «незаменимых» сотрудников.
									</p>
								</LowerDiv>
							</BlockWrap>
						</>
					)}
					{!isOpen && (
						<BtnWrap>
							<ButtonClick onClick={toogleList}>Показать больше</ButtonClick>
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
		</>
	);
};

export const AskodDetailsUa = () => {
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
		<>
			<MainImgWrap>
				<img src={mainImg} alt="mainimg" />
				<GreyText>
          Аскод — це онлайн-система електронного документообігу, яка дозволяє
          організувати роботу з електронними документами (створення,
          модифікація, пошук), а також взаємодію між співробітниками
          (передача документів, видача завдань, відправка повідомлень тощо).
          Також така система називається EDMS (Electronic Document
          Management Systems).
				</GreyText>
			</MainImgWrap>
			<AskodWrap>
				<MainPageImg>
					<img src={mainpageImg} alt="mainpage" />
				</MainPageImg>
				<ProjectDetailsContainer>
					<BlockWrap>
						<AdvantagesDiv>
							<H3>Переваги</H3>
							<p>
                Прозорість бізнес-процесів. Завдяки системі можна
                контролювати всі кроки в організації. Бізнес-процеси
                стають абсолютно прозорими для керівництва і їх легше
                контролювати.
							</p>
						</AdvantagesDiv>
						<ImgWrap>
							<img src={detailsImg} alt="detailsImg" />
						</ImgWrap>
					</BlockWrap>
					<div>
						<H3>Високий рівень виконавчої дисципліни</H3>
						<p>
              За статистикою, 20% отриманих завдань не виконуються
              відповідальними за них працівниками. При повному контролі
              за всіма етапами роботи, система ECM безпосередньо впливає
              на службову дисципліну співробітників.
						</p>
					</div>
					<BlockWrap>
						<ImgWrap>
							<img src={screenshot_4} alt="screenshot_contract" />
						</ImgWrap>
						<LowerDiv>
							<H3>Нижчі витрати на оплату праці для керівників і співробітників</H3>
							<p>
                Система скорочує час, який співробітники витрачають
                практично на всі рутинні операції з документами: створення,
                пошук, затвердження тощо. Прискорюється документообіг. І в
                результаті всі процеси в організації проходять швидше.
							</p>
						</LowerDiv>
					</BlockWrap>
					<BlockWrap>
						<AdvantagesDiv>
							<H3>Забезпечена конфіденційність інформації</H3>
							<p>
                Порушення цілісності даних може спричинити мільйонні збитки
                організації. На відміну від традиційного «паперового» робочого
                процесу, система ECM забезпечує доступ до документів суворо
                відповідно до призначених прав користувача. Усі дії з
                документом (читання, зміна, підписання) записуються.
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
							<H3>Відповідність вимогам стандарту ISO 9000</H3>
							<p>
                Постановка управління якістю зараз стала одним з пріоритетних
                завдань. Серед вимог до системи менеджменту
                якості (QMS) — прозоро поставлений робочий процес, а також
                інформаційна взаємодія між співробітниками.
							</p>
						</LowerDiv>
					</BlockWrap>
					{isOpen && (
						<>
							<BlockWrap>
								<AdvantagesDiv>
									<H3>Легко впроваджувати інновації та навчати новачків</H3>
									<p>
                    Завдяки системі сповіщень, побудованій на базі системи ECM,
                    можна швидко довести нові правила роботи до всіх співробітників.
                    Час навчання нових працівників скорочується за рахунок швидкого
                    пошуку необхідної інформації (положення, інструкції тощо).
                    Маршрути та шаблони документів легко змінюються, після чого
                    співробітники автоматично починають працювати по-новому.
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
									<H3>Більше конкурентних переваг</H3>
									<p>
                    Система ECM безпосередньо впливає на конкурентні переваги компанії
                    над іншими гравцями ринку. Швидкість і якість обслуговування
                    клієнтів підвищується за рахунок швидкого руху інформаційних
                    потоків і точного контролю всіх процесів. Навіть найбільше
                    підприємство стає мобільнішим і менш залежним від деяких «незамінних»
                    співробітників. 
									</p>
								</LowerDiv>
							</BlockWrap>
						</>
					)}
					{!isOpen && (
						<BtnWrap>
							<ButtonClick onClick={toogleList}>Показати більше</ButtonClick>
						</BtnWrap>
					)}
				</ProjectDetailsContainer>
				<BlockSlider>
					<Slider {...settings}>
						<div>
              <img src={mainImg} alt="mainimg" />
            </div>
						<div>
              <img src={detailsImg} alt="detailsImg" />
            </div>
						<div>
              <img src={screenshot_4} alt="screenshot_contract" />
            </div>
						<div>
              <img src={login} alt="login" />
            </div>
						<div>
              <img src={screenshot_contract} alt="screenshot_contract" />
            </div>
						<div>
              <img src={screenshot_contract2} alt="screenshot_contract2" />
            </div>
						<div>
              <img src={screenshot_3} alt="screenshot_3" />
            </div>
					</Slider>
				</BlockSlider>
			</AskodWrap>
		</>
	);
};

const AskodWrap = styled.div`
	padding-left: 16px;
	padding-right: 16px;
	@media all and (min-width: ${breakpoints.tablet}) {
		padding-left: 18%;
		padding-right: 18%;
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
		max-height: 612px;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		margin-top: 128px;
		margin-bottom: 100px;
	}
	.slick-prev {
		display: none !important;
		@media all and (min-width: ${breakpoints.notebook}) {
			display: block !important;
			left: -12%;
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
		display: none !important;
		@media all and (min-width: ${breakpoints.notebook}) {
			display: block !important;
			right: -6%;
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
	margin-top: 22px;
	@media all and (min-width: ${breakpoints.notebook}) {
		width: 50%;
		padding-right: 40px;
		margin: 0;
	}
`;
const LowerDiv = styled.div`
	margin-top: 22px;
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
		padding-left: 18%;
		padding-right: 18%;
	}
	img {
		max-width: 100%;
	}
`;
const ProjectDetailsContainer = styled.div`
	font-size: 1rem;
	margin-bottom: 26px;
	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 1.5rem;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 24px;
		margin-top: 32px;
	}
`;
