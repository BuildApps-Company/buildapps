import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage/index';
import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';
import { H3 } from '../../styles/styled-headers';
import picture1 from '../../../static/images/projects/sushiproject/picture1.png';
import picture2 from '../../../static/images/projects/sushiproject/picture2.png';
import picture3 from '../../../static/images/projects/sushiproject/picture3.png';
import picture4 from '../../../static/images/projects/sushiproject/picture4.png';
import picture5 from '../../../static/images/projects/sushiproject/picture5.png';
import picture6 from '../../../static/images/projects/sushiproject/picture6.png';
import picture7 from '../../../static/images/projects/sushiproject/picture7.png';
import picture8 from '../../../static/images/projects/sushiproject/picture8.png';
import picture9 from '../../../static/images/projects/sushiproject/picture9.png';
import picture10 from '../../../static/images/projects/sushiproject/picture10.png';

const sushi = () => {
	return (
		<PortfolioDetails id={'sushi'}>
			<ProjectDetailsContainer>
				<p>
					Today a mobile application for delivery is the most effective, least
					expensive, and relevant way to attract new customers, increase their
					level of loyalty, and receive real feedback. As well as increasing
					sales and profits.
				</p>
				<ImgWrap>
					<img src={picture1} alt="picture1" />
					<img src={picture2} alt="picture2" />
				</ImgWrap>
				<H3>How it works?</H3>
				<p>
					For example, a client wants to order ready-made food at home, while he
					is still on the road. He launches the application on his smartphone.
					Selects a shop from the list of available restaurants in the city and
					places an order.
				</p>
				<ImgWrap>
					<img src={picture3} alt="picture3" />
				</ImgWrap>

				<p>
					In the overall list of dishes and products, we can make an order from
					the products we have selected. The description for a dish contains
					detailed information on the composition, calorie content, as well as
					the ratio of the main nutrients: proteins, fats and carbohydrates.
				</p>
				<ImgWrap>
					<img src={picture4} alt="picture4" />
					<img src={picture5} alt="picture5" />
				</ImgWrap>

				<p>
					After placing an order, it goes to the e-mail of the delivery service.
					And the rest is done by the service staff.
				</p>
				<ImgWrap>
					<img src={picture6} alt="picture6" />
					<img src={picture7} alt="picture7" />
				</ImgWrap>

				<p>
					In the application there is a possibility to add personal information
					to your profile to facilitate communication with the end customer.
				</p>
				<ImgWrap>
					<img src={picture8} alt="picture8" />
					<img src={picture9} alt="picture9" />
				</ImgWrap>
				<p>
					Also, each client participates in the bonus program, in which he
					accumulates points for payment in the application.
				</p>
				<ImgWrap>
					<img src={picture10} alt="picture10" />
				</ImgWrap>
				<p>
					Today's users are increasingly accustomed to saving their time with
					ready-to-eat food delivery apps or grocery packages.
					<ul>
						<li>
							- The app for ordering food from restaurants and cafes is used by
							food chains or catering chains, where the user can choose food
							from many different food outlets. In the latter case, restaurants
							and cafes that do not have their own delivery service become
							partners of the aggregator, which allows them to increase sales
							through delivery.
						</li>
						<li>
							- An app for the delivery of food from a supermarket or specialty
							health food store is used by food retailers. Users who value their
							time and effort prefer to order groceries at home using a mobile
							application in advance in order to receive a grocery basket with
							delivery at a convenient time. Developing this type of application
							is a laborious process that requires significant investment and
							ongoing support. For this reason, it is very important to think
							over the business process in advance so that the money invested in
							the creation of the application will pay off later.
						</li>
					</ul>
				</p>
				<p>
					* Our team took part in the initial stages of development and the
					first release versions together with the company{' '}
					<a href="https://notissimus.com/" target="_blank">
						Notisimus
					</a>
					.
				</p>
			</ProjectDetailsContainer>
		</PortfolioDetails>
	);
};

export default sushi;

const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	overflow: hidden;
	align-items: center;
	margin-top: 30px;
	margin-bottom: 30px;
	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
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
		max-width: 50%;
		@media all and (min-width: ${breakpoints.notebook}) {
			margin-right: 18px;
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
