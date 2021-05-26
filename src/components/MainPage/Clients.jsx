import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { clients } from '../../data/clients';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Clients() {
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', setWidth(window.innerWidth));
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: width <= 450 ? 1 : 2,
		slidesToScroll: 1,
	};

	return (
		<BlockWrapper>
			{width > 450 && <Title>Clients</Title>}

			<Slider {...settings}>
				{clients.map(client => (
					<div>
						<Image key={client.name} src={client.url} alt={client.name} />
					</div>
				))}
			</Slider>
		</BlockWrapper>
	);
}

const Title = styled.h2`
	margin: 0 0 67px 0;
	font-size: 4rem;
	line-height: 160%;
	text-transform: uppercase;

	&:after {
		content: '';
		display: block;
		width: 64px;
		height: 6px;
		background: ${colors.Main};
	}
`;

const BlockWrapper = styled.div`
	padding: 45px 30px;
	background: ${colors.grey.background};

	.slick-prev:before,
	.slick-next:before {
		color: #000000;
	}

	@media all and (min-width: ${breakpoints.phone}) {
		padding: 40px 11% 80px 11%;
	}
`;

const Image = styled.img`
	max-width: 270px;
	max-height: 90px;
	margin-left: auto;
	margin-right: auto;
`;
