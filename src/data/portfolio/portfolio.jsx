import React from 'react';
import styled from 'styled-components';
import spbProperty from '../../../static/images/portfolio/spbProperty.jpg';
import spbLong from '../../../static/images/portfolio/spb_long.png';
import askod from '../../../static/images/portfolio/askod.jpg';
import askodLong from '../../../static/images/portfolio/askod-long.png';
import sushi from '../../../static/images/portfolio/sushi.png';
import sushiLong from '../../../static/images/portfolio/sushi_long.png';
import ppf from '../../../static/images/portfolio/ppf.png';
import ppfLong from '../../../static/images/portfolio/ppf_long.png';
import iphone from '../../../static/images/portfolio/iphone-discount.png';
import iphoneLong from '../../../static/images/portfolio/iphone-discount-long.png';
import cardanoLogo from '../../../static/images/portfolio/CW_logo.jpg';
import cardanoImg from '../../../static/images/portfolio/CW_long.png';
import haskiLogo from '../../../static/images/portfolio/haski_logo.png';
import haskiImg from '../../../static/images/portfolio/haski_long.png';
import { PpfDetailsEn, PpfDetailsRu, PpfDetailsUa } from './PpfDetails';
import { SushiDetailsEn, SushiDetailsRu, SushiDetailsUa } from './SushiDetails';
import { SpbPropertyEn, SpbPropertyRu, SpbPropertyUa } from './SpbProperty';
import { AskodDetailsEn, AskodDetailsRu, AskodDetailsUa } from './AskodDetails';
import { IPhoneDiscountEn, IPhoneDiscountRu, IPhoneDiscountUa } from './IPhoneDiscountDetails';
import { CardanoWaterEn, CardanoWaterRu, CardanoWaterUa } from './CardanoWaterDetails';
import { HaskiEn, HaskiRu, HaskiUa } from './HaskiDetails';

