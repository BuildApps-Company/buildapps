import React from 'react';
import styled from 'styled-components';
import gif1 from '../../../static/images/projects/realestate/pn0.gif';
import gif2 from '../../../static/images/projects/realestate/pn2.gif';
import picture1 from '../../../static/images/projects/realestate/web/1.jpg';
import picture2 from '../../../static/images/projects/realestate/web/2.jpg';
import picture3 from '../../../static/images/projects/realestate/web/3.jpg';
import picture4 from '../../../static/images/projects/realestate/web/4.jpg';
import picture5 from '../../../static/images/projects/realestate/web/5.jpg';
import picture6 from '../../../static/images/projects/realestate/web/6.jpg';
import picture7 from '../../../static/images/projects/realestate/web/7.jpg';
import picture8 from '../../../static/images/projects/realestate/web/8.jpg';
import { breakpoints } from '../../styles/breakpoints';

export const SpbPropertyEn = () => (
	<ProjectDetailsContainer>
		<GifWrap>
			<img src={gif1} alt="gif1" />
			<img src={gif2} alt="gif2" />
		</GifWrap>
		<p>
			Hundreds of people regularly search for apartments, conclude lease
			agreements with realtors, buy new properties or sell old ones. The growing
			demand and the accelerated pace of life leave people with less and less
			time to personally solve such problems. Who would be asked more often for
			help in these matters? To someone who can solve them not only
			qualitatively, but also faster than others. A real estate mobile app will
			give your business a competitive advantage. AgentPN is a professional
			application only for real estate agencies - partners of Petersburg Real
			Estate. Search and booking of apartments in the largest database of new
			buildings in St. Petersburg and the Leningrad region. A login to the
			application is by a phone number. Use your favorite work tool wherever you
			are. Conduct consultations remotely in a place convenient for the client.
			Access to apartments, mortgage calculator, apartment reservations, as well
			as a convenient database of your clients - in one application.
		</p>
		<ul>
			<li>
				- Simple and intuitive interface - fast movement between tabs and easy
				interaction;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture1} alt="picture1" />
			<img src={picture2} alt="picture2" />
		</ImgWrap>

		<ul>
			<li>- Convenient search filters - selection by specified parameters;</li>
			<li>
				- Search on the map - demonstration of the object in relation to the
				location;
			</li>
			<li>
				- Actual apartmentography - data on the availability of apartments and
				current prices online;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture3} alt="picture3" />
			<img src={picture4} alt="picture4" />
		</ImgWrap>

		<ul>
			<li>
				- Major developers - access to the exclusive database of Petersburg Real
				Estate, including Setl City facilities;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture5} alt="picture5" />
			<img src={picture6} alt="picture6" />
		</ImgWrap>

		<ul>
			<li>
				- Detailed layouts - the layout of the apartment specifying parameters;
			</li>
			<li>
				- Online booking in the application - send requests instantly and do not
				lose customers;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture7} alt="picture7" />
			<img src={picture8} alt="picture8" />
		</ImgWrap>

		<ul>
			<li>
				- Presentations for clients - the formation of a commercial proposal and
				sending to the client It is easy to sell more with Petersburg Real
				Estate. Join a team of leaders, offer the best for your clients,
				surprise them with your efficiency and competence. AgentPN is your
				mobile sales tool;
			</li>
		</ul>
		<p>
			* Our team took part in the initial stages of development and the first
			release versions together with the company{' '}
			<a href="https://notissimus.com/" target="_blank">
				Notissimus
			</a>
		</p>
	</ProjectDetailsContainer>
);

export const SpbPropertyRu = () => (
	<ProjectDetailsContainer>
		<GifWrap>
			<img src={gif1} alt="gif1" />
			<img src={gif2} alt="gif2" />
		</GifWrap>
		<p>
      Сотни людей регулярно ищут квартиры, заключают договоры аренды с
      риелторами, покупают новую недвижимость или продают старую. Растущий
      спрос и ускоренный темп жизни оставляют у людей все меньше и меньше
      времени для личного решения подобных проблем. К кому бы чаще обращались
      за помощью в этих вопросах? Кому-то, кто сможет их решить не только
      качественно, но и быстрее других. Мобильное приложение по недвижимости
      даст вашему бизнесу конкурентное преимущество. AgentPN - профессиональное
      приложение только для агентств недвижимости - партнеров компании
      «Петербургская недвижимость». Поиск и бронирование квартир в крупнейшей
      базе новостроек Санкт-Петербурга и Ленинградской области. Вход в
      приложение осуществляется по номеру телефона. Используйте свой любимый
      рабочий инструмент, где бы вы ни находились. Консультации проводим
      удаленно в удобном для клиента месте. Доступ к квартирам, ипотечному
      калькулятору, бронированию квартир, а также удобная база данных ваших
      клиентов - в одном приложении.
		</p>
		<ul>
			<li>
        - Простой и понятный интерфейс - быстрое перемещение между вкладками и удобное взаимодействие;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture1} alt="picture1" />
			<img src={picture2} alt="picture2" />
		</ImgWrap>

		<ul>
			<li>- Удобные фильтры поиска - выбор по заданным параметрам;</li>
			<li>
        - Поиск на карте - демонстрация объекта по отношению к местоположению;
			</li>
			<li>
        - Актуальная квартираография - данные о наличии квартир и текущих ценах онлайн;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture3} alt="picture3" />
			<img src={picture4} alt="picture4" />
		</ImgWrap>

		<ul>
			<li>
        - Крупные девелоперы - доступ к эксклюзивной базе данных «Петербургская недвижимость», включая объекты Setl City;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture5} alt="picture5" />
			<img src={picture6} alt="picture6" />
		</ImgWrap>

		<ul>
			<li>
        - Детальные планировки - планировка квартиры с указанием параметров;
			</li>
			<li>
        - Онлайн-бронирование в приложении - отправляйте заявки моментально и не теряйте клиентов;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture7} alt="picture7" />
			<img src={picture8} alt="picture8" />
		</ImgWrap>

		<ul>
			<li>
        - Презентации для клиентов - формирование коммерческого предложения и отправка клиенту. С Петербургской Недвижимостью легко продать больше. Присоединяйтесь к команде лидеров, предлагайте лучшее своим клиентам, удивляйте их своей эффективностью и компетентностью. AgentPN - ваш мобильный инструмент продаж;
			</li>
		</ul>
		<p>
      * Наша команда принимала участие в начальных этапах разработки и первых релизных версиях вместе с компанией{' '}
			<a href="https://notissimus.com/" target="_blank">
				Notissimus
			</a>
		</p>
	</ProjectDetailsContainer>
);

