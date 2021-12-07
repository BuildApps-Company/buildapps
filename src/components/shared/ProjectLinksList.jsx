import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import appStoreImg from '../../../static/images/portfolio/app-store-logo.png';
import palyStoreImg from '../../../static/images/portfolio/google-play-logo.png';
import { useTranslation } from 'react-i18next';

export const LinksList = ({ links }) => {
  const { web, appStore, playMarket } = links;
  const { t } = useTranslation();
	return (
			<LinksContainer>
        {web &&
          <WebLink href={web} target="_blank" rel="noopener">
            <StyledTitle>{t('projectsLinks.webLink')}</StyledTitle>
          </WebLink>}
        <StoreContainer>
          {appStore && (
          <StoreLink href={appStore} target="_blank" rel="noopener">
            <img src={appStoreImg} alt="Appstore logo" />
          </StoreLink>)}
          {playMarket && (
          <StoreLink href={playMarket} target="_blank" rel="noopener">
            <img src={palyStoreImg} alt="Google Play logo" />
          </StoreLink>)}
        </StoreContainer>
			</LinksContainer>
	);
};

const LinksContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 24px auto;

@media (max-width: ${breakpoints.phone}) {
  padding: 0 16px;
  flex-direction: column;
}
`;

const StyledTitle = styled.span`
  display: block;
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
  padding: 18px 0;
  color: ${colors.Main};
  transition: text-shadow 0.2s;

  &:hover {
    color: #a353d5;
    text-shadow: 0px 0px 16px rgba(157, 112, 201, 0.8);
  }
`;

const WebLink = styled.a`

`;

const StoreContainer = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;

	@media (max-width: ${breakpoints.phone}) {
    padding: 0 16px;
    flex-direction: column;
	}
`;

const StoreLink = styled.a`
  display: block;
	margin: 0;
	padding: 0;
  cursor: pointer;
  max-width: 300px;

	img {
		max-width: 100%;
    border-radius: 14px;
    margin: 0 auto;
    transition: box-shadow 0.2s;
    @media (max-width: ${breakpoints.phone}) {
      max-width: 90%;
    }

    &:hover {
      box-shadow: 0px 0px 15px 2px rgba(34, 60, 80, 0.6);
      -webkit-box-shadow: 0px 0px 15px 2px rgba(34, 60, 80, 0.6);
    }
	}
`;
