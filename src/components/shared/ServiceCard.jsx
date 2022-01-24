import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';

export const ServiceCard = ({ service }) => {
  const { id, title, description, imageLink } = service;

	return (
    <CardContainer>
      <ServiceImg src={imageLink} alt={id} />
      <ServiceDescription>
        <SrviceTitile>
          {title}
        </SrviceTitile>
        <ServiceAbout>
          {description}
        </ServiceAbout>
      </ServiceDescription>
    </CardContainer>
	);
};

const CardContainer = styled.section`
  display: flex;
  flex-shrink: 0;
  padding: 80px;
  width: 795px;
  height: 292px;
  border-radius: 16px;
  margin: 0 20px;
  background-color: ${colors.grey.background};
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${colors.Main};
    h3, p {
      color: ${colors.light.white};
    }
    img {
      mix-blend-mode: normal;
      filter: invert(1) contrast(200%);
    }
  }
`;

const ServiceImg = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  margin-right: 40px;
`;

const ServiceDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const SrviceTitile = styled.h3`
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 160%;
  margin: 0;
  margin-bottom: 16px;
`

const ServiceAbout = styled.p`
  display: block;
  font-size: 16px;
  line-height: 160%;
  margin: 0;
`