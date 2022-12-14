import React from 'react';
import styled from 'styled-components';
import { useContributorsData } from '../../data';
import { breakpoints } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';

export const ContributorsList = () => {
	const ourContributorsData = useContributorsData();

  const { t } = useTranslation();
	return (
		<>
			<ContributorsTitle>{t('aboutUsPage.contributorsTitle')}</ContributorsTitle>

			<StyledContributorsList>
				{ourContributorsData.map(el => (
					<li key={el.key}>
						<StyledImg src={el.img} alt={el.name} />
						<PositionP>{el.position}</PositionP>
						<h3>{el.name}</h3>
					</li>
				))}
			</StyledContributorsList>
		</>
	);
};

const StyledImg = styled.img`
	border-radius: 8px;
`;

const PositionP = styled.p`
  display: inline-block;
  min-height: 40px;
`

const ContributorsTitle = styled.h2`
	margin: 0 0 24px 0;
	padding: 0;
	font-size: 2rem;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.notebook}) {
		margin-bottom: 40px;
		font-size: 4rem;
		/* white-space: nowrap; */
	}
`;

const StyledContributorsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	list-style: none;
	margin-bottom: 40px;

	li:not(:nth-last-child(-n + 2)) {
		margin-bottom: 24px;

		@media all and (min-width: ${breakpoints.notebook}) {
			margin-bottom: 54px;
		}
	}

	li {
		width: calc((100% - 16px) / 2);
	}

	li:nth-child(odd) {
		margin-right: 16px;
	}

	img {
		width: 100%;
		margin-bottom: 8px;
	}

	p {
		margin: 0;
		padding: 0;
		font-size: 0.75rem;
		line-height: 160%;
		opacity: 0.75;

		@media all and (min-width: ${breakpoints.phone}) {
			font-size: 1rem;
		}
	}

	h3 {
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
		line-height: 160%;

		@media all and (max-width: ${breakpoints.phone}) {
			word-spacing: 111px;
		}
	}
`;