export const en = {
	ppf: {
		id: 'ppf',
		background:
			'linear-gradient(88deg, rgba(126, 124, 235, 0.5) 3.37%, rgba(87, 195, 255, 0.5) 96.63%);',
		image: ppf,
		longImage: ppfLong,
		title: () => <>Lead management software</>,
		pageTitle: 'Lead management software',
		description: `A CRM that covers most of the organization's processes related to business lending. A full cycle of processing an application - from the moment of an obtaining to the issuance of a loan.
Integration with third-party services to obtain more complete information about the loan - credit history, information from registries for legal entities or individuals.
`,
		responsibility: ['Web', 'Desktop'],
		fullDescription: `Due to the high competition in the lending market and the high demand for loans for business purposes, the speed and the quality of working with clients are much appreciated, and, last but not least, the automation of work with each application. This is where software in the form of CRM comes into play.`,
		pageContent: PpfDetailsEn,
    links: {
      web: 'https://papafinance.ru/',
      appStore: null,
      playMarket: null,
    },
	},
	sushi: {
		id: 'sushi',
		background:
			'linear-gradient(88deg, rgba(87, 195, 255, 0.5) 3.37%, rgba(255, 87, 188, 0.5) 96.63%);',
		image: sushi,
		longImage: sushiLong,
		title: () => (
			<>
				SUSHI <SpanSushi>SHOP</SpanSushi>
			</>
		),
		pageTitle: 'SUSHI SHOP',
		description: `Online service for ordering sushi. The SushiShop system automatically determines your geolocation for the nearest sushi store to make the delivery time more comfortable for the user. The system also provides a bonus program, an accumulative system and various discounts for different holidays or seasons.`,
		responsibility: ['Mobile'],
		fullDescription: `Today a mobile application for delivery is the most effective, least expensive, and relevant way to attract new customers, increase their level of loyalty, and receive real feedback. As well as increasing sales and profits.`,
		pageContent: SushiDetailsEn,
    links: {
      web: null,
      appStore: 'https://apps.apple.com/ru/app/id1537535113',
      playMarket: 'https://play.google.com/store/apps/details?id=com.notissimus.sushishop',
    },
	},
	spbProperty: {
		id: 'spbProperty',
		background:
			'linear-gradient(88deg, rgba(255, 87, 188, 0.5) 3.37%, rgba(249, 202, 158, 0.5) 96.63%);',
		image: spbProperty,
		pageTitle: 'Petersburg real estate',
		longImage: spbLong,
		title: () => (
			<>
				Petersburg <SpanSpb>real estate</SpanSpb>
			</>
		),
		description: `Mobile client for finding an apartment in residential complex in St. Petersburg and Moscow. The system allows you to book apartments, make pre-orders and find apartments at competitive prices.`,
		responsibility: ['Mobile'],
		fullDescription: `Hundreds of people regularly search for apartments, conclude lease agreements with realtors, buy new properties or sell old ones. The growing demand and the accelerated pace of life leave people with less and less time to personally solve such problems.
Who would be asked more often for help in these matters? To someone who can solve them not only qualitatively, but also faster than others. A real estate mobile app will give your business a competitive advantage.
AgentPN is a professional application only for real estate agencies - partners of Petersburg Real Estate. Search and booking of apartments in the largest database of new buildings in St. Petersburg and the Leningrad region. A login to the application is by a phone number.
Use your favorite work tool wherever you are. Conduct consultations remotely in a place convenient for the client. Access to apartments, mortgage calculator, apartment reservations, as well as a convenient database of your clients - in one application.`,
		pageContent: SpbPropertyEn,
    links: {
      web: null,
      appStore: 'https://apps.apple.com/ru/app/id1466597730',
      playMarket: 'https://play.google.com/store/apps/details?id=com.notissimus.AgentPn',
    },
	},
	askod: {
		id: 'askod',
		background:
			'linear-gradient(88deg, rgba(249, 202, 158, 0.5) 3.37%, rgba(243, 122, 122, 0.5) 96.63%);',
		image: askod,
		longImage: askodLong,
		title: () => (
			<>
				ASKOD <SpanAskodOnline>Online</SpanAskodOnline>
			</>
		),
		pageTitle: 'ASKOD Online',
		description: `ASKOD Online service is designed to automate the processes of document circulation between legal entities and individuals and provides review, approval, signing, sending, receiving and storing documents in a cloud environment.`,
		responsibility: ['Design'],
		fullDescription: `Askod is an online electronic document management system that allows you to organize work with electronic documents (creation, modification, search), as well as interaction between employees (transfer of documents, issuing tasks, sending notifications, etc.). Also, such a system is called EDMS (Electronic Document Management Systems).`,
		pageContent: AskodDetailsEn,
    links: {
      web: 'https://askod.online/',
      appStore: 'https://apps.apple.com/app/id1560671518',
      playMarket: 'https://play.google.com/store/apps/details?id=com.infoplus.askod.online',
    },
	},
  iphonediscount: {
		id: 'iphonediscount',
		background:
			'linear-gradient(88deg, rgba(249, 202, 158, 0.5) 3.37%, rgba(243, 122, 122, 0.5) 96.63%);',
		image: iphone,
		longImage: iphoneLong,
		title: () => <>IPhone <SpanIphoneDiscount>Discount</SpanIphoneDiscount></>,
		pageTitle: 'IPhone Discount',
		description: `Developing an online store is a serious task that requires a deep understanding of online business processes. It becomes more complicated when it comes to creating a reselling platform that offers products from a well-known brand. The iPhone Discount startup contacted us to solve this problem. We helped them build a technological foundation for the further development and scaling of their online business.`,
		responsibility: ['E-commerce', 'Web'],
		fullDescription: `Developing an online store is a serious task that requires a deep understanding of online business processes. It becomes more complicated when it comes to creating a reselling platform that offers products from a well-known brand. The iPhone Discount startup contacted us to solve this problem. We helped them build a technological foundation for the further development and scaling of their online business.`,
		pageContent: IPhoneDiscountEn,
    links: {
      web: 'https://iphone-discount.ru',
      appStore: null,
      playMarket: null,
    },
	},
  cardanowater: {
		id: 'cardanowater',
		background:
			'linear-gradient( 135deg, #465EFB 10%, #C2FFD8 100%);',
		image: cardanoLogo,
		longImage: cardanoImg,
		title: () => <>Cardano <SpanCardano>Water</SpanCardano></>,
		pageTitle: 'Cardano Water',
		description: `Cardano-Water is a multi-platform company operating in several business lines. Their new project aims to implement blockchain technology and NFT collections and draw public attention to global problems regarding drinking water. The idea is based on charitable contributions from each sold token for the needs of underdeveloped countries.`,
		responsibility: ['Web'],
		fullDescription: `Today, the problem of the lack of clean drinking water in some countries is more urgent than ever. World organizations promote the idea of economy and respect for a valuable natural resource, but at the same time, they sit on their hands and do not look for a solution to this injustice. In contrast, some companies help the population, partially investing commissions for the needs of low-income people. In this case study, you will learn about one of these heroes, Cardano-Water.`,
		pageContent: CardanoWaterEn,
    links: {
      web: 'https://cardano-water.io',
      appStore: null,
      playMarket: null,
    },
	},
  haski: {
		id: 'haski',
		background:
			`linear-gradient(90deg,#f5abd7,#59c4cd);`,
		image: haskiLogo,
		longImage: haskiImg,
		title: () => <SpanHaski>HASKI</SpanHaski>,
		pageTitle: 'Haski',
		description: `Haski is a leading outsourcing service provider. It has been operating on the market since 2008 and has already firmly established itself in the niche. The customer decided to scale, so the existing functionality became insufficient. Having accepted the assignment, we assembled a team to analyze the customer's finished product and plan further actions. The workflow turned out to be surprisingly interesting and varied but complex and unusual in technical implementation. During development, we created a new product, transferred old data to a new environment, integrated it with a ready-made database, and ensured the exchange of information between them.`,
		responsibility: ['Application','Design'],
		fullDescription: `Haski is a leading outsourcing service provider. It has been operating on the market since 2008 and has already firmly established itself in the niche. The customer decided to scale, so the existing functionality became insufficient. Having accepted the assignment, we assembled a team to analyze the customer's finished product and plan further actions. The workflow turned out to be surprisingly interesting and varied but complex and unusual in technical implementation. During development, we created a new product, transferred old data to a new environment, integrated it with a ready-made database, and ensured the exchange of information between them.`,
		pageContent: HaskiEn,
    links: {
      web: 'https://haski.ua',
      appStore: null,
      playMarket: null,
    },
	},
};

