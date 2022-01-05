import React from 'react';
import styled from 'styled-components';

import { H3, H4 } from '../../styles/styled-headers';
import worker1 from '../../../static/images/projects/haski/1_Worker.png';
import worker2 from '../../../static/images/projects/haski/1_Worker_News.png';
import worker3 from '../../../static/images/projects/haski/1_Worker_salary.png';
import orders1 from '../../../static/images/projects/haski/2_orders.png';
import orders2 from '../../../static/images/projects/haski/2_orders_details.png';
import client1 from '../../../static/images/projects/haski/3_Client_details.png';
import client2 from '../../../static/images/projects/haski/3_Client_objects.png';
import pm1 from '../../../static/images/projects/haski/4_1_PM_Clients.png';
import pm2 from '../../../static/images/projects/haski/4_PM_Profile.png';
import { ProjectDetailsContainer } from '../../styles/portfolio';

export const HaskiEn = () => (
	<ProjectDetailsContainer>
		<H3>
      Applications for optimizing work with customers of the Haski company
		</H3>
		<p>
      User loyalty is a priority for most business people. There is a statement that a satisfied customer is the best service consumer. That’s why it is essential to implement the best aspects of the user experience in the client's products. Apps and web resources should solve the tasks assigned, look neat, and be easy to use. We will talk about such an IT product in this case study.
		</p>
    <ImageWrap>
			<img class="haski" src={worker1} alt="picture1" />
      <img class="haski" src={worker2} alt="picture2" />
    </ImageWrap>

		<H3>
      Haski: HR and legacy design issues that we had to fix
		</H3>
		<p>
      Organic ads worked great since all of our previous clients were happy with the work. Representatives of Haski, an outsourcing service operator, contacted our manager and ordered a project. It turned out to be quite challenging for BuildApps because there were some problems with the confusing data exchange system and the lack of structure and documentation. Before starting, we needed to organize the existing data and then develop apps for convenient management of logistics processes.
		</p>
    <p>
      Haski is a leading outsourcing service provider. It has been operating on the market since 2008 and has already firmly established itself in the niche. The company implemented effective personnel management and managed to introduce a structured training of employees, certification of specialists, and scheduled briefings on standards and work methods. The only problem was mediocre software that could not provide the proper level of service for clients and had limited managerial functionality and an inconvenient administrative panel.
		</p>
    <ImageWrap>
			<img class="haski" src={worker3} alt="picture3" />
      <img class="haski" src={worker1} alt="picture4" />
    </ImageWrap>

		<H4>Key tasks that the customer entrusted to us</H4>
		<p>
      The customer decided to scale, so the existing functionality became insufficient. Therefore, it was decided to expand it. Initially, we had little technical documentation and scripts, which made it difficult to precisely understand how to perform the management activities in the app. Communication with clients was also hampered due to the lack of necessary tools. To understand the technical aspects and implement them correctly, we constantly kept in touch with the customer. We were assigned specific tasks:
		</p>
		<ul>
			<li>
        Implement a full-fledged IT product with accounts division for three main roles: client, manager, and administrator.
			</li>
			<li>
        Develop a unique solution to increase brand awareness.
			</li>
			<li>
        Implement functionality for the management apparatus, CRM system, and other tools.
			</li>
		</ul>
		<p>
    Solving these tasks, we must achieve the following results:
		</p>
    <ul>
			<li>
        Improve the quality of customer service.
			</li>
			<li>
        Improve user experience.
			</li>
			<li>
        Delineate functionality.
			</li>
      <li>
        Link users to a service provider.
			</li>
		</ul>
    <p>
      Having accepted the assignment, we assembled a team to analyze the customer's finished product and plan further actions.
		</p>
    <ImageWrap>
      <img class="haski" src={orders1} alt="picture5" />
      <img class="haski" src={orders2} alt="picture6" />
    </ImageWrap>

		<H4>4 months deadline and technical problems: rebuilding the database structure and developing software for work</H4>
		<p>
      Having examined the client's solution, we detected a lot of problems to be urgently resolved. The project was built with a tech stack that did not quite match the customer's business objectives, which affected the product’s viability negatively. Here are some points:
		</p>
    <ul>
			<li>
        Poor implementation of data exchange with 1C DB via Odata. The essence of the problem is that routing and the workflow are not optimized and take more resources than they must. 
			</li>
			<li>
        Inconsistency of the finished management system with new tasks. The implemented administrative panel needs to be improved or even reworked from scratch.
			</li>
			<li>
        Unstructured information coming from the database. After the analysis, we found that some of the information received upon request is irrelevant.
			</li>
			<li>
        Blurred technical specification. The customer explained the goal but did not know how to achieve it. There was no list of required functions, interaction models, etc.
			</li>
		</ul>
    <p>
      After analyzing the current situation, we decided to fix all the shortcomings of the previous system to build a completely new IT product.
		</p>

		<H4>Brainstorming: Our approach to planning the perfect product</H4>
    <p>
      Faced with a number of challenges, we gathered a team to brainstorm. Having processed dozens of options, we selected the most promising ideas and came up with the concept of the perfect IT product:
		</p>
    <ul>
			<li>
        A mobile app for Android and iOS.
			</li>
			<li>
        Structured API with the integration of multiple services.
			</li>
			<li>
        Built-in functionality for working with the OData protocol.
			</li>
			<li>
        Filter system for sorting employees.
			</li>
      <li>
        Modern design with a new interface.
			</li>
      <li>
        Rest API architecture or in-app base.
			</li>
		</ul>
    <p>
      We believe that all of the above points fit perfectly into the concept and objectives of the project. Having offered this list to the customer, we received approval for its implementation. Having built a roadmap and dividing the process into sprints, we proceeded to the development.
		</p>

    <H4>4 experts and 4 months of work: how we dealt with the project</H4>
    <p>
    After assessing the complexity of the project, we divided tasks into stages and started working. 4 people were engaged to solve urgent problems:
		</p>
    <ul>
			<li>
        Involved a 1C expert in assessing the state of the system and design fixes
			</li>
			<li>
        Investigated the tasks and adjusted the functionality, displaying it in the layout graphically.
			</li>
			<li>
        Analyzed the text content and corrected it with new information.
			</li>
			<li>
        Split the project into sprints and defined the MVP functionality for testing.
			</li>
		</ul>
    <p>
      After we agreed on the layout with the customer, the team proceeded to development, focusing on the project’s main features. The entire path to the finished IT product took us about four months, during which we did the following:
		</p>
    <ul>
			<li>
        Developed a cross-platform mobile app using Xamarin.Forms and C#.
			</li>
			<li>
        Implemented 3-level access to the program tools.
			</li>
			<li>
        Connected third-party services via API.
			</li>
			<li>
        Introduced a system of filters to speed up the work of the staff.
			</li>
      <li>
        Optimized and structured data exchange with 1C.
			</li>
      <li>
        Increased revenue by attracting new customers and retaining old ones.
			</li>
		</ul>
    <p>
      The workflow turned out to be surprisingly interesting and varied but complex and unusual in technical implementation. During development, we created a new product, transferred old data to a new environment, integrated it with a ready-made database, and ensured the exchange of information between them.
		</p>

    <H4>What the customer received after the complete development cycle</H4>
      <ImageWrap>
        <img class="haski" src={client1} alt="picture7" />
        <img class="haski" src={client2} alt="picture8" />
      </ImageWrap>
    <p>
      Despite the “raw” initial idea, we managed to achieve the result, spending a lot of time and a minimum of BuildApp resources. The customer highly appreciated the quality of the final IT product and became our regular client. Here’s what we got at the release:
		</p>
    <ul>
			<li>
        Apps for two top mobile operating systems.
			</li>
			<li>
        User-friendly UI and optimized UX.
			</li>
			<li>
        Three levels of access: client, employee, and manager.
			</li>
			<li>
        Social network features: order notifications and company news.
			</li>
      <li>
        A filter system with customer information.
			</li>
      <li>
        Database of employees and personnel.
			</li>
      <li>
        Hybrid shift management complex, etc.
			</li>
		</ul>
    <p>
      We implemented all the tasks set by the customer. Based on the priority software model, our specialists made a unique product that compensates for the shortcomings of the old version.
		</p>

      <ImageWrap>
        <img class="haski" src={pm1} alt="picture7" />
        <img class="haski" src={pm2} alt="picture8" />
      </ImageWrap>

    <H4>How the client’s business performance increased thanks to our product</H4>
    <p>
      The project’s goals were achieved fully, and the customer received the necessary IT product, which revived communication with customers and the software’s functionality. Thus, Haski got:
		</p>
    <ul>
			<li>
        Better user interaction.
			</li>
			<li>
        Average check increased by 20%.
			</li>
			<li>
        The number of regular customers and the influx of new ones.
			</li>
			<li>
        Visual and operational components of the business.
			</li>
      <li>
        Application security and interface.
			</li>
      <li>
        High positions on the market of outsourcing service operators.
			</li>
		</ul>
    <p>
      The project is still under development but has already been completed on 6/9. We are preparing to work on the next phase of the product for the client.
		</p>

    <H3>
      Do you want to implement your business tool for leading mobile platforms? Contact the BuildApps manager for a consultation!
    </H3>
	</ProjectDetailsContainer>
);

