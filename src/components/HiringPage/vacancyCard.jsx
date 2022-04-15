import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';

export const VacancyCard = ({ vacancy }) => {
	const { title, description, requirements, link } = vacancy;

	return (
		<VacancyContainer>

				<VacancyTitleWrapper>
					<Titile>{title}</Titile>
					<Titile>→</Titile>
				</VacancyTitleWrapper>
				<VacancyTagWrapper>
					{requirements.map((element, index) => {
						return <Tag key={index}>{element}</Tag>;
					})}
				</VacancyTagWrapper>
				<VacancyDescription>{description}</VacancyDescription>

		</VacancyContainer>
	);
};

const Tag = styled.p`
	display: block;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;
	padding: 7px 8px 4px;
	margin: 0;
	border: 1px solid ${colors.grey.constants};
	border-radius: 4px;

	@media all and (min-width: ${breakpoints.tablet}) {
		padding: 7px 12px 4px;
	}
`;

const VacancyTagWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 8px;
	margin-bottom: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		gap: 16px;
	}
`;

const VacancyLink = styled.a`
	display: block;
	text-decoration: none;
`;

const VacancyContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	padding: 18px;
	margin-bottom: 18px;
	transition: box-shadow 0.4s ease;
	transform: translateX(-18px);

	@media all and (min-width: ${breakpoints.tablet}) {
		padding: 32px;
		transform: translateX(-32px);

		&:hover {
			box-shadow: 0px 0px 6px 1px ${colors.grey.constants};
			h3,
			span {
				color: ${colors.Main};
			}
		}
	}
`;

const VacancyTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
`;

const Titile = styled.h3`
	display: block;
	font-size: 24px;
	font-weight: 700;
	line-height: 160%;
	margin: 0;
	margin-bottom: 16px;

	@media all and (max-width: ${breakpoints.tablet}) {
		font-size: 18px;
		line-height: 110%;
	}

	@media all and (max-width: ${breakpoints.phone}) {
		font-size: 14px;
		line-height: 100%;
	}
`;

const VacancyDescription = styled.p`
	display: block;
	font-size: 16px;
	line-height: 160%;
	margin: 0;
`;
