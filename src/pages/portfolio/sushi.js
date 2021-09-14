import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage/index';
import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';
import { H3, H4 } from '../../styles/styled-headers';
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
import { ProjectDetailsContainer } from './shared';

const sushi = () => {
	return (
		<PortfolioDetails id={'sushi'}>
			<ProjectDetailsContainer>
				<H3>
					Building and scaling business processes of the FoodTech online service
					that increased the flow of customers by 25%
				</H3>
				<p>
					Establishing business processes from scratch is always difficult,
					especially when it comes to such a demanding area as FoodTech.
					Founders of online services are faced with a serious task: to organize
					and automate all stages of orders and provide a unique user
					experience. We helped SushiShop, a mobile app for food delivery, to
					solve this problem. Our team took part in the initial stages of its
					development and the first release versions.
				</p>
				<ImgWrap>
					<img src={picture1} alt="picture1" />
					<img src={picture2} alt="picture2" />
				</ImgWrap>
				<H3>
					SushiShop: the problems of organizing and scaling FoodTech processes
					that we needed to solve
				</H3>
				<p>
					SushiShop is a mobile application for ordering Japanese dishes. The
					idea is to make the app automatically recognize the distance from the
					user to the nearest store and personalize the services. However,
					already at the initial stages of the implementation of the idea, the
					customer's team faced many problems associated with the low speed of
					processing orders, the lack of delivery monitoring tools, non-unique
					functionality, and integration difficulties.
				</p>
				<p>
					After a couple of unsuccessful attempts to optimize the processes on
					their own, the SushiShop management turned to the IT specialists of
					BuildApps. The client was convinced of our professionalism earlier
					while working on another project. Now we were required not only to
					create a technical base but also to implement custom features for the
					successful promotion of the platform. And it was necessary to do this
					in a short time, in 4 months.
				</p>
				<ImgWrap>
					<img src={picture3} alt="picture3" />
				</ImgWrap>
				<H4>A set of tasks that we had to complete </H4>
				<p>
					In the process of setting goals, BuildApps specialists focused on key
					business goals and company’s individual requirements. As a result, we
					formed the following list of priority tasks:
				</p>
				<ul>
					<li>
						Reducing the time for processing applications at the level of both
						the platform and the sales department.
					</li>
					<li>
						Organization of logistics processes and increasing the accuracy of
						geolocation.
					</li>
					<li>
						Integration with monitoring systems for step-by-step tracking of the
						customer's path and order delivery.
					</li>
					<li>
						Improving the user experience when choosing foods, meals, drinks,
						and placing an order.
					</li>
					<li>
						Implementation of a bonus loyalty program to expand the customer
						base and attract traffic.
					</li>
					<li>
						Development of a buyer's personal account to store the history of
						interactions with the app.
					</li>
				</ul>
				<p>
					After agreeing on the terms of reference with the management of
					SushiShop, it was decided to expand the IT team to achieve the set
					results in a short time. Several IT specialists were additionally
					involved in the work, including from the partner company, Notissimus.
					As a result, the team grew from two (developer and technical analyst)
					to 6 performers (4 developers, analyst, tester, and marketer).
				</p>
				<ImgWrap>
					<img src={picture4} alt="picture4" />
					<img src={picture5} alt="picture5" />
				</ImgWrap>
				<H4>How we organized the workflow and eliminated pitfalls</H4>
				<p>
					The work was organized in accordance with Scrum algorithms. The
					process consisted of equal intervals of time, and after each of them,
					the app was tested with a specific set of functions. We chose this
					methodology for a simple reason: it ideally suited the requirements of
					the client and the project. SushiShop management was interested in
					taking part in the development from the very beginning: to have stable
					builds step by step, track progress, and receive reports on each
					completed task.
				</p>
				<ImgWrap>
					<img src={picture6} alt="picture6" />
					<img src={picture7} alt="picture7" />
				</ImgWrap>
				<H4>The use of flexible methodology allowed us to:</H4>
				<ul>
					<li>
						ensure transparency of cooperation by providing the customer with
						access to intermediate results;
					</li>
					<li>
						competently distribute responsibilities at each stage of scaling and
						product deployment;
					</li>
					<li>
						simplify analytics, build customization, and test the app in
						partnership together with another team;
					</li>
					<li>
						avoid problems associated with changing market trends and user
						needs.
					</li>
				</ul>
				<p>
					So, thanks to flexible scrum planning and adherence to the best
					programming practices, we increased the efficiency of completing tasks
					with minimal investment and resources. It led to the creation of the
					release version of the app after 4 months.
				</p>
				<ImgWrap>
					<img src={picture8} alt="picture8" />
					<img src={picture9} alt="picture9" />
				</ImgWrap>
				<H4>What steps we took to achieve the key goals</H4>
				<p>The BuildApps team completed:</p>
				<ul>
					<li>
						Building CI/CD processes to speed up the feedback loop and reduce
						the financial burden on the customer.
					</li>
					<li>
						Coding of screens for Android and IOS to create a base for promoting
						the service in top app stores.
					</li>
					<li>
						Adding the Cart and Customer Profile modules to expand the
						possibilities of using the service.
					</li>
					<li>
						Creation of a loyalty program with the ability to collect bonus
						points, focused on active orders, to motivate purchases.
					</li>
					<li>
						Setting up sending notifications to the client's email after placing
						an order to ensure the transparency of the service.
					</li>
					<li>
						Automation of obtaining data about the user's location to calculate
						the optimal delivery time for the goods selected by them.
					</li>
					<li>
						Development of a detailed catalog of products with an indication of
						the composition and calorie content to customize the selection of
						goods.
					</li>
				</ul>
				<ImgWrap>
					<img src={picture10} alt="picture10" />
				</ImgWrap>
				<H4>Sustainable improvements that we managed to achieve in 4 months</H4>
				<p>
					As a result of the consistent work of a team of 6 professionals on the
					project, a number of unique ideas, both technical and marketing, were
					implemented.
				</p>
				<p>
					Among our achievements appreciated by users of the release version: an
					intuitive interface, convenient search and selection functions, a
					script that encourages active purchases, and a high response rate to
					requests.
				</p>
				<p>
					For business users of SushiShop, the most useful achievements are:
					flexible internal mechanisms that allow updating the interface and
					introducing new functions, constant product support, and reduced
					response time to problems by setting up logging.
				</p>
				<p>
					Taken together, it gave impressive results: an increase in the flow of
					customers by more than 25%, an expansion of the sales geography, and
					an increase in network awareness, thanks to receiving positive reviews
					in marketplaces.
				</p>
				<p>
					* Our team took part in the initial stages of development and the
					first release versions together with the company{' '}
					<a href="https://notissimus.com/" target="_blank">
						Notissimus
					</a>
					.
				</p>
				<H4>
					Dreaming of your own FoodTech project? Do you want to get tangible
					results without unnecessary investments? Contact BuildApps to discuss
					the details of cooperation!
				</H4>
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
