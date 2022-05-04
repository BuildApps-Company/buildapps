import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';

const Accordion = ({ id, title, content, ActiveTab, setActiveTab }) => {
	const contentMap = Object.values(content);

	return (
		<AccordionItem>
			<TitleContainer
				onClick={() =>
					ActiveTab !== id ? setActiveTab(id) : setActiveTab(null)
				}
			>
				<Title>{title}</Title>
				<Title>{ActiveTab === id ? '-' : '+'}</Title>
			</TitleContainer>
			<Content ActiveTab={ActiveTab} id={id}>
				{contentMap.map(article => (
					<Paragraph>{article}</Paragraph>
				))}
			</Content>
		</AccordionItem>
	);
};

export default Accordion;

const AccordionItem = styled.div`
	display: block;
	color: ${colors.Font};
	border-top: 1px solid ${colors.grey.background};
	transition: height 1s ease-out;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-basis: fill;
	flex-direction: row;
	justify-content: space-between;
	cursor: pointer;
`;

const Title = styled.div`
	font-size: 20px;
	font-weight: 400;
	padding: 32px 0;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 24px;
	}
`;

const Paragraph = styled.p`
	display: block;
	font-size: 14px;
	margin: 0 0 12px 0;

	&:last-child {
		margin-bottom: 32px;
	}

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 16px;
	}
`;

const Content = styled.div`
	display: block;
	line-height: 160%;
	font-weight: 400;
	height: ${props => (props.ActiveTab !== props.id ? '0' : 'unset')};
	overflow: hidden;
	transition: all 0.3s;
`;