export const SpbPropertyUa = () => (
	<ProjectDetailsContainer>
		<GifWrap>
			<img src={gif1} alt="gif1" />
			<img src={gif2} alt="gif2" />
		</GifWrap>
		<p>
      Сотні людей регулярно шукають квартири, укладають договори оренди з ріелторами, купують нову нерухомість або продають стару. Зростаючий попит і прискорений темп життя залишають у людей все менше часу на особисте вирішення подібних проблем. До кого частіше звертатимуться за допомогою в цих справах? Тому, хто може вирішити їх не тільки якісно, а й швидше за інших. Мобільний додаток для нерухомості дасть вашому бізнесу конкурентну перевагу. AgentPN - це професійний додаток тільки для агентств нерухомості - партнерів Petersburg Real Estate. Пошук та бронювання квартир у найбільшій базі новобудов Санкт-Петербурга та Ленінградської області. Вхід до програми здійснюється за номером телефону. Використовуйте свій улюблений робочий інструмент, де б ви не були. Проводити консультації дистанційно в зручному для клієнта місці. Доступ до квартир, іпотечного калькулятора, бронювання квартир, а також зручної бази даних ваших клієнтів - в одному додатку.
		</p>
		<ul>
			<li>
        - Простий та інтуїтивно зрозумілий інтерфейс - швидке переміщення між вкладками та легка взаємодія;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture1} alt="picture1" />
			<img src={picture2} alt="picture2" />
		</ImgWrap>

		<ul>
			<li>- Зручні фільтри пошуку - вибір за заданими параметрами;</li>
			<li>
        - Пошук на карті - демонстрація об'єкта щодо місця розташування;
			</li>
			<li>
        - Актуальна квартирографія - дані про наявність квартир і актуальні ціни в мережі;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture3} alt="picture3" />
			<img src={picture4} alt="picture4" />
		</ImgWrap>

		<ul>
			<li>
        - Великі забудовники - доступ до ексклюзивної бази даних Петербургської нерухомості, в тому числі об'єктів Setl City;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture5} alt="picture5" />
			<img src={picture6} alt="picture6" />
		</ImgWrap>

		<ul>
			<li>
        - Детальні планування - планування квартири із зазначенням параметрів;
			</li>
			<li>
        - Онлайн бронювання в додатку - відправляйте запити миттєво і не втрачайте клієнтів;
			</li>
		</ul>
		<ImgWrap>
			<img src={picture7} alt="picture7" />
			<img src={picture8} alt="picture8" />
		</ImgWrap>

		<ul>
			<li>
        - Презентації для клієнтів - формування комерційної пропозиції та відправка клієнту. З Petersburg Real Estate легко продати більше. Приєднуйтесь до команди лідерів, пропонуйте найкраще для своїх клієнтів, дивуйте їх своєю ефективністю та компетентністю. AgentPN – це ваш мобільний інструмент продажів;
			</li>
		</ul>
		<p>
    * Наша команда разом з компанією брала участь у початкових етапах розробки та випуску перших версій{' '}
			<a href="https://notissimus.com/" target="_blank">
				Notissimus
			</a>
		</p>
	</ProjectDetailsContainer>
);

const GifWrap = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
		justify-content: space-between;
	}
	@media all and (min-width: 1480px) {
		justify-content: space-around;
	}
`;

const ImgWrap = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	overflow: hidden;
	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
		justify-content: space-between;
	}
	@media all and (min-width: 1480px) {
		justify-content: space-around;
	}
`;

const ProjectDetailsContainer = styled.div`
	padding-left: 16px;
	padding-right: 16px;
	a {
		text-decoration: none;
		display: inline-block;
	}
	img {
		max-width: 100%;
		@media all and (min-width: ${breakpoints.notebook}) {
			margin-right: 18px;
		}
		@media all and (min-width: 1480px) {
			margin-right: 0px;
		}
	}
	ul {
		padding: 0;
		list-style: none;
	}
	p {
		font-size: 1rem;
		line-height: 160%;
	}
	li {
		font-size: 1rem;
		line-height: 160%;
	}
	margin-bottom: 26px;

	@media all and (min-width: ${breakpoints.tablet}) {
		margin-bottom: 48px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 24px;
		padding-left: 18%;
		padding-right: 18%;
		margin-top: 32px;

		p {
			font-size: 1.5rem;
			line-height: 160%;
		}
		li {
			font-size: 1.5rem;
			line-height: 160%;
		}
	}
`;