export const HaskiRu = () => (
	<ProjectDetailsContainer>
		<H3>
      Приложения для оптимизации работы с клиентами компании Хаски
		</H3>
		<p>
      Лояльность пользователей является приоритетом для большинства представителей бизнеса. Есть выражение, что довольный клиент — лучший потребитель услуг. Именно поэтому важно реализовать лучшие аспекты пользовательского опыта в продуктах клиента. Приложения и веб-ресурсы должны справляться с возложенными на них задачами, опрятно выглядеть и быть простыми в освоении. Именно о таком IT-продукте мы расскажем в данном кейсе.
		</p>
    <ImageWrap>
			<img class="haski" src={worker1} alt="picture1" />
      <img class="haski" src={worker2} alt="picture2" />
    </ImageWrap>

		<H3>
      Haski: проблемы управления персоналом и устаревшего дизайна, которые нам передали для исправления
		</H3>
		<p>
      Органическая реклама сработала на отлично, ведь все наши предыдущие клиенты остались довольны работой. Представители оператора аутсорсинг услуг «Хаски» связались с нашим менеджером и заказали проект. Для BuildApps он оказался весьма сложным, ведь проблемы были в запутанной системе обмена информацией, отсутствии структуры и документации. Перед началом разработки требовалось упорядочить имеющиеся данные, а уже потом создать приложения для удобного управления логистическими процессами.
		</p>
    <p>
      Хаски — ведущий оператор услуг аутсорсинга. На нашем рынке он работает с 2008 года и уже прочно укрепился в своей нише. Компания внедрила в свой бизнес эффективное управление персоналом, благодаря которому смогла: ввести структурированный процесс обучения сотрудников, аттестацию специалистов и плановые брифинги по стандартам и методикам работы. Единственная проблема группы — довольно посредственное ПО, которое не могло обеспечить должный уровень сервиса для клиентов, имело ограниченный менеджерский функционал и административную панель.
		</p>
    <ImageWrap>
      <img class="haski" src={worker3} alt="picture3" />
      <img class="haski" src={worker1} alt="picture4" />
    </ImageWrap>

		<H4>Ключевые задачи, которые поручил нам заказчик</H4>
		<p>
      Заказчик решил масштабироваться, из-за чего ему стало недостаточно существующего функционала и он решил его расширить. Изначально у нас было мало технической документации и сценариев, что осложняло понимание как именно нужно выполнять управленческую деятельность в приложении, а коммуникации с клиентами затруднялись отсутствием профилированных инструментов. Мы постоянно поддерживали связь с заказчиком, чтобы понять технические аспекты и правильно реализовать их. Перед нами поставили вполне конкретные задачи:
		</p>
		<ul>
			<li>
        Реализовать полноценный IT-продукт с разделением аккаунтов для трех основных ролей: клиент, менеджер, администратор.
			</li>
			<li>
        Разработать уникальное решение для повышения узнаваемости бренда.
			</li>
			<li>
        Внедрить функционал для аппарата управления, CRM систему, инструментарий.
			</li>
		</ul>
		<p>
      При выполнении этих задач мы должны добиться конкретных результатов, а именно:
		</p>
    <ul>
			<li>
        Повысить качество обслуживания клиентов.
			</li>
			<li>
        Улучшить пользовательский опыт.
			</li>
			<li>
        Разграничить функционал.
			</li>
      <li>
        Привязать пользователей к поставщику услуг.
			</li>
		</ul>
    <p>
      Приняв задание, мы сформировали команду для анализа готового продукта заказчика и планирования дальнейших действий.
		</p>
    <ImageWrap>
      <img class="haski" src={orders1} alt="picture5" />
      <img class="haski" src={orders2} alt="picture6" />
    </ImageWrap>

		<H4>Срок в 4 месяца и технические проблемы: перестраиваем структуру БД и разрабатываем по для работы</H4>
		<p>
      Исследовав рабочее решение клиента, мы столкнулись с рядом проблем, которые нужно было срочно решать. При изначальной разработке исполнители выбрали такой стек, что не совсем соответствовал задачам бизнеса заказчика, это впоследствии негативно отразилось на жизнеспособности продукта. Вот некоторые моменты:
		</p>
    <ul>
			<li>
        Плохая реализация обмена данными с БД 1C через Odata. Суть проблемы в том, что маршрутизация и сам процесс работы не оптимизированы и отнимают больше ресурсов, чем полагается.
			</li>
			<li>
        Несоответствие готовой системы управления новыми задачам. Внедренная административная панель нуждается в доработке, или даже переработке с нуля.
			</li>
			<li>
        Неструктурированная информация, поступающая из БД. В результате анализа мы обнаружили, что часть выдаваемой информации по запросу не является релевантной.
			</li>
			<li>
        Слабое техническое задание. Заказчик объяснил, чего он хочет, но как это реализовать, он не знал. Отсутствовал список необходимых функций, модели взаимодействия и т.д.
			</li>
		</ul>
    <p>
      Поразмыслив над сложившейся ситуацией, мы решили исправить все недочеты прошлой системы в полностью новом IT-продукте.
		</p>

		<H4>Организация мозгового штурма: наш подход к планированию идеального продукта</H4>
    <p>
      Столкнувшись с рядом проблем, мы собрали команду для мозгового штурма. Обработав десятки различных вариантов мы остановились на наиболее перспективных идеях и сформировали свой идеал будущего IT-продукта:
		</p>
    <ul>
			<li>
        Мобильное приложение для ОС Android и iOS.
			</li>
			<li>
        Структурированный API с интеграцией различных сервисов.
			</li>
			<li>
        Встроенный функционал для работы с OData протоколом.
			</li>
			<li>
        Система фильтров для сортировки сотрудников.
			</li>
      <li>
        Дизайнерское оформление с новым интерфейсом.
			</li>
      <li>
        Архитектура Rest API или база в приложении.
			</li>
		</ul>
    <p>
      По нашему мнению все перечисленные пункты отлично вписываются в концепцию и задачи проекта. Предложив данный перечень заказчику, мы получили одобрение на его реализацию. Сформировав дорожную карту и разбив процесс на спринты, приступили непосредственно к разработке.
		</p>

    <H4>4 эксперта и 4 месяца работы: как мы справлялись с проектом</H4>
    <p>
      Оценив сложность работы, мы разделили задачи по этапам и запустили процесс. Было задействовано 4 специалиста, которые нацелились на решение актуальных проблем:
		</p>
    <ul>
			<li>
        Подключили 1С эксперта для оценки состояния системы и проектирования исправлений.
			</li>
			<li>
        Исследовали поставленные задачи и скорректировали функционал, графически отобразив его в макете.
			</li>
			<li>
        Проанализировали текстовое наполнение и предоставили материал для его корректирования.
			</li>
			<li>
        Разбили проект на спринты и определили функционал MVP для тестирования.
			</li>
		</ul>
    <p>
      После того как мы согласовали макет с заказчиком, команда приступила непосредственно к процессу разработки, сосредоточившись на проекте и его особенностях. Весь путь к готовому IT-продукту у нас занял порядка четырех месяцев, за которые мы:
		</p>
    <ul>
			<li>
        Разработали с помощью Xamarin.Forms и С# кроссплатформенное мобильное приложение.
			</li>
			<li>
        Внедрили 3-ех уровневый доступ к инструментам программы.
			</li>
			<li>
        Подключили сторонние сервисы посредством API.
			</li>
			<li>
        Создали систему фильтров для ускорения работы персонала.
			</li>
      <li>
        Оптимизировали и структурировали обмен данными с 1C.
			</li>
      <li>
        Увеличили выручку путем привлечения новых и удержания старых клиентов.
			</li>
		</ul>
    <p>
      Процесс работы оказался удивительно интересным и разнообразным, хотя и очень сложным и необычным в плане технической реализации. Во время разработки мы не только создавали новый продукт, но и переносили старые данные в новую среду, интегрировали свои наработки с готовой базой данных и настраивали обмен информацией между ними.
		</p>

    <H4>Что получил заказчик после полного цикла разработки</H4>
      <ImageWrap>
        <img class="haski" src={client1} alt="picture7" />
        <img class="haski" src={client2} alt="picture8" />
      </ImageWrap>
    <p>
      Несмотря на изначальную сырость идеи мы смогли добиться желаемого результата, потратив на это много времени и минимум ресурсов BuildApp. Заказчик высоко оценил качество финального IT-продукта и стал нашим постоянным клиентом. На релизе мы получили:
		</p>
    <ul>
			<li>
        Приложения для двух топовых мобильных ОС.
			</li>
			<li>
        Удобный UI, оптимизирующий UX.
			</li>
			<li>
        Три уровня доступа: клиент, работник, менеджер.
			</li>
			<li>
        Функции соц. сети: уведомления о заказах и новости компании.
			</li>
      <li>
        Систему фильтров со сведениями о клиентах.
			</li>
      <li>
        Базу данных работников и персонала.
			</li>
      <li>
        Гибридный комплекс управления сменами и т.д.
			</li>
		</ul>
    <p>
      Мы реализовали все задачи, поставленные заказчиком. Отталкиваясь от приоритетной модели ПО, наши специалисты сделали уникальный продукт, компенсирующий недочеты старой версии.
		</p>

    <ImageWrap>
      <img class="haski" src={pm1} alt="picture7" />
      <img class="haski" src={pm2} alt="picture8" />
    </ImageWrap>

    <H4>Как повысилась эффективность работы благодаря нашему продукту</H4>
    <p>
      Цели проекта были достигнуты в полном объеме, заказчик получил желаемый IT-продукт, вдохнувший жизнь в коммуникации с клиентами и в функционал ПО. Таким образом, компания Хаски улучшила:
		</p>
    <ul>
			<li>
        Процесс взаимодействия с пользователями.
			</li>
			<li>
        Средний чек на 20%.
			</li>
			<li>
        Количество постоянных клиентов и приток новых.
			</li>
			<li>
        Графическую и операционную составляющую бизнеса.
			</li>
      <li>
        Безопасность приложения и его интерфейс.
			</li>
      <li>
        Позиции на рынке операторов аутсорсинговых услуг.
			</li>
		</ul>
    <p>
      Проект еще на стадии разработки, но уже реализован на 6/9. Сейчас мы готовимся к работе над следующим этапом продукта для нашего клиента.
		</p>

    <H3>
      Хотите реализовать собственный инструмент для бизнеса на ведущих мобильных платформах? Обращайтесь к менеджеру BuildApps за консультацией!
    </H3>
	</ProjectDetailsContainer>
);

