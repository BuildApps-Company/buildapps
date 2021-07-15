import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage/index';
import { breakpoints } from '../../styles/breakpoints';
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

const spbProperty = () => {
	return (
		<PortfolioDetails id={'spbProperty'}>
			<ProjectDetailsContainer>
				<GifWrap>
					<img src={gif1} alt="gif1" />
					<img src={gif2} alt="gif2" />
				</GifWrap>
				<p>
					Hundreds of people regularly search for apartments, conclude lease
					agreements with realtors, buy new properties or sell old ones. The
					growing demand and the accelerated pace of life leave people with less
					and less time to personally solve such problems. Who would be asked
					more often for help in these matters? To someone who can solve them
					not only qualitatively, but also faster than others. A real estate
					mobile app will give your business a competitive advantage. AgentPN is
					a professional application only for real estate agencies - partners of
					Petersburg Real Estate. Search and booking of apartments in the
					largest database of new buildings in St. Petersburg and the Leningrad
					region. A login to the application is by a phone number. Use your
					favorite work tool wherever you are. Conduct consultations remotely in
					a place convenient for the client. Access to apartments, mortgage
					calculator, apartment reservations, as well as a convenient database
					of your clients - in one application.
				</p>
				<ul>
					<li>
						- Simple and intuitive interface - fast movement between tabs and
						easy interaction;
					</li>
				</ul>
				<ImgWrap>
					<img src={picture1} alt="picture1" />
					<img src={picture2} alt="picture2" />
				</ImgWrap>

				<ul>
					<li>
						- Convenient search filters - selection by specified parameters;
					</li>
					<li>
						- Search on the map - demonstration of the object in relation to the
						location;
					</li>
					<li>
						- Actual apartmentography - data on the availability of apartments
						and current prices online;
					</li>
				</ul>
				<ImgWrap>
					<img src={picture3} alt="picture3" />
					<img src={picture4} alt="picture4" />
				</ImgWrap>

				<ul>
					<li>
						- Major developers - access to the exclusive database of Petersburg
						Real Estate, including Setl City facilities;
					</li>
				</ul>
				<ImgWrap>
					<img src={picture5} alt="picture5" />
					<img src={picture6} alt="picture6" />
				</ImgWrap>

				<ul>
					<li>
						- Detailed layouts - the layout of the apartment specifying
						parameters;
					</li>
					<li>
						- Online booking in the application - send requests instantly and do
						not lose customers;
					</li>
				</ul>
				<ImgWrap>
					<img src={picture7} alt="picture7" />
					<img src={picture8} alt="picture8" />
				</ImgWrap>

				<ul>
					<li>
						- Presentations for clients - the formation of a commercial proposal
						and sending to the client It is easy to sell more with Petersburg
						Real Estate. Join a team of leaders, offer the best for your
						clients, surprise them with your efficiency and competence. AgentPN
						is your mobile sales tool;
					</li>
				</ul>
				<p>
					* Our team took part in the initial stages of development and the
					first release versions together with the company Notisimus
					<a href="https://notissimus.com/" target="_blank" />
					(https://notissimus.com/).
				</p>
			</ProjectDetailsContainer>
		</PortfolioDetails>
	);
};

export default spbProperty;

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
