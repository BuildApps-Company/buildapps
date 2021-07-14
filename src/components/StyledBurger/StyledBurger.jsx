import React from 'react';
import styled from 'styled-components';

const StyledBurger = ({ toogleList, active }) => {
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
			<Plate onClick={toogleList} active={active}>
				<Burger
					width="64"
					height="64"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<Line1 d="M 30,35 H 70 " />
					<Line2 d="M 50,50 H 30 L 34,32" />
					<Line3 d="M 50,50 H 70 L 66,68" />
					<Line4 d="M 30,65 H 70 " />
				</Burger>
				<X
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<Line
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.9461 12.1623C12.7297 11.9459 12.3788 11.9459 12.1623 12.1623C11.9459 12.3788 11.9459 12.7297 12.1623 12.9461L19.2165 20.0002L12.1625 27.0542C11.9461 27.2706 11.9461 27.6215 12.1625 27.8379C12.379 28.0544 12.7299 28.0544 12.9463 27.8379L20.0002 20.784L27.0539 27.8377C27.2703 28.0541 27.6212 28.0541 27.8377 27.8377C28.0541 27.6212 28.0541 27.2703 27.8377 27.0539L20.784 20.0002L27.8379 12.9464C28.0543 12.7299 28.0543 12.379 27.8379 12.1626C27.6215 11.9462 27.2706 11.9462 27.0541 12.1626L20.0002 19.2165L12.9461 12.1623Z"
						fill="#ffffff"
					/>
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
	stroke: white;
	stroke-width: 4px;
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

const X = styled(SvgWrap)`
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
	${Line1} 
	${Line2} 
	${Line3} 
	${Line4} 
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
const Burger = styled(SvgWrap)`
	filter: url(#gooeyness);
`;
