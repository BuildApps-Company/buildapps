import React from 'react';
import styled from 'styled-components';

import { H3, H4 } from '../../styles/styled-headers';
import mainImg from '../../../static/images/projects/turbodispatch/main.png';
import detailsImg1 from '../../../static/images/projects/turbodispatch/details1.png';
import detailsImg2 from '../../../static/images/projects/turbodispatch/details2.png';
import detailsImg3 from '../../../static/images/projects/turbodispatch/details3.gif';
import { ProjectDetailsContainer } from '../../styles/portfolio';

export const TurboDiaspachEn = () => (
	<ProjectDetailsContainer>
		<H3>Who is our client?</H3>
		<p>
			After the pandemic started and the self-isolation regime was set, a
			company specializing in renting and selling cars approached us. They
			needed help with introducing the feature of buying/renting cars online
			without visiting a car dealership.
		</p>
		<p>
			To do this, it was necessary to decide how buyers would pick up their
			purchases. It is possible to do in several ways. A car can be delivered to
			the client by the company itself if its network covers the region. Or the
			buyer can pick it up from the contactless pick-up point equipped with an
			offline cash desk. If the client lives in another region, a group of
			carrier companies provides contactless delivery of a new car.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={mainImg} alt="picture1" />
		</ImageWrap>
		<H3>What business problems did we have to solve?</H3>
		<p>
			When setting goals, BuildApps focused on the key business goals and
			individual requirements of the company:
		</p>
		<ol>
			<li>increase the number of customers who buy or rent cars;</li>
			<li>
				retain current company’s customers and strengthen their loyalty by
				offering the unique features of the developed app.
			</li>
		</ol>
		<p>As a result, we formed the following list of priority tasks:</p>
		<ul>
			<li>App domain analytics</li>
			<li>UI/UX design of a mobile app</li>
			<li>Developing a mobile product for two platforms.</li>
		</ul>
		<p>
			The performance of these works was supposed to allow the customer to stand
			out among competitors in his narrow niche.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg1} alt="picture1" />
		</ImageWrap>
		<H4>How we organized the workflow</H4>
		<p>
			A notable feature of working on the TurboDispatch project was the need to
			create an application design for two platforms, iOS and Android. After
			discussing all the operational issues with the client, we selected the
			specialists to work on the project, a designer and an analyst. For the
			final product to meet the customer's requirements as much as possible, we
			maintained constant communication in the format of both personal meetings
			and telephone conversations.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg2} alt="picture4" />
		</ImageWrap>
		<H4>What methodology did we use in our work?</H4>
		<p>We used the Agile methodology, which allowed us to:</p>
		<ul>
			<li>
				Ensure transparent cooperation, providing the customer with access to
				intermediate results
			</li>
			<li>
				Distribute responsibilities at each stage of scaling and product
				deployment;
			</li>
			<li>Simplify analytics;</li>
			<li>
				Avoid problems associated with changing market trends and user needs.
			</li>
		</ul>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg3} alt="picture3" />
		</ImageWrap>
		<H4>What did we do to achieve the customer's goals?</H4>
		<p>
			During the cooperation with the customer, BuildApps strictly followed the
			work schedule and did not violate deadlines. We carried out preparatory
			work and developed the app design for buying/renting interfaces.
		</p>
		<p>We completed the following works:</p>
		<ul>
			<li>
				analysis of the activities of the customer's competitors and existing
				software in this area;
			</li>
			<li>developing a user-friendly app design;</li>
			<li>
				creating a user interface that allows users to select a car online,
				arrange for its delivery, and track location.
			</li>
		</ul>
		<H4>What results did we achieve?</H4>
		<p>
			The consistent and cooperative work of a team of two specialists resulted
			in implementing several unique ideas related to the technical and
			marketing sides of the project.
		</p>
		<p>Results of our work:</p>
		<ul>
			<li>App design for IOS and Android was developed.</li>
			<li>
				The customer expanded the customer base through additional sales
				channels.
			</li>
			<li>
				Car sales and rental increased by 30% due to the features of the
				software.
			</li>
			<li>The project was completed on time.</li>
		</ul>
		<p>
			Thanks to a user-friendly interface, software users can view all the
			details of the car they are interested in. The app provides photos of
			vehicles from different angles, highlighting all damage (if any).
		</p>
		<H3>Conclusion</H3>
		<p>
			Working on the TurboDispatch project, the BuildApps team considered all
			the wishes of the customer and the requirements for the product, which
			helped make it as convenient as possible for regular users.{' '}
			<strong>
				Do you dream of your own car-sharing project? Do you want to get
				impressive results without extra investments? Contact BuildApps to
				discuss the details of cooperation!
			</strong>
		</p>
	</ProjectDetailsContainer>
);

