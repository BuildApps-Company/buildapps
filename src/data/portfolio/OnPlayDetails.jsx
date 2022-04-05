import React from 'react';
import styled from 'styled-components';
import { H3, H4 } from '../../styles/styled-headers';
import mainImg from '../../../static/images/projects/onplay/main.png';
import detailsImg1 from '../../../static/images/projects/onplay/details1.jpg';
import detailsImg2 from '../../../static/images/projects/onplay/details2.jpg';
import detailsImg3 from '../../../static/images/projects/onplay/details3.jpg';
import { ProjectDetailsContainer } from '../../styles/portfolio';

export const OnPlayEn = () => (
	<ProjectDetailsContainer>
		<H3>What tasks did we get?</H3>
		<p>
			The customer contacted us to develop an entertaining application that
			would allow users to earn money. The product’s purpose was to attract as
			many users as possible and let them interact on the platform with the
			possibility of receiving a mutual benefit.
		</p>
		<p>To achieve this goal, we set several tasks:</p>
		<ul>
			<li>developing an app for the iOS and Android platforms;</li>
			<li>software quality assurance through QA and testing;</li>
			<li>
				technical support of the app during development and after release;
			</li>
		</ul>
		<p>
			We had to develop an app that would allow users to relax and earn money at
			the same time. Its interface was supposed to attract users with simplicity
			and consistency, and the design should correspond to the purpose of the
			program: to be bright, optimistic, and memorable.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={mainImg} alt="picture1" />
		</ImageWrap>
		<H3>How was the workflow organized?</H3>
		<p>
			Today, work on PrankChat is still ongoing. We use the Agile methodology to
			develop the product. It allows the customer to coordinate the work of the
			BuildApps. Another good feature is that it is possible to make changes to
			the project, conduct intermediate testing, and introduce additional
			functions during the development process.
		</p>
		<p>
			The app is a kind of social network for entertainment. It provides for the
			performance of tasks for a monetary reward and adding video content. After
			the main functionality was completed, we added a new feature at the
			customer's request: creating contests with prize funds, determining the
			winners, and distributing the cash prize between them.
		</p>
		<p>A team of 3 people is working on the project:</p>
		<ul>
			<li>
				frontend and backend developer: introduces new components and functions
				into the app, creates the user interface;
			</li>
			<li>tester: controls the quality of the final product;</li>
			<li>
				project-manager: checks the implementation of the project, looks for
				solutions to emerging problems, and communicates with the customer.
			</li>
		</ul>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg1} alt="picture1" />
		</ImageWrap>
		<H3>How are we moving towards our goals?</H3>
		<p>
			To satisfy the demands of today's discerning users, we needed to create a
			truly unique app that would help the customer stand out from the
			competition.
		</p>
		<p>What did we do?</p>
		<ul>
			<li>
				We discussed the customer’s expectations from the final product, i.e.,
				what goals they had to achieve.
			</li>
			<li>
				We developed an app that allows users to interact, make online payments
				(fees for participation in contests), and embed video content.
			</li>
		</ul>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg2} alt="picture4" />
		</ImageWrap>
		<H4>What results did we achieve?</H4>
		<p>
			As work on the project continues, it is too early to talk about the final
			results. However, the app is already available to the customer. It
			provides maximum interactivity and is scalable. Our software is adapted to
			the two most popular platforms, iOS and Android, which helps the customer
			to reach the maximum audience.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg3} alt="picture3" />
		</ImageWrap>
		<H3>Conclusion</H3>
		<p>
			BuildApps is working on the PrankChat project, which, after redesign and
			improvements, has been renamed to OnPlay. We strictly adhere to the agreed
			deadlines, provide the client with reports on the intermediate results,
			and adapt to new requirements as much as possible.
		</p>
		<p>
			<strong>
				Do you want to create an app where the communication and interaction
				between users will generate income? Invest in the development of
				high-quality software from BuildApps and implement any business idea at
				no extra cost!
			</strong>
		</p>
	</ProjectDetailsContainer>
);

