import React from 'react';
import styled from 'styled-components';
import banner_background from '../../static/images/banner_background.svg';
import { theme } from '../styles/theme';
import ContactUs from './contact-us';

const Banner = styled.div`
    height: 710px;
    justify-content: center;
    background-size: cover;
    background-image: url("${banner_background}");
    align-items: center;
    bacground-color: ${theme.colors.black};
    display: flex;
    width: 100%;
    margin-bottom: 128px;
    flex-direction: column;
`;

const Title = styled.div`
    color: ${theme.colors.white};
    font-size: 3rem;
    margin-bottom: 2%;
    text-align: center;
`;

const SubTitle = styled.div`
    color: ${theme.colors.white};
    text-align: center;
    font-size: 1.6rem;
`;

const Preview = styled.div`
    height: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 6%;
    margin-bottom: 6%;
`;

const SmallDescription = styled.div`
    color: ${theme.colors.black};
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 2% 0;
`;

const LargeDescription = styled.div`
    color: ${theme.colors.black};
    font-size: 2rem;
    margin-bottom: 64px;
    text-align: center;
`;

const ContactUsButtonContainer = styled.div`
    margin-top: 32px;
    margin-bottom: 16px;
`;

const ViewProjectsLink = styled.a`
    color: ${theme.colors.darkGray};
`;

const Divider = styled.div`
    background-color: ${theme.colors.lightGray};
    width: ${theme.divederWidthPercent}%;
    height: 2px;
    margin: 0 auto 0 auto;
`;

export default () => 
<Preview>
    <Banner>
        <Title>BuildApps</Title>
        <SubTitle>A close-knit team with extensive experience <br/> and understanding of what is necessary for you</SubTitle>
        <ContactUsButtonContainer><ContactUs isOutline={true}/></ContactUsButtonContainer>
        <ViewProjectsLink>view projects</ViewProjectsLink>
    </Banner>
    <SmallDescription>SERVICES</SmallDescription>
    <LargeDescription>UI/UX Design, Web and mobile development</LargeDescription>
    <Divider/>
</Preview>