export const ru = {
	ppf: {
		id: 'ppf',
		background:
			'linear-gradient(88deg, rgba(126, 124, 235, 0.5) 3.37%, rgba(87, 195, 255, 0.5) 96.63%);',
		image: ppf,
		longImage: ppfLong,
		title: () => <>ПО для управления лидами</>,
		pageTitle: 'ПО для управления лидами',
		description: `CRM, охватывающая большинство процессов организации, связанных с кредитованием бизнеса. Полный цикл обработки заявки - от момента получения до выдачи кредита. Интеграция со сторонними сервисами для получения более полной информации о кредите - кредитной истории, информации из реестров для юридических и физических лиц.`,
		responsibility: ['Web', 'Desktop'],
		fullDescription: `В связи с высокой конкуренцией на рынке кредитования и высоким спросом на кредиты для бизнес-целей очень ценятся скорость и качество работы с клиентами, и, что не менее важно, автоматизация работы с каждым приложением. Именно здесь в игру вступает программное обеспечение в форме CRM.`,
		pageContent: PpfDetailsRu,
    links: {
      web: 'https://papafinance.ru/',
      appStore: null,
      playMarket: null,
    },
	},
	sushi: {
		id: 'sushi',
		background:
			'linear-gradient(88deg, rgba(87, 195, 255, 0.5) 3.37%, rgba(255, 87, 188, 0.5) 96.63%);',
		image: sushi,
		longImage: sushiLong,
		title: () => (
			<>
				SUSHI <SpanSushi>SHOP</SpanSushi>
			</>
		),
		pageTitle: 'SUSHI SHOP',
		description: `Онлайн-сервис заказа суши. Система SushiShop автоматически определяет вашу геолокацию до ближайшего суши-магазина, чтобы время доставки было более удобным для пользователя. Также в системе предусмотрена бонусная программа, накопительная система и различные скидки для разных праздников и сезонов.`,
		responsibility: ['Mobile'],
		fullDescription: `Сегодня мобильное приложение для доставки - самый эффективный, наименее затратный и актуальный способ привлечь новых клиентов, повысить их уровень лояльности и получить реальную обратную связь. А также увеличение продаж и прибыли.`,
		pageContent: SushiDetailsRu,
    links: {
      web: null,
      appStore: 'https://apps.apple.com/ru/app/id1537535113',
      playMarket: 'https://play.google.com/store/apps/details?id=com.notissimus.sushishop',
    },
	},
	spbProperty: {
		id: 'spbProperty',
		background:
			'linear-gradient(88deg, rgba(255, 87, 188, 0.5) 3.37%, rgba(249, 202, 158, 0.5) 96.63%);',
		image: spbProperty,
		pageTitle: 'Petersburg real estate',
		longImage: spbLong,
		title: () => (
			<>
				Petersburg <SpanSpb>real estate</SpanSpb>
			</>
		),
		description: `Мобильный клиент для поиска квартиры в ЖК в Санкт-Петербурге и Москве. Система позволяет бронировать квартиры, делать предварительные заказы и находить квартиры по выгодным ценам.`,
		responsibility: ['Mobile'],
		fullDescription: `Сотни людей регулярно ищут квартиры, заключают договоры аренды с риелторами, покупают новую недвижимость или продают старую. Растущий спрос и ускоренный темп жизни оставляют у людей все меньше и меньше времени для личного решения подобных проблем.
    К кому чаще обращаются за помощью в этих вопросах? К тому, кто сможет их решить не только качественно, но и быстрее других. Мобильное приложение по недвижимости даст вашему бизнесу конкурентное преимущество.
    AgentPN - профессиональное приложение только для агентств недвижимости - партнеров компании «Петербургская недвижимость». Поиск и бронирование квартир в крупнейшей базе новостроек Санкт-Петербурга и Ленинградской области. Вход в приложение осуществляется по номеру телефона.
    Используйте свой любимый рабочий инструмент, где бы вы ни находились. Консультации проводим удаленно в удобном для клиента месте. Доступ к квартирам, ипотечному калькулятору, бронированию квартир, а также удобная база данных ваших клиентов - в одном приложении.`,
		pageContent: SpbPropertyRu,
    links: {
      web: null,
      appStore: 'https://apps.apple.com/ru/app/id1466597730',
      playMarket: 'https://play.google.com/store/apps/details?id=com.notissimus.AgentPn',
    },
	},
	askod: {
		id: 'askod',
		background:
			'linear-gradient(88deg, rgba(249, 202, 158, 0.5) 3.37%, rgba(243, 122, 122, 0.5) 96.63%);',
		image: askod,
		longImage: askodLong,
		title: () => (
			<>
				ASKOD <SpanAskodOnline>Online</SpanAskodOnline>
			</>
		),
		pageTitle: 'ASKOD Online',
		description: `Онлайн-сервис АСКОД предназначен для автоматизации процессов документооборота между юридическими и физическими лицами и обеспечивает просмотр, согласование, подписание, отправку, получение и хранение документов в облачной среде.`,
		responsibility: ['Design'],
		fullDescription: `Askod - это онлайн-система электронного документооборота, позволяющая организовать работу с электронными документами (создание, изменение, поиск), а также взаимодействие между сотрудниками (передача документов, выдача задач, отправка уведомлений и т. Д.). Также такая система называется СЭД (Системы электронного документооборота).`,
		pageContent: AskodDetailsRu,
    links: {
      web: 'https://askod.online/',
      appStore: 'https://apps.apple.com/app/id1560671518',
      playMarket: 'https://play.google.com/store/apps/details?id=com.infoplus.askod.online',
    },
	},
  iphonediscount: {
		id: 'iphonediscount',
		background:
			'linear-gradient(88deg, rgba(249, 202, 158, 0.5) 3.37%, rgba(243, 122, 122, 0.5) 96.63%);',
		image: iphone,
		longImage: iphoneLong,
		title: () => <>IPhone <SpanIphoneDiscount>Discount</SpanIphoneDiscount></>,
		pageTitle: 'IPhone Discount',
		description: `Разработка интернет-магазина — серьезная задача, требующая глубокого понимания процессов онлайн-бизнеса. Эта задача усложняется, если дело касается создания платформы для реселлинга, когда сайт предлагает продукцию известного бренда. Именно в такой ситуации к нам обратился стартап Iphone Discount. Мы помогли ему построить технологический фундамент для дальнейшего развития и масштабирования онлайн-бизнеса.`,
		responsibility: ['E-commerce', 'Web'],
		fullDescription: `Разработка интернет-магазина — серьезная задача, требующая глубокого понимания процессов онлайн-бизнеса. Эта задача усложняется, если дело касается создания платформы для реселлинга, когда сайт предлагает продукцию известного бренда. Именно в такой ситуации к нам обратился стартап Iphone Discount. Мы помогли ему построить технологический фундамент для дальнейшего развития и масштабирования онлайн-бизнеса.`,
		pageContent: IPhoneDiscountRu,
    links: {
      web: 'https://iphone-discount.ru',
      appStore: null,
      playMarket: null,
    },
	},
  cardanowater: {
		id: 'cardanowater',
		background:
			'linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);',
		image: cardanoLogo,
		longImage: cardanoImg,
		title: () => <>Cardano <SpanCardano> Water</SpanCardano></>,
		pageTitle: 'Cardano Water',
		description: `Cardano-Water — мультиплатформенная компания, ведущая деятельность в нескольких направлениях бизнеса. В своем новом проекте она хотела реализовать не только блокчейн технологию и NFT-коллекции, но и привлечь внимание общественности к глобальным проблемам с питьевой водой. Собственно идея и строится вокруг благотворительных отчислениях с каждого проданного токена на нужды населения стран третьего эшелона.`,
		responsibility: ['Web'],
		fullDescription: `Сейчас как никогда актуальна проблема недостатка чистой питьевой воды в некоторых слаборазвитых странах. Всемирные организации продвигают идею ее экономии и бережного отношения к ценному природному ресурсу, но в то же время сидят сложа руки, не занимаясь прямым решением этой несправедливости. В отличие от них, существуют компании, которые так или иначе помогают населению, частично инвестируя комиссионные отчисления на нужды малообеспеченных людей. В данном кейсе вы узнаете об одном из подобных героев, а именно — о компании Cardano-Water.`,
		pageContent: CardanoWaterRu,
    links: {
      web: 'https://cardano-water.io',
      appStore: null,
      playMarket: null,
    },
	},
  haski: {
		id: 'haski',
		background:
			`linear-gradient(90deg,#f5abd7,#59c4cd);`,
    image: haskiLogo,
    longImage: haskiImg,
		title: () => <SpanHaski>HASKI</SpanHaski>,
		pageTitle: 'Haski',
		description: `Haski - ведущий поставщик аутсорсинговых услуг. Он работает на рынке с 2008 года и уже прочно занял свою нишу. Заказчик принял решение о масштабировании, поэтому существующей функциональности стало недостаточно. Приняв задание, мы собрали команду для анализа готового продукта заказчика и планирования дальнейших действий. Рабочий процесс оказался на удивление интересным и разнообразным, но сложным и необычным в технической реализации. В процессе разработки мы создали новый продукт, перенесли старые данные в новую среду, интегрировали с готовой базой данных и обеспечили обмен информацией между ними.`,
		responsibility: ['Application','Design'],
		fullDescription: `Haski - ведущий поставщик аутсорсинговых услуг. Он работает на рынке с 2008 года и уже прочно занял свою нишу. Заказчик принял решение о масштабировании, поэтому существующей функциональности стало недостаточно. Приняв задание, мы собрали команду для анализа готового продукта заказчика и планирования дальнейших действий. Рабочий процесс оказался на удивление интересным и разнообразным, но сложным и необычным в технической реализации. В процессе разработки мы создали новый продукт, перенесли старые данные в новую среду, интегрировали с готовой базой данных и обеспечили обмен информацией между ними.`,
		pageContent: HaskiRu,
    links: {
      web: 'https://haski.ua',
      appStore: 'https://haski.ua',
      playMarket: 'https://haski.ua',
    },
	},
};

