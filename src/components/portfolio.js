import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import PortfolioCard from './portfolio-card';
import SectionHeader from './section-header';
import logo from '../../static/images/logo.svg';

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto 0 auto;
    width: ${theme.containerWidthPercent}%;
    margin-bottom: 128px;
`;

export default () =>
    <>
        <SectionHeader smallDescription="portfolio" largeDescription="Projects we worked on" />
        <CardsContainer>
            <PortfolioCard text="Перербуржская Недвижимость" image={logo} />
            <PortfolioCard text="qp.ru" image={logo} />
            <PortfolioCard text="VIOL Commander" image={logo}/>
        </CardsContainer>
    </>