export const OnPlayRu = () => (
	<ProjectDetailsContainer>
		<H3>Какие задачи перед нами стояли?</H3>
		<p>
			Клиент обратился к нам для разработки развлекательного приложения, при
			помощи которого еще и можно заработать. Его целью было привлечение к
			новому продукту как можно большего количества пользователей и их
			взаимодействие на платформе с возможностью получения взаимной выгоды.
		</p>
		<p>Для реализации этой цели мы выстроили для себя целый ряд задач:</p>
		<ul>
			<li>разработка приложения под платформы iOs и Android;</li>
			<li>обеспечение качества ПО при помощи проведения QA и тестирования;</li>
			<li>
				техническая поддержка приложения в процессе разработки и после его
				релиза;
			</li>
		</ul>
		<p>
			Нам предстояло разработать приложение, которое позволило бы пользователям
			отдыхать и зарабатывать одновременно. Его интерфейс должен был привлекать
			пользователей простотой и логичностью, а оформление соответствовать
			назначению программы — быть ярким, оптимистичным, запоминающимся.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={mainImg} alt="picture1" />
		</ImageWrap>
		<H3>Как организован рабочий процесс?</H3>
		<p>
			В данный момент работы над проектом все еще продолжаются. При разработке
			этого приложения мы руководствуемся методологией Agile. Это позволяет
			заказчику координировать работу команды BuildApps — в процессе разработки
			есть возможность вносить изменения в проект, проводить промежуточное
			тестирование, создавать дополнительные функции.
		</p>
		<p>
			Разрабатываемое приложение представляет собой своеобразную социальную сеть
			для развлечений. Здесь предусмотрено выполнение заданий за денежное
			вознаграждение, добавление видео-контента. По просьбе заказчика уже после
			разработки основного функционала нами была добавлена новая возможность —
			создание конкурсов с определенным призовым фондом, определением
			победителей и распределением между ними денежного выигрыша.
		</p>
		<p>Над проектом работает команда из 3 человек:</p>
		<ul>
			<li>
				frontend и backend-разработчик — отвечает за создание компонентов и
				функций приложения, занимается созданием пользовательского интерфейса;
			</li>
			<li>
				тестировщик — от этого специалиста зависит качество конечного продукта;
			</li>
			<li>
				project-manager — контролирует выполнение проекта, ищет решения
				возникающих проблем, коммуницирует с заказчиком.
			</li>
		</ul>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg1} alt="picture1" />
		</ImageWrap>
		<H3>Как мы идем к поставленным целям?</H3>
		<p>
			Чтобы удовлетворить запросы современных взыскательных пользователей, нам
			необходимо было создать действительно уникальное приложение, функционал
			которого позволил бы отстроиться от конкурентов.
		</p>
		<p>Что мы сделали?</p>
		<ul>
			<li>
				Обсудили с клиентом его ожидания от финального продукта — каких целей он
				должен был достичь.
			</li>
			<li>
				Разработали приложение, которое позволяет взаимодействовать
				пользователям, вносить онлайн-платежи (взносы за участие в конкурсах) и
				поддерживает добавление видео-контента.
			</li>
		</ul>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg2} alt="picture4" />
		</ImageWrap>
		<H4>Каких результатов мы достигли?</H4>
		<p>
			Поскольку работы над проектом продолжаются, говорить об окончательных
			результатах еще рано. Однако уже сейчас клиенту доступно приложение,
			обладающее максимальной интерактивностью и поддающееся масштабированию.
			Наше ПО адаптировано под две самые популярные платформы — iOS и Android,
			что позволит заказчику охватить максимальную аудиторию.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg3} alt="picture3" />
		</ImageWrap>
		<H3>Заключение</H3>
		<p>
			Команда BuildApps в работе над проектом PrankChat, который в результате
			редизайна и доработок был переименован в OnPlay, четко придерживается
			оговоренных дедлайнов. Также мы предоставляем клиенту отчеты о
			промежуточных результатах нашей работы и стараемся максимально
			подстроиться под его требования.
		</p>
		<p>
			<strong>
				Хотите создать приложение, в котором доход будет приносить общение и
				взаимодействие пользователей? Инвестируйте в разработку качественного ПО
				от BuildApps — воплощайте любые бизнес-идеи без лишних трат!
			</strong>
		</p>
	</ProjectDetailsContainer>
);

