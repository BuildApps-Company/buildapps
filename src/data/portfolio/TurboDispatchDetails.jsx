import React from 'react';
import styled from 'styled-components';
import { H3 } from '../../styles/styled-headers';
import { ContentContainer } from '../../styles/container';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import brandBook from '../../../static/images/projects/turbodispatch/brandbook.jpg';
import devices from '../../../static/images/projects/turbodispatch/devices.jpg';
import car from '../../../static/images/projects/turbodispatch/Car.jpg';
import mac from '../../../static/images/projects/turbodispatch/mac.png';
import iPhone from '../../../static/images/projects/turbodispatch/iPhone.jpg';
import branding from '../../../static/images/projects//turbodispatch/Branding.jpg';

export const TurboDiaspachEn = () => (
	<PageContainer>
		<ContentContainer>
			<ArticleTopBlock>
				<H3>Task and Goals</H3>
				<DescriptionText>
					It is necessary to develop the design of a car hauling transportation
					management system, which includes: a website, an administrative part,
					a mobile application, as well as a brand for the entire company.
				</DescriptionText>
			</ArticleTopBlock>
			<ArticleBlock>
				<TextContent>
					<H3>Brandbook</H3>
					<DescriptionText>
						A brand book was developed, which included a description of the
						brand, its positioning, colors. A logo and identity was developed.
						In addition, the rules of use and general information about the
						company and the product are prescribed.
					</DescriptionText>
				</TextContent>
				<ImageContent>
					<img src={brandBook} alt="Brand Book" />
				</ImageContent>
			</ArticleBlock>
			<ArticleBlock>
				<ImageContent>
					<img src={devices} alt="Devices" />
				</ImageContent>
				<TextContent>
					<H3>Available to both Carriers and Shippers</H3>
					<DescriptionText>
						A service that allows Carriers and Consignors to quickly and
						conveniently move vehicles on the same vehicle platform.
					</DescriptionText>
				</TextContent>
			</ArticleBlock>
		</ContentContainer>
		<BrandingPrevievBlock>
			<TrippleImageBlock>
				<img src={branding} alt="branding" />
			</TrippleImageBlock>
			<CarBlock>
				<img src={car} alt="car" />
			</CarBlock>
		</BrandingPrevievBlock>
		<ContentContainer>
			<ArticleBlock>
				<TextContent>
					<H3>TMS System</H3>
					<DescriptionText>
						Ability to manage orders through an advanced TMS system. Check
						orders and their status, manage drivers and their trips, track
						shipments, fine-tune and automate the system.
					</DescriptionText>
				</TextContent>
				<ImageContent>
					<img src={mac} alt="Mac" />
				</ImageContent>
			</ArticleBlock>
			<ArticleBlock>
				<ImageContent>
					<img src={iPhone} alt="iPhone" />
				</ImageContent>
				<TextContent>
					<H3>Mobile application</H3>
					<DescriptionText>
						The application is designed for carriers for the fastest and most
						convenient work with the system. You can take pictures of cars, mark
						damage, describe all the details, leave comments, take new orders.
						The application also allows you to confirm the act of transfer of
						the vehicle by signing and photographs. The application also tracks
						the status of orders.
					</DescriptionText>
				</TextContent>
			</ArticleBlock>
		</ContentContainer>
	</PageContainer>
);

export const TurboDiaspachRu = () => (
	<PageContainer>
		<ContentContainer>
			<ArticleTopBlock>
				<H3>Задача и цели</H3>
				<DescriptionText>
					Необходимо разработать дизайн системы управления автоперевозками,
					которая включает в себя: сайт, административную часть, мобильное
					приложение, а также бренд для всей компании.
				</DescriptionText>
			</ArticleTopBlock>
			<ArticleBlock>
				<TextContent>
					<H3>Брендбук</H3>
					<DescriptionText>
						Был разработан брендбук, в который вошли описание бренда, его
						позиционирование, цвета. Разработан логотип и фирменный стиль. Кроме
						того, прописываются правила использования и общая информация о
						компании и продукте.
					</DescriptionText>
				</TextContent>
				<ImageContent>
					<img src={brandBook} alt="Brand Book" />
				</ImageContent>
			</ArticleBlock>
			<ArticleBlock>
				<ImageContent>
					<img src={devices} alt="Devices" />
				</ImageContent>
				<TextContent>
					<H3>Доступно как для перевозчиков, так и для грузоотправителей</H3>
					<DescriptionText>
						Услуга, позволяющая Перевозчикам и Грузоотправителям быстро и удобно
						перемещать автомобили на одной платформе.
					</DescriptionText>
				</TextContent>
			</ArticleBlock>
		</ContentContainer>
		<BrandingPrevievBlock>
			<TrippleImageBlock>
				<img src={branding} alt="branding" />
			</TrippleImageBlock>
			<CarBlock>
				<img src={car} alt="car" />
			</CarBlock>
		</BrandingPrevievBlock>
		<ContentContainer>
			<ArticleBlock>
				<TextContent>
					<H3>Система ТМС</H3>
					<DescriptionText>
						Возможность управлять заказами через продвинутую систему TMS.
						Проверяйте заказы и их статус, управляйте водителями и их поездками,
						отслеживайте поставки, настраивайте и автоматизируйте систему.
					</DescriptionText>
				</TextContent>
				<ImageContent>
					<img src={mac} alt="Mac" />
				</ImageContent>
			</ArticleBlock>
			<ArticleBlock>
				<ImageContent>
					<img src={iPhone} alt="iPhone" />
				</ImageContent>
				<TextContent>
					<H3>Мобильное приложение</H3>
					<DescriptionText>
						Приложение предназначено для перевозчиков для максимально быстрой и
						удобной работы с системой. Вы можете фотографировать автомобили,
						отмечать повреждения, описывать все детали, оставлять комментарии,
						принимать новые заказы. Приложение также позволяет подтвердить акт
						передачи автомобиля подписями и фотографиями. Приложение также
						отслеживает статус заказов.
					</DescriptionText>
				</TextContent>
			</ArticleBlock>
		</ContentContainer>
	</PageContainer>
);

