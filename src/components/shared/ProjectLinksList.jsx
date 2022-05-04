import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import { useTranslation } from 'react-i18next';

export const LinksList = ({ links }) => {
	const { web, appStore, playMarket } = links;
	const { t } = useTranslation();

	const isLinksBlockVisible = web || appStore || playMarket;

	return (
		<>
			{isLinksBlockVisible && (
				<LinksContainer>
					<StoreContainer>
						{web && (
							<Link href={web} target="_blank">
								{t('projectsLinks.webSite')}
							</Link>
						)}
						{playMarket && (
							<Link href={playMarket} target="_blank">
								Google Play
							</Link>
						)}
						{appStore && (
							<Link href={appStore} target="_blank">
								Apple Store
							</Link>
						)}
					</StoreContainer>
				</LinksContainer>
			)}
		</>
	);
};

const LinksContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: ${breakpoints.phone}) {
		padding: 0 16px;
		flex-direction: column;
	}
`;

const Link = styled.a`
	position: relative;
	color: ${colors.light.white};
	font-size: 1rem;
	margin: 0;
	padding: 8px 16px;
	font-weight: bold;
	text-align: center;
	cursor: pointer;
	text-decoration: none;

	&:before {
		display: block;
		position: absolute;
		content: '';
		height: 2px;
		top: 100%;
		left: 10px;
		right: 10px;
		background: ${colors.light.white};
		transform: scaleX(0);
		transition: all 0.25s;
	}

	&:hover {
		color: ${colors.light.white};

		&:before {
			transform: scaleX(1);
		}
	}

	@media (min-width: ${breakpoints.phone}) {
		&:not(:last-child):after {
			position: absolute;
			content: '';
			width: 2px;
			height: 50%;
			right: -15px;
			background-color: ${colors.light.white};
		}
	}
`;

const StoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 24px;

	@media (max-width: ${breakpoints.phone}) {
		padding: 0 16px;
		flex-direction: column;
	}
`;