export const ua = {
	ppf: {
		id: 'ppf',
		background:
			'linear-gradient(88deg, rgba(126, 124, 235, 0.5) 3.37%, rgba(87, 195, 255, 0.5) 96.63%);',
		image: ppf,
		longImage: ppfLong,
		title: () => <>Lead management software</>,
		pageTitle: 'Програмне забезпечення для керування потенційними клієнтами',
		description: `CRM, що охоплює більшість процесів організації, пов’язаних із кредитуванням бізнесу. Повний цикл обробки заявки - від моменту отримання до видачі кредиту. Інтеграція із сторонніми сервісами для отримання більш повної інформації про кредит – кредитна історія, інформація з реєстрів для юридичних або фізичних осіб.`,
		responsibility: ['Web', 'Desktop'],
		fullDescription: `Завдяки високій конкуренції на ринку кредитування та високому попиту на кредити для бізнес-цілей дуже цінується швидкість та якість роботи з клієнтами, і, не в останню чергу, автоматизація роботи з кожною заявкою. Ось тут і вступає в гру програмне забезпечення у вигляді CRM.`,
		pageContent: PpfDetailsUa,
    links: {
      web: 'https://papafinance.ru/',
      appStore: null,
      playMarket: null,
    },
	},
	sushi: {
		id: 'sushi',
		background:
			'linear-gradient(88deg, rgba(87, 195, 255, 0.5) 3.37%, rgba(255, 87, 188, 0.5) 96.63%);',
		image: sushi,
		longImage: sushiLong,
		title: () => (
			<>
				SUSHI <SpanSushi>SHOP</SpanSushi>
			</>
		),
		pageTitle: 'SUSHI SHOP',
		description: `Онлайн-сервіс замовлення суші. Система SushiShop автоматично визначає вашу геолокацію до найближчого магазину суші, щоб зробити час доставки зручнішим для користувача. У системі також передбачена бонусна програма, накопичувальна система та різноманітні знижки на різні свята чи сезони.`,
		responsibility: ['Mobile'],
		fullDescription: `Сьогодні мобільний додаток для доставки є найефективнішим, найдешевшим і актуальним способом залучення нових клієнтів, підвищення рівня їх лояльності та отримання реальних відгуків. А також збільшення продажів і прибутку.`,
		pageContent: SushiDetailsUa,
    links: {
      web: null,
      appStore: 'https://apps.apple.com/ru/app/id1537535113',
      playMarket: 'https://play.google.com/store/apps/details?id=com.notissimus.sushishop',
    },
	},
	spbProperty: {
		id: 'spbProperty',
		background:
			'linear-gradient(88deg, rgba(255, 87, 188, 0.5) 3.37%, rgba(249, 202, 158, 0.5) 96.63%);',
		image: spbProperty,
		pageTitle: 'Petersburg real estate',
		longImage: spbLong,
		title: () => (
			<>
				Petersburg <SpanSpb>real estate</SpanSpb>
			</>
		),
		description: `Мобільний додаток для пошуку квартири в ЖК в Санкт-Петербурзі та Москві. Система дозволяє бронювати квартири, робити попередні замовлення та знаходити квартири за вигідними цінами.`,
		responsibility: ['Mobile'],
		fullDescription: `Сотні людей регулярно шукають квартири, укладають договори оренди з ріелторами, купують нову нерухомість або продають стару. Зростаючий попит і прискорений темп життя залишають у людей все менше часу на особисте вирішення подібних проблем.
    До кого частіше звертатимуться за допомогою в цих питаннях? До тих, хто може вирішити їх не тільки якісно, а й швидше за інших. Мобільний додаток для нерухомості дасть вашому бізнесу конкурентну перевагу.
    AgentPN - це професійний додаток тільки для агентств нерухомості - партнерів Petersburg Real Estate. Пошук та бронювання квартир у найбільшій базі новобудов Санкт-Петербурга та Ленінградської області. Вхід до програми здійснюється за номером телефону.
    Використовуйте свій улюблений робочий інструмент, де б ви не були. Проводити консультації дистанційно в зручному для клієнта місці. Доступ до квартир, іпотечного калькулятора, бронювання квартир, а також зручної бази даних ваших клієнтів - в одному додатку.`,
		pageContent: SpbPropertyUa,
    links: {
      web: null,
      appStore: 'https://apps.apple.com/ru/app/id1466597730',
      playMarket: 'https://play.google.com/store/apps/details?id=com.notissimus.AgentPn',
    },
	},
	askod: {
		id: 'askod',
		background:
			'linear-gradient(88deg, rgba(249, 202, 158, 0.5) 3.37%, rgba(243, 122, 122, 0.5) 96.63%);',
		image: askod,
		longImage: askodLong,
		title: () => (
			<>
				ASKOD <SpanAskodOnline>Online</SpanAskodOnline>
			</>
		),
		pageTitle: 'ASKOD Online',
		description: `Сервіс ASKOD Online призначений для автоматизації процесів документообігу між юридичними та фізичними особами та забезпечує перегляд, погодження, підписання, надсилання, отримання та зберігання документів у хмарному середовищі.`,
		responsibility: ['Design'],
		fullDescription: `Askod - это онлайн-система электронного документооборота, позволяющая организовать работу с электронными документами (создание, изменение, поиск), а также взаимодействие между сотрудниками (передача документов, выдача задач, отправка уведомлений и т. Д.). Также такая система называется СЭД (Системы электронного документооборота).`,
		pageContent: AskodDetailsUa,
    links: {
      web: 'https://askod.online/',
      appStore: 'https://apps.apple.com/app/id1560671518',
      playMarket: 'https://play.google.com/store/apps/details?id=com.infoplus.askod.online',
    },
	},
  iphonediscount: {
		id: 'iphonediscount',
		background:
			'linear-gradient(88deg, rgba(249, 202, 158, 0.5) 3.37%, rgba(243, 122, 122, 0.5) 96.63%);',
		image: iphone,
		longImage: iphoneLong,
		title: () => <>IPhone <SpanIphoneDiscount>Discount</SpanIphoneDiscount></>,
		pageTitle: 'IPhone Discount',
		description: `Розробка інтернет-магазину — серйозне завдання, яке потребує глибокого розуміння процесів онлайн-бізнесу. Це завдання ускладнюється, якщо справа стосується створення платформи для реселінгу, коли сайт пропонує продукцію відомого бренду. Саме у такій ситуації до нас звернувся стартап Iphone Discount. Ми допомогли йому побудувати технологічний фундамент для подальшого розвитку та масштабування онлайн-бізнесу.`,
		responsibility: ['E-commerce', 'Web'],
		fullDescription: `Розробка інтернет-магазину — серйозне завдання, яке потребує глибокого розуміння процесів онлайн-бізнесу. Це завдання ускладнюється, якщо справа стосується створення платформи для реселінгу, коли сайт пропонує продукцію відомого бренду. Саме у такій ситуації до нас звернувся стартап Iphone Discount. Ми допомогли йому побудувати технологічний фундамент для подальшого розвитку та масштабування онлайн-бізнесу.`,
		pageContent: IPhoneDiscountUa,
    links: {
      web: 'https://iphone-discount.ru',
      appStore: null,
      playMarket: null,
    },
	},
  cardanowater: {
		id: 'cardanowater',
		background:
			'linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);',
		image: cardanoLogo,
		longImage: cardanoImg,
		title: () => <>Cardano <SpanCardano> Water</SpanCardano></>,
		pageTitle: 'Cardano Water',
		description: `Cardano-Water - мультиплатформенна компанія, що веде діяльність у кількох напрямках бізнесу. У своєму новому проекті вона хотіла реалізувати не лише блокчейн технологію та NFT-колекції, а й привернути увагу громадськості до глобальних проблем з питною водою. Власне, ідея і будується навколо благодійних відрахувань з кожного проданого токену на потреби населення країн третього ешелону.`,
		responsibility: ['Web'],
		fullDescription: `Зараз як ніколи актуальною є проблема нестачі чистої питної води в деяких слаборозвинених країнах. Всесвітні організації просувають ідею її економії та дбайливого ставлення до цінного природного ресурсу, але водночас сидять склавши руки, не займаючись прямим вирішенням цієї несправедливості. На відміну від них, є компанії, які так чи інакше допомагають населенню, частково інвестуючи комісійні відрахування на потреби малозабезпечених людей. У даному кейсі ви дізнаєтеся про одного з подібних героїв, а саме про компанію Cardano-Water.`,
		pageContent: CardanoWaterUa,
    links: {
      web: 'https://cardano-water.io',
      appStore: null,
      playMarket: null,
    },
	},
  haski: {
		id: 'haski',
		background:
			`linear-gradient(90deg,#f5abd7,#59c4cd);`,
    image: haskiLogo,
    longImage: haskiImg,
		title: () => <SpanHaski>HASKI</SpanHaski>,
		pageTitle: 'Haski',
		description: `Haski є провідним постачальником послуг аутсорсингу. Він працює на ринку з 2008 року і вже міцно закріпився в ніші. Замовник вирішив масштабувати, тому наявної функціональності стало недостатньо. Прийнявши завдання, ми зібрали команду для аналізу готового продукту замовника та планування подальших дій. Робочий процес виявився напрочуд цікавим і різноманітним, але складним і незвичайним у технічному виконанні. Під час розробки ми створили новий продукт, перенесли старі дані в нове середовище, інтегрували їх з готовою базою даних, забезпечили обмін інформацією між ними.`,
		responsibility: ['Application','Design'],
		fullDescription: `Haski є провідним постачальником послуг аутсорсингу. Він працює на ринку з 2008 року і вже міцно закріпився в ніші. Замовник вирішив масштабувати, тому наявної функціональності стало недостатньо. Прийнявши завдання, ми зібрали команду для аналізу готового продукту замовника та планування подальших дій. Робочий процес виявився напрочуд цікавим і різноманітним, але складним і незвичайним у технічному виконанні. Під час розробки ми створили новий продукт, перенесли старі дані в нове середовище, інтегрували їх з готовою базою даних, забезпечили обмін інформацією між ними.`,
		pageContent: HaskiUa,
    links: {
      web: 'https://haski.ua',
      appStore: 'https://haski.ua',
      playMarket: 'https://haski.ua',
    },
	},
};

const SpanHaski = styled.span`
	color: #00a3e3;
`;

const SpanCardano = styled.span`
	color: #35258d;
`;

const SpanIphoneDiscount = styled.span`
	color: #ee6363;
`;

const SpanAskodOnline = styled.span`
	color: #32c178;
`;
const SpanSpb = styled.span`
	color: #fd233c;
	display: block;
`;

const SpanSushi = styled.span`
	color: #f8d343;
`;

export const portfolio = { en, ru, ua };
