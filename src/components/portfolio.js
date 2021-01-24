import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import PortfolioCard from './portfolio-card';
import SectionHeader from './section-header';
import { Menu } from '../data/menu';
import { SlideContainer } from '../styles/shared';
import { Portfolio } from '../data/portfolio';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import Slider from 'react-slick';
// import 'react-slick/slick-carousel/slick/slick.css';
// import 'react-slick/slick-carousel/slick/slick-theme.css';

// const CardsContainer = styled(SlideContainer)`
// 	display: flex;
// 	justify-content: center;
// 	flex-wrap: wrap;
// `;

// export default () => (
// 	<div id={Menu.portfolio.key}>
// 		<SectionHeader
// 			smallDescription="portfolio"
// 			largeDescription="Projects we worked on"
// 		/>
// 		<CardsContainer>
// 			{Object.entries(Portfolio).map(([key, example]) => (
// 				<PortfolioCard
// 					key={key}
// 					text={example.title}
// 					image={example.image}
// 					description={example.description}
// 				/>
// 			))}
// 		</CardsContainer>
// 	</div>
// );

// export default class SimpleSlider extends Component {
// 	render() {
// 		const settings = {
// 			dots: false,
// 			infinite: true,
// 			speed: 500,
// 			arrows: true,
// 			slidesToShow: 1,
// 			slidesToScroll: 1,

// 		};
// 		return (
// 			<div id={Menu.portfolio.key}>
// 				<SectionHeader
// 					smallDescription="portfolio"
// 					largeDescription="Projects we worked on"
// 				/>
// 				<Slider {...settings}>
// 					{Object.entries(Portfolio).map(([key, example]) => (
// 						<PortfolioCard
// 							key={key}
// 							text={example.title}
// 							image={example.image}
// 							description={example.description}
// 						/>
// 					))}
// 				</Slider>
// 			</div>
// 		);
// 	}
// }
const StyledAwesomeSlider = styled(AwesomeSlider)`
	
	.awssld__content {
		background-color: #f9f9f9;
		max-width: 1200px;
	}
`;

export default () => (
	<div id={Menu.portfolio.key}>
		<SectionHeader
			smallDescription="portfolio"
			largeDescription="Projects we worked on"
		/>
		<StyledAwesomeSlider bullets={false}>
			{Object.entries(Portfolio).map(([key, example]) => (
				<div>
					<PortfolioCard
						key={key}
						text={example.title}
						image={example.image}
						description={example.description}
					/>
				</div>
			))}
		</StyledAwesomeSlider>
	</div>
);