export const HaskiUa = () => (
	<ProjectDetailsContainer>
		<H3>
      Додатки для оптимізації роботи з клієнтами компанії Haski
		</H3>
		<p>
      Лояльність користувачів є пріоритетом для більшості бізнесменів. Існує твердження, що задоволений клієнт – найкращий споживач послуг. Тому важливо впровадити найкращі аспекти користувацького досвіду в продукти клієнта. Програми та веб-ресурси мають вирішувати поставлені завдання, виглядати акуратно та бути простими у використанні. Про такий ІТ-продукт ми поговоримо в даному кейс-стаді.
		</p>
    <ImageWrap>
			<img class="haski" src={worker1} alt="picture1" />
      <img class="haski" src={worker2} alt="picture2" />
    </ImageWrap>

		<H3>
      Хаскі: проблеми з кадрами та застарілим дизайном, які нам довелося виправити
		</H3>
		<p>
      Органічна реклама спрацювала чудово, оскільки всі наші попередні клієнти були задоволені роботою. Представники аутсорсингового оператора Haski зв’язалися з нашим менеджером і замовили проект. Це виявилося досить складним для BuildApps, оскільки були певні проблеми із заплутаною системою обміну даними та відсутністю структури та документації. Перш ніж почати, нам потрібно було впорядкувати наявні дані, а потім розробити додатки для зручного управління логістичними процесами.
		</p>
    <p>
      Haski є провідним постачальником послуг аутсорсингу. Він працює на ринку з 2008 року і вже міцно закріпився в ніші. На підприємстві впроваджено ефективне управління персоналом, вдалося запровадити структуроване навчання працівників, атестацію спеціалістів, планові інструктажі щодо стандартів та методів роботи. Єдиною проблемою було посереднє програмне забезпечення, яке не могло забезпечити належний рівень обслуговування клієнтів і мало обмежені управлінські функції та незручну адміністративну панель.
		</p>
    <ImageWrap>
      <img class="haski" src={worker3} alt="picture3" />
      <img class="haski" src={worker1} alt="picture4" />
    </ImageWrap>

		<H4>Ключові завдання, які замовник довірив нам</H4>
		<p>
      Замовник вирішив масштабуватися, тому наявної функціональності стало недостатньо. Тому було вирішено його розширити. Спочатку у нас було мало технічної документації та сценаріїв, через що було важко точно зрозуміти, як виконувати управлінські дії в додатку. Спілкування з клієнтами також ускладнювалося через відсутність необхідних інструментів. Щоб зрозуміти технічні аспекти та правильно їх реалізувати, ми постійно підтримували зв’язок із замовником. Нам поставили конкретні завдання:
		</p>
		<ul>
			<li>
        Впровадити повноцінний ІТ-продукт із розмежуванням облікових записів на три основні ролі: клієнт, менеджер та адміністратор.
			</li>
			<li>
        Розробити унікальне рішення для підвищення впізнаваності бренду.
			</li>
			<li>
        Впровадити функціональні можливості для апарату управління, CRM-системи, інструментарій.
			</li>
		</ul>
		<p>
      Вирішуючи ці завдання, ми повинні досягти наступних результатів, а саме:
		</p>
    <ul>
			<li>
        Підвищити якість обслуговування клієнтів.
			</li>
			<li>
        Покращити користувацький досвід.
			</li>
			<li>
        Розмежувати функціональність.
			</li>
      <li>
        Зв’язати користувачів із постачальником послуг.
			</li>
		</ul>
    <p>
      Прийнявши завдання, ми зібрали команду для аналізу готового продукту замовника та планування подальших дій.
		</p>
    <ImageWrap>
      <img class="haski" src={orders1} alt="picture5" />
      <img class="haski" src={orders2} alt="picture6" />
    </ImageWrap>

		<H4>Термін виконання 4 місяці та технічні проблеми: перебудова структури бази даних та розробка програмного забезпечення для роботи</H4>
		<p>
      Вивчивши рішення клієнта, ми виявили багато проблем, які потребують термінового вирішення. Проект був побудований з використанням технологічного стека, який не повністю відповідав бізнес-цілям замовника, що негативно вплинуло на життєздатність продукту. Ось деякі моменти:
		</p>
    <ul>
			<li>
        Погана реалізація обміну даними з 1С БД через Odata. Суть проблеми полягає в тому, що маршрутизація і робочий процес не оптимізовані і забирають більше ресурсів, ніж потрібно.
			</li>
			<li>
        Невідповідність готової системи управління новими завданнями. Впроваджену адміністративну панель потрібно покращити або навіть переробити з нуля.
			</li>
			<li>
        Неструктурована інформація, що надходить з бази даних. Після аналізу ми виявили, що деяка інформація, отримана на запит, не є релевантною.
			</li>
			<li>
        Розмита технічна специфікація. Замовник пояснив мету, але не знав, як її досягти. Не було списку необхідних функцій, моделей взаємодії тощо.
			</li>
		</ul>
    <p>
      Проаналізувавши поточну ситуацію, ми вирішили виправити всі недоліки попередньої системи, щоб створити абсолютно новий ІТ-продукт.
		</p>

		<H4>Мозковий штурм: наш підхід до планування ідеального продукту</H4>
    <p>
      Зіткнувшись із низкою проблем, ми зібрали команду для мозкового штурму. Опрацювавши десятки варіантів, ми відібрали найперспективніші ідеї та прийшли до концепції ідеального IT-продукту:
		</p>
    <ul>
			<li>
        Мобільний додаток для Android та iOS.
			</li>
			<li>
        Структурований API з інтеграцією кількох сервісів.
			</li>
			<li>
        Вбудований функціонал для роботи з протоколом OData.
			</li>
			<li>
        Система фільтрації для сортування працівників.
			</li>
      <li>
        Дизайнерське оформлення з новим інтерфейсом.
			</li>
      <li>
        Архітектура Rest API або база в програмі.
			</li>
		</ul>
    <p>
      Ми вважаємо, що всі вищезазначені моменти ідеально вписуються в концепцію та цілі проекту. Запропонувавши цей перелік замовнику, ми отримали погодження на його впровадження. Побудувавши дорожню карту та розділивши процес на спринти, ми приступили до розробки.
		</p>

    <H4>4 експерти і 4 місяці роботи: як ми впоралися з проектом</H4>
    <p>
      Оцінивши складність проекту, ми розділили завдання на етапи та приступили до роботи. Для вирішення нагальних проблем залучено 4 особи:
		</p>
    <ul>
			<li>
        Залучили експерта 1С до оцінки стану системи та проектування виправлень.
			</li>
			<li>
        Дослідили завдання та налагодили функціонал, відобразивши його в макеті графічно.
			</li>
			<li>
        Проаналізували текстове наповняння та надали матеріали для його корегування.
			</li>
			<li>
        Розділили проект на спринти та визначили функціональність MVP для тестування.
			</li>
		</ul>
    <p>
      Після того, як ми узгодили макет із замовником, команда приступила до розробки, зосередившись на основних характеристиках проекту. Весь шлях до готового IT-продукту зайняв у нас близько чотирьох місяців, протягом яких ми зробили наступне:
		</p>
    <ul>
			<li>
        Розробили кросплатформний мобільний додаток за допомогою Xamarin.Forms і C#.
			</li>
			<li>
        Реалізовано 3-рівневий доступ до інструментів програми.
			</li>
			<li>
        Підключені сторонні сервіси через API.
			</li>
			<li>
        Запроваджено систему фільтрів для прискорення роботи персоналу.
			</li>
      <li>
        Оптимізований і структурований обмін даними з 1С.
			</li>
      <li>
        Збільшення доходу за рахунок залучення нових клієнтів і утримання старих.
			</li>
		</ul>
    <p>
    Робочий процес виявився напрочуд цікавим і різноманітним, але складним і незвичайним у технічному виконанні. Під час розробки ми створили новий продукт, перенесли старі дані в нове середовище, інтегрували їх з готовою базою даних, забезпечили обмін інформацією між ними.
		</p>

    <H4>Що отримав замовник після повного циклу розробки</H4>
    <ImageWrap>
      <img class="haski" src={client1} alt="picture7" />
      <img class="haski" src={client2} alt="picture8" />
    </ImageWrap>
    <p>
      Незважаючи на «сиру» початкову ідею, нам вдалося досягти результату, витративши багато часу та мінімум ресурсів BuildApp. Замовник високо оцінив якість кінцевого ІТ-продукту і став нашим постійним клієнтом. Ось що ми отримали під час релізу:
		</p>
    <ul>
			<li>
        Програми для двох провідних мобільних операційних систем.
			</li>
			<li>
        Зручний UI та оптимізований UX.
			</li>
			<li>
        Три рівні доступу: клієнт, співробітник і менеджер.
			</li>
			<li>
        Функції соціальних мереж: повідомлення про замовлення та новини компанії.
			</li>
      <li>
        Система фільтрів з інформацією про клієнта.
			</li>
      <li>
        База даних працівників та персоналу.
			</li>
      <li>
        Гібридний комплекс управління змінами та ін.
			</li>
		</ul>
    <p>
      Ми виконали всі поставлені замовником завдання. На основі пріоритетної моделі програмного забезпечення наші фахівці створили унікальний продукт, який компенсує недоліки старої версії.
		</p>

    <ImageWrap>
      <img class="haski" src={pm1} alt="picture7" />
      <img class="haski" src={pm2} alt="picture8" />
    </ImageWrap>

    <H4>Як підвищилася ефективність бізнесу клієнта завдяки нашому продукту</H4>
    <p>
      Цілі проекту були досягнуті повністю, а замовник отримав необхідний ІТ-продукт, який пожвавив комунікацію із замовниками та функціональність програмного забезпечення. Таким чином, Хаскі покращила:
		</p>
    <ul>
			<li>
        Процес взаємодії з користувачем.
			</li>
			<li>
        Середній чек на 20%.
			</li>
			<li>
        Кількість постійних клієнтів і приток нових.
			</li>
			<li>
        Візуальні та операційні складові бізнесу.
			</li>
      <li>
        Безпеку додатку та інтерфейс.
			</li>
      <li>
        Позиції на ринку операторів аутсорсингових послуг.
			</li>
		</ul>
    <p>
      Проект все ще знаходиться на стадії розробки, але вже реалізований на 6/9. Зараз ми готуємось до роботи над наступною фазою продукту для клієнта.
		</p>

    <H3>
      Бажаєте впровадити свій бізнес-інструмент для провідних мобільних платформ? Зв’яжіться з менеджером BuildApps для консультації!
    </H3>
	</ProjectDetailsContainer>
);

const ImageWrap = styled.div`
	display: flex;
	justify-content: center;
	overflow: hidden;
	align-items: center;
`;