export const TurboDiaspachRu = () => (
	<ProjectDetailsContainer>
		<H3>Кто наш клиент?</H3>
		<p>
			После начала пандемии и введения режима самоизоляции к нам обратился
			клиент, компания которого специализируется на аренде и продаже
			автомобилей. Он хотел с нашей помощью реализовать возможность
			покупки/аренды автомобилей онлайн без необходимости посещать автосалон.
		</p>
		<p>
			Для этого нужно было решить, как покупатель сможет забрать свою покупку.
			Сделать это реально несколькими способами. Автомобиль может доставить
			клиенту сама компания в регионах действия сети, покупатель может забрать
			ее самостоятельно из пункта бесконтактной зоны выдачи с офлайн-кассами.
			Если же клиент проживает в других регионах, группа компаний-перевозчиков
			организовывает бесконтактную доставку ему нового автомобиля.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={mainImg} alt="picture1" />
		</ImageWrap>
		<H3>Какие бизнес-задачи нам предстояло решить?</H3>
		<p>
			В процессе постановки задач специалисты BuildApps ориентировались на
			ключевые цели бизнеса и индивидуальные требования компании:
		</p>
		<ol>
			<li>
				увеличить количество клиентов, покупающих и арендующих автомобили;
			</li>
			<li>
				сохранить существующих клиентов компании благодаря уникальным
				возможностям разработанного приложения, усилить их лояльность.
			</li>
		</ol>
		<p>В результате нами был сформирован такой перечень приоритетных задач:</p>
		<ul>
			<li>аналитика предметной области приложения;</li>
			<li>UI/UX дизайн мобильного приложения;</li>
			<li>экспертиза разработки мобильного продукта для двух платформ.</li>
		</ul>
		<p>
			Нам предстояло выполнить ряд работ, которые позволили бы заказчику
			выделиться среди конкурентов в своей узкой нише.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg1} alt="picture1" />
		</ImageWrap>
		<H4>Как мы организовали рабочий процесс </H4>
		<p>
			Особенность работы над проектом TurboDispatch — необходимость создания
			дизайна приложения для двух платформ — IOS и Android. После обсуждения с
			клиентом всех рабочих вопросов мы определили специалистов, которым
			предстояло работать над проектом. Ими стали дизайнер и аналитик. Для того
			чтобы финальный продукт максимально отвечал требованиям клиента, мы
			работали в режиме постоянного общения — в формате как личных встреч, так и
			телефонных переговоров.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg2} alt="picture4" />
		</ImageWrap>
		<H4>Какую методологию мы использовали в работе?</H4>
		<p>
			В сотрудничестве с заказчиком мы использовали методологию Agile, что
			позволило нам:
		</p>
		<ul>
			<li>
				обеспечить прозрачность сотрудничества, предоставив заказчику доступ к
				промежуточным результатам;
			</li>
			<li>
				грамотно распределить обязанности на каждом этапе масштабирования и
				развертывания продукта;
			</li>
			<li>упростить процессы аналитики;</li>
			<li>
				избежать проблем, связанных с меняющимися тенденциями рынка и
				потребностями пользователей.
			</li>
		</ul>
		<H4>Что мы сделали для достижения целей заказчика?</H4>
		<p>
			Во время сотрудничества с клиентом команда BuildApps строго следовала
			составленному плану работ и ни разу не нарушила дедлайны. Мы провели
			подготовительные работы и разработали дизайн приложения для покупки и
			аренды автомобилей.
		</p>
		<p>Что мы сделали:</p>
		<ul>
			<li>
				провели анализ деятельности конкурентов заказчика и существующего
				программного обеспечения в этой сфере;
			</li>
			<li>разработали интуитивно понятный дизайн приложения;</li>
			<li>
				создали пользовательский интерфейс, который позволяет выбрать авто
				онлайн, оформить его доставку и отслеживать местоположение.
			</li>
		</ul>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg3} alt="picture3" />
		</ImageWrap>
		<H4>Каких результатов мы достигли?</H4>
		<p>
			Благодаря последовательной и скооперированной работе небольшой команды из
			двух специалистов был реализован целый ряд уникальных технических и
			маркетинговых идей.
		</p>
		<p>Результаты нашей работы:</p>
		<ul>
			<li>Был разработан дизайн приложения для IOS и Android.</li>
			<li>
				Заказчик смог расширить свою клиентскую базу благодаря дополнительным
				каналам продаж.
			</li>
			<li>
				Уровень продаж и аренды автомобилей вырос на 30% благодаря возможностям
				ПО.
			</li>
			<li>Проект был реализован в установленные сроки.</li>
		</ul>
		<p>
			Благодаря удобному интерфейсу пользователи ПО могут рассмотреть все детали
			интересующего авто — в приложении предусмотрены фотографии автомобилей в
			разных ракурсах, а также отдельно выделены все их повреждения (если
			таковые имеются).
		</p>
		<H3>Заключение</H3>
		<p>
			В работе над проектом TurboDispatch команда BuildApps старалась учесть все
			пожелания клиента и требования к продукту, которые помогли бы сделать его
			максимально удобным для конечного пользователя.{' '}
			<strong>
				Мечтаете о собственном car sharing-проекте? Хотите получить ощутимый
				результат без лишних вложений? Обращайтесь в BuildApps, чтобы обсудить
				детали сотрудничества!
			</strong>
		</p>
	</ProjectDetailsContainer>
);

