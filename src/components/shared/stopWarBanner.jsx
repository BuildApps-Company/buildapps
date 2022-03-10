import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { useTranslation } from 'react-i18next';
import UAFlag from '../../../static/images/stopwar/ukraine.png';
import Finger from '../../../static/images/stopwar/finger.png';

export const StopWarBanner = () => {
  const { t } = useTranslation();

	return (
		<BannerContainer>
      <Emoji src={UAFlag} alt="UA"></Emoji>
      <Paragraph>{t('banner.slogan')}</Paragraph>
      <Emoji src={Finger} alt="Finger right"></Emoji>
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
	background-color: ${colors.grey.background};
	transition: background-color 0.5s ease;

	&:hover {
		background-color: ${colors.Main};
		h3,
		p {
			color: ${colors.light.white};
		}
	}
`;

const Emoji = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 9px;
`

const DonateLink = styled.a`
  display: block;
  text-decoration: none;
  padding: 0;
  margin: 0;
`

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`