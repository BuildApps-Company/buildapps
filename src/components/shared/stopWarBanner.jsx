import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import UAFlag from '../../../static/images/stopwar/ukraine.png';
import Finger from '../../../static/images/stopwar/finger.png';

export const StopWarBanner = () => {
  const { t } = useTranslation();

  return (
    <BannerContainer>
      <Emoji src={UAFlag} alt="UA"></Emoji>
      <Paragraph>{t('banner.slogan')}</Paragraph>
      <Emoji src={Finger} alt="Finger right" rel="noreferrer"></Emoji>
      <DonateLink href="https://helpukrainewin.org/" target="_blank">
        {t('banner.donateLink')}
      </DonateLink>
      <Emoji src={UAFlag} alt="UA"></Emoji>
    </BannerContainer>
  );
};



const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 36px;
  background-color: ${colors.Main};

  &:hover {
    a,
    p {
      color: ${colors.light.white};
    }
  }
`;

const Emoji = styled.img`
  display: block;
  width: 16px;
  height: 16px;
  margin: 0 9px;

  @media all and (min-width: ${breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }

  @media all and (min-width: ${breakpoints.notebook}) {
    width: 28px;
    height: 28px;
  }
`

const DonateLink = styled.a`
  display: block;
  font-size: 13px;
  text-decoration: none;
  padding: 0;
  margin: 0;

  @media all and (min-width: ${breakpoints.notebook}) {
    font-size: 16px;
  }
`

const Paragraph = styled.p`
  font-size: 13px;
  margin: 0;
  padding: 0;

  @media all and (min-width: ${breakpoints.notebook}) {
    font-size: 16px;
  }
`