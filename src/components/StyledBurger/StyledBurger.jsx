import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBurger = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toogleList = () => setIsOpen(prevState => !prevState);
	return (
		<>
			<SvgWrap>
				<defs>
					<filter id="gooeyness">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="2.2"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
							result="gooeyness"
						/>
						<feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
					</filter>
				</defs>
			</SvgWrap>
			<Plate onClick={toogleList} active={isOpen}>
				<Burger
					width="100"
					height="100"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<Line1 d="M 30,35 H 70 " />
					<Line2 d="M 50,50 H 30 L 34,32" />
					<Line3 d="M 50,50 H 70 L 66,68" />
					<Line4 d="M 30,65 H 70 " />
				</Burger>

				<X version="1.1" height="100" width="100" viewBox="0 0 100 100">
					<Line d="M 34,32 L 66,68" />
					<Line d="M 66,32 L 34,68" />
				</X>
			</Plate>
		</>
	);
};

export default StyledBurger;

const SvgWrap = styled.svg`
	height: 80px;
	position: absolute;
	width: 80px;
`;
const Line = styled.path`
	fill: none;
	stroke: black;
	stroke-width: 6px;
	stroke-linecap: round;
	stroke-linejoin: round;
	transform-origin: 50%;
	transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms,
		transform 500ms 200ms;
`;

const Line1 = styled(Line)`
	stroke-dasharray: 40 40;
`;
const Line2 = styled(Line)`
	stroke-dasharray: 21 39;
`;
const Line3 = styled(Line)`
	stroke-dasharray: 21 39;
`;
const Line4 = styled(Line)`
	stroke-dasharray: 40 40;
`;

const X = styled.svg`
	height: 80px;
	position: absolute;
	width: 80px;
	transform: scale(0);
	transition: transform 400ms;

	${Line} {
		stroke-width: 5.5px;
	}
`;

const Plate = styled.div`
  height: 80px;
  width: 80px;
  ${Line} {
    transition: stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms,
      transform 400ms 100ms;
  }

  ${X} {
    transition: transform 400ms 50ms;
  }
  ${({ active }) =>
		active &&
		`${Line} {transition: stroke-dasharray 500ms, stroke-dashoffset 500ms, transform 500ms;}`}

  ${({ active }) =>
		active && `${X} {transform: scale(1); transition: transform 400ms 350ms;}`}

		${({ active }) =>
			active &&
			`${Line} { transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms;}`}

	${({ active }) =>
		active &&
		`${Line1} {   stroke-dasharray: 1 40;
  stroke-dashoffset: -33px;}`}

	${({ active }) =>
		active &&
		`${Line2} {   stroke-dasharray: 5 39;
  stroke-dashoffset: -37px;}`}

	${({ active }) =>
		active &&
		`${Line3} {   stroke-dasharray: 5 39;
  stroke-dashoffset: -37px;}`}

	${({ active }) =>
		active &&
		`${Line4} {   stroke-dasharray: 1 40;
  stroke-dashoffset: -33px;}`}

${({ active }) => active && `${X} {transition: transform 400ms 50ms;}`}
`;
const Burger = styled.svg`
	height: 80px;
	position: absolute;
	width: 80px;
	filter: url(#gooeyness);
`;