export const OnPlayUa = () => (
	<ProjectDetailsContainer>
		<H3>Які завдання стояли перед нами?</H3>
		<p>
			Клієнт звернувся до нас для розробки розважального додатку, за допомогою
			якого ще можна заробити. Його метою було залучення до нового продукту
			якомога більшої кількості користувачів та їхньої взаємодії на платформі з
			можливістю отримання взаємної вигоди.
		</p>
		<p>Для реалізації цієї мети ми вибудували собі цілу низку завдань:</p>
		<ul>
			<li>розробка програми під платформи iOs та Android;</li>
			<li>забезпечення якості ПЗ за допомогою проведення QA та тестування;</li>
			<li>
				технічна підтримка програми у процесі розробки та після його релізу;
			</li>
		</ul>
		<p>
			Нам потрібно було розробити програму, яка дозволила б користувачам
			відпочивати та заробляти одночасно. Його інтерфейс повинен був
			приваблювати користувачів простотою та логічністю, а оформлення
			відповідати призначенню програми – бути яскравим, оптимістичним, таким, що
			запам'ятовується.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={mainImg} alt="picture1" />
		</ImageWrap>
		<H3>Як організовано робочий процес?</H3>
		<p>
			Наразі роботи над проектом все ще продовжуються. Під час розробки цієї
			програми ми керуємося методологією Agile. Це дозволяє замовнику
			координувати роботу команди BuildApps — у процесі розробки можна вносити
			зміни до проекту, проводити проміжне тестування, створювати додаткові
			функції.
		</p>
		<p>
			Додаток, що розробляється, являє собою своєрідну соціальну мережу для
			розваг. Тут передбачено виконання завдань за грошову винагороду, додавання
			відеоконтенту. На прохання замовника вже після розробки основного
			функціоналу нами було додано нову можливість — створення конкурсів із
			певним призовим фондом, визначенням переможців та розподілом між ними
			грошового виграшу.
		</p>
		<p>Над проектом працює команда із 3 осіб:</p>
		<ul>
			<li>
				frontend і backend-розробник - відповідає за створення компонентів і
				функцій програми, займається створенням інтерфейсу користувача;
			</li>
			<li>
				тестувальник – від цього фахівця залежить якість кінцевого продукту;
			</li>
			<li>
				project-manager — контролює виконання проекту, шукає вирішення проблем,
				комунікує із замовником.
			</li>
		</ul>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg1} alt="picture1" />
		</ImageWrap>
		<H3>Як ми йдемо до поставлених цілей?</H3>
		<p>
			Щоб задовольнити запити сучасних вимогливих користувачів, нам необхідно
			було створити справді унікальну програму, функціонал якої дозволив би
			відбудуватися від конкурентів.
		</p>
		<p>Що ми зробили?</p>
		<ul>
			<li>
				Обговорили з клієнтом його очікування від фінального продукту — яких
				цілей він мав досягти.
			</li>
			<li>
				Розробили програму, яка дозволяє взаємодіяти користувачам, вносити
				онлайн-платежі (внески за участь у конкурсах) та підтримує додавання
				відео-контенту.
			</li>
		</ul>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg2} alt="picture4" />
		</ImageWrap>
		<H4>Яких результатів ми досягли?</H4>
		<p>
			Оскільки роботи над проектом продовжуються, говорити про остаточні
			результати ще зарано. Проте вже зараз клієнту доступний додаток, що має
			максимальну інтерактивність і піддається масштабуванню. Наше програмне
			забезпечення адаптоване під дві найпопулярніші платформи - iOS і Android,
			що дозволить замовнику охопити максимальну аудиторію.
		</p>
		<ImageWrap>
			<img class="iphonediscount" src={detailsImg3} alt="picture3" />
		</ImageWrap>
		<H3>Висновок</H3>
		<p>
			Команда BuildApps у роботі над проектом PrankChat, який в результаті
			редизайну та доопрацювань був перейменований у OnPlay, чітко дотримується
			обумовлених дедлайнів. Також ми надаємо клієнту звіти про проміжні
			результати нашої роботи та намагаємось максимально підлаштуватись під його
			вимоги.
		</p>
		<p>
			<strong>
				Бажаєте створити програму, в якій дохід приноситиме спілкування та
				взаємодію користувачів? Інвестуйте в розробку якісного програмного
				забезпечення від BuildApps - втілюйте будь-які бізнес-ідеї без зайвих
				витрат!
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