export const TurboDiaspachUa = () => (
	<ProjectDetailsContainer>
		<H3>Хто наш клієнт?</H3>
		<p>
			Після початку пандемії та запровадження режиму самоізоляції до нас
			звернувся клієнт, компанія якого спеціалізується на оренді та продажу
			автомобілів. Він хотів реалізувати можливість покупки/оренди автомобілів
			онлайн без необхідності відвідувати автосалон.
		</p>
		<p>
			Для цього потрібно було вирішити, як покупець зможе забрати покупку.
			Зробити це реально кількома способами. Автомобіль може доставити клієнту
			компанія в регіонах дії мережі, покупець може забрати її самостійно з
			пункту безконтактної зони видачі з офлайн-касами. Якщо ж клієнт проживає в
			інших регіонах, група компаній-перевізників організовує безконтактну
			доставку нового автомобіля.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={mainImg} alt="picture1" />
		</ImageWrap>
		<H3>Які бізнес-завдання нам потрібно було вирішити?</H3>
		<p>
			У процесі встановлення завдань фахівці BuildApps орієнтувалися на ключові
			цілі бізнесу та індивідуальні вимоги компанії:
		</p>
		<ul>
			<li>
				збільшити кількість клієнтів, які купують та орендують автомобілі;
			</li>
			<li>
				зберегти існуючих клієнтів компанії завдяки унікальним можливостям
				розробленого додатку, посилити їхню лояльність.
			</li>
		</ul>
		<p>В результаті ми сформували такий перелік пріоритетних завдань:</p>
		<ul>
			<li>аналітика предметної галузі програми;</li>
			<li>UI/UX дизайн мобільного додатка;</li>
			<li>експертиза розробки мобільного продукту для двох платформ.</li>
		</ul>
		<p>
			Нам належить виконати ряд робіт, які б замовнику виділитися серед
			конкурентів у своїй вузькій ніші.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg1} alt="picture1" />
		</ImageWrap>
		<H4>Як ми організували робочий процес</H4>
		<p>
			Особливість роботи над проектом TurboDispatch – необхідність створення
			дизайну програми для двох платформ – IOS та Android. Після обговорення з
			клієнтом усіх робочих питань ми визначили фахівців, які мали працювати над
			проектом. Ними стали дизайнер та аналітик. Для того, щоб фінальний продукт
			максимально відповідав вимогам клієнта, ми працювали в режимі постійного
			спілкування — у форматі особистих зустрічей і телефонних переговорів.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg2} alt="picture4" />
		</ImageWrap>
		<H4>Яку методологію ми використали у роботі?</H4>
		<p>
			У співпраці із замовником ми використовували методологію Agile, що
			дозволило нам:
		</p>
		<ul>
			<li>
				забезпечити прозорість співпраці, надавши замовнику доступ до проміжних
				результатів;
			</li>
			<li>
				грамотно розподілити обов'язки на кожному етапі масштабування та
				розгортання продукту;
			</li>
			<li>спростити процеси аналітики;</li>
			<li>
				уникнути проблем, пов'язаних зі змінними тенденціями ринку та потребами
				користувачів.
			</li>
		</ul>
		<H4>Що ми зробили задля досягнення цілей замовника?</H4>
		<p>
			Під час співпраці з клієнтом команда BuildApps суворо дотримувалась
			складеного плану робіт і жодного разу не порушила дедлайни. Ми провели
			підготовчі роботи та розробили дизайн програми для покупки та оренди
			автомобілів.
		</p>
		<p>Що ми зробили:</p>
		<ul>
			<li>
				провели аналіз діяльності конкурентів замовника та існуючого програмного
				забезпечення у цій сфері;
			</li>
			<li>розробили інтуїтивно зрозумілий дизайн програми;</li>
			<li>
				створили інтерфейс, який дозволяє вибрати авто онлайн, оформити його
				доставку і відстежувати місцезнаходження.
			</li>
		</ul>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg3} alt="picture3" />
		</ImageWrap>
		<H4>Яких результатів ми досягли?</H4>
		<p>
			Завдяки послідовній та скооперованій роботі невеликої команди з двох
			фахівців було реалізовано цілу низку унікальних технічних та маркетингових
			ідей.
		</p>
		<p>Результати нашої роботи:</p>
		<ul>
			<li>Було розроблено дизайн програми для IOS та Android.</li>
			<li>
				Замовник зміг розширити свою базу клієнтів завдяки додатковим каналам
				продажів.
			</li>
			<li>
				Рівень продажу та оренди автомобілів виріс на ХХ% завдяки можливостям
				ПЗ.
			</li>
			<li>Проект було реалізовано у встановлений термін.</li>
		</ul>
		<p>
			Завдяки зручному інтерфейсу користувачі ПЗ можуть розглянути всі деталі
			авто, що цікавить - у додатку передбачені фотографії автомобілів в різних
			ракурсах, а також окремо виділені всі їх пошкодження (якщо такі є).
		</p>
		<H3>Висновок</H3>
		<p>
			У роботі над проектом TurboDispatch команда BuildApps намагалася врахувати
			всі побажання клієнта та вимоги до продукту, які б допомогли зробити його
			максимально зручним для кінцевого користувача.{' '}
			<strong>
				Мрієте про свій автомобіль sharing-проект? Бажаєте отримати відчутний
				результат без зайвих вкладень? Звертайтеся до BuildApps, щоб обговорити
				деталі співпраці!
			</strong>
		</p>
	</ProjectDetailsContainer>
);

const ImageWrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	overflow: hidden;
	align-items: center;
`;