export const TurboDiaspachUa = () => (
	<PageContainer>
		<ContentContainer>
			<ArticleTopBlock>
				<H3>Завдання та цілі</H3>
				<DescriptionText>
					Необхідно розробити дизайн системи управління перевезеннями вантажних
					автомобілів, яка включає: веб-сайт, адміністративну частину, мобільний
					додаток, а також бренд для всієї компанії.
				</DescriptionText>
			</ArticleTopBlock>
			<ArticleBlock>
				<TextContent>
					<H3>Брендбук</H3>
					<DescriptionText>
						Було розроблено брендбук, який містив опис бренду, його
						позиціонування, кольори. Розроблено логотип та айдентика. Крім того,
						прописуються правила користування та загальна інформація про
						компанію та продукт.
					</DescriptionText>
				</TextContent>
				<ImageContent>
					<img src={brandBook} alt="Brand Book" />
				</ImageContent>
			</ArticleBlock>
			<ArticleBlock>
				<ImageContent>
					<img src={devices} alt="Devices" />
				</ImageContent>
				<TextContent>
					<H3>Доступно як для перевізників, так і для відправників</H3>
					<DescriptionText>
						Послуга, яка дозволяє перевізникам і відправникам швидко та зручно
						переміщувати транспортні засоби на одній платформі.
					</DescriptionText>
				</TextContent>
			</ArticleBlock>
		</ContentContainer>
		<BrandingPrevievBlock>
			<TrippleImageBlock>
				<img src={branding} alt="branding" />
			</TrippleImageBlock>
			<CarBlock>
				<img src={car} alt="car" />
			</CarBlock>
		</BrandingPrevievBlock>
		<ContentContainer>
			<ArticleBlock>
				<TextContent>
					<H3>Система TMS</H3>
					<DescriptionText>
						Можливість керувати замовленнями через розширену систему TMS.
						Перевіряйте замовлення та їх статус, керуйте водіями та їх
						поїздками, відстежуйте відправлення, налаштовуйте та автоматизуйте
						систему.
					</DescriptionText>
				</TextContent>
				<ImageContent>
					<img src={mac} alt="Mac" />
				</ImageContent>
			</ArticleBlock>
			<ArticleBlock>
				<ImageContent>
					<img src={iPhone} alt="iPhone" />
				</ImageContent>
				<TextContent>
					<H3>Мобільний додаток</H3>
					<DescriptionText>
						Додаток призначений для перевізників для максимально швидкої та
						зручної роботи з системою. Ви можете фотографувати автомобілі,
						позначати пошкодження, описувати всі деталі, залишати коментарі,
						приймати нові замовлення. Також додаток дозволяє підтвердити акт
						передачі транспортного засобу підписом і фотографіями. Додаток також
						відстежує статус замовлень.
					</DescriptionText>
				</TextContent>
			</ArticleBlock>
		</ContentContainer>
	</PageContainer>
);

const PageContainer = styled.div`
	display: block;
	overflow: hidden;
`;

const CarBlock = styled.div`
	display: block;
	width: 100%;
	img {
		width: 100%;
	}

	@media (min-width: ${breakpoints.notebook}) {
		width: 50%;

		img {
			width: 100%;
		}
	}
`;

const TrippleImageBlock = styled.div`
	display: block;
	width: 100%;

	img {
		display: block;
		width: 100%;
	}

	@media (min-width: ${breakpoints.notebook}) {
		width: 50%;

		img {
			width: 100%;
		}
	}
`;

const BrandingPrevievBlock = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100vw;
	overflow: hidden;
	margin-bottom: 150px;

	@media (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
	}
`;

const ArticleTopBlock = styled.article`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	margin: 120px auto;
	text-align: center;
`;

const TextContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 600px;
`;

const ImageContent = styled.div`
	display: block;

	img {
		max-width: 622px;
		max-height: 420px;
	}

	@media (max-width: ${breakpoints.tablet}) {
		height: auto;
	}
`;

const ArticleBlock = styled.article`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 120px auto;
	text-align: left;

	@media (max-width: ${breakpoints.notebook}) {
		flex-direction: column;
		gap: 35px;
	}
`;

const DescriptionText = styled.span`
	font-size: 1.2rem;
	color: ${colors.Font};
	margin-top: 16px;
`;
