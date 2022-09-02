import Output from 'editorjs-react-renderer';
import React from 'react';
import styled from 'styled-components';
import { ProjectDetailsContainer } from '../../styles/portfolio';
import ReactHtmlParser from 'react-html-parser';
import { H3, H4 } from '../../styles/styled-headers';
import { breakpoints } from '../../styles/breakpoints';
import Slider from 'react-slick';
import arrowLeftSlider from '../../../static/images/arrowLeftSlider.svg';
import arrowLeftSliderHover from '../../../static/images/arrowLeftSliderHover.svg';
import arrowRightSliderHover from '../../../static/images/arrowRightSliderHover.svg';
import arrowRightSlider from '../../../static/images/arrowRightSlider.svg';

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const selectHlevel = data => {
	switch (data.level) {
		case 3:
			return <H3>{ReactHtmlParser(data.text)}</H3>;
		case 4:
			return <H4>{ReactHtmlParser(data.text)}</H4>;
	}
};

const CustomHeaderRenderer = ({ data }) => {
	let content = null;

	if (typeof data === 'string') content = data;
	else if (
		typeof data === 'object' &&
		data.text &&
		typeof data.text === 'string'
	)
		content = data.text;

	return content ? selectHlevel(data) : '';
};

const CustomImageRenderer = ({ data }) => {
	console.log(data);
	if (data.length) {
		if (data.length <= 2) {
			return (
				<ImgWrap length={data.length}>
					{data.map((item, idx) => (
						<Img
							length={data.length}
							key={idx}
							src={`${process.env.GATSBY_API_DATA_URL}${item.url}`}
							alt={item.caption}
						/>
					))}
				</ImgWrap>
			);
		} else {
			return (
				<BlockSlider>
					<Slider {...settings}>
						{data.map((item, idx) => (
							<div>
								<img
									style={{ maxWidth: '100%' }}
									key={idx}
									src={`${process.env.GATSBY_API_DATA_URL}${item.url}`}
									alt={item.caption}
								/>
							</div>
						))}
					</Slider>
				</BlockSlider>
			);
		}
	}
	return null;
};

export const Details = ({ data }) => {
	const content = JSON.parse(data);
	const renderers = {
		header: CustomHeaderRenderer,
		image: CustomImageRenderer,
	};

	return (
		<ProjectDetailsContainer>
			<Output renderers={renderers} data={content} />
		</ProjectDetailsContainer>
	);
};

const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	overflow: hidden;
	align-items: center;
	margin-top: 30px;
	margin-bottom: 30px;
	& > ${Img}:first-child {
		margin-right: ${props =>
			props.length > 1 ? '18px !important' : '0px !important'};
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		flex-direction: row;
	}
`;

const Img = styled.img`
	margin: 0px !important;
	max-width: ${props =>
		props.length > 1 ? '49% !important' : '100% !important'};
`;

const BlockSlider = styled.div`
	margin-top: 36px;
	width: 100%;
	overflow-y: clip;
	max-height: 190px;
	margin-bottom: 70px;
	@media all and (min-width: ${breakpoints.tablet}) {
		max-height: 612px;
	}
	@media all and (min-width: ${breakpoints.notebook}) {
		margin-top: 128px;
		margin-bottom: 100px;
	}
	.slick-prev {
		display: none !important;
		@media all and (min-width: ${breakpoints.notebook}) {
			display: block !important;
			left: -12%;
			top: 32%;
			&:hover,
			&:focus {
				&.slick-prev:before {
					content: url(${arrowLeftSliderHover});
				}
			}
		}
	}
	.slick-next {
		display: none !important;
		@media all and (min-width: ${breakpoints.notebook}) {
			display: block !important;
			right: -6%;
			top: 32%;
			&:hover,
			&:focus {
				&.slick-next:before {
					content: url(${arrowRightSliderHover});
				}
			}
		}
	}
	.slick-prev:before {
		@media all and (min-width: ${breakpoints.notebook}) {
			content: url(${arrowLeftSlider});
		}
	}
	.slick-next:before {
		@media all and (min-width: ${breakpoints.notebook}) {
			content: url(${arrowRightSlider});
		}
	}

	img {
		width: 100%;
	}
`;
