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
      {isLinksBlockVisible && <LinksContainer>
        <GreyText>
          {t('projectsLinks.mainTitle')}
        </GreyText>
            <StoreContainer>
              {web && <Link href={ web } target="_blank">{t('projectsLinks.webSite')}</Link>}
              {playMarket && <Link href={ playMarket } target="_blank">Google Play</Link>}
              {appStore && <Link href={ appStore } target="_blank">Apple Store</Link>}
            </StoreContainer>
      </LinksContainer>}
    </>
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

const GreyText = styled.p`
  font-size: 26px;
	margin: 0;
  padding: 0 0 32px 0;
	text-align: center;
`;

const Link = styled.a`
  position: relative;
  font-size: 22px;
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
    background: ${colors.Main};
    transform: scaleX(0);
    transition: all 0.25s;
  }

  &:hover {
    color: ${colors.Main};

    &:before {
      transform: scaleX(1);
    }
  }

  @media (min-width: ${breakpoints.phone}) {
    &:not(:last-child):after {
      position: absolute;
      content:'';
      width: 2px;
      height: 50%;
      right: -15px;
      background-color: ${colors.Font};
    }
	}

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
