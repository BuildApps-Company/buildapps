import React from 'react';
import styled from 'styled-components';
import banner_background from '../../static/images/banner_background.svg';
import ContactUs from './contact-us';

const Banner = styled.div`
    height: 710px;
    justify-content: center;
    background-size: cover;
    background-image: url("${banner_background}");
    align-items: center;
    bacground-color: #000000
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const Title = styled.div`
    color: #FFFFFF;
    font-size: 3rem;
    text-align: center;
`;

const SubTitle = styled.div`
    color: #FFFFFF;
    margin: 2% 30% 0 30%;
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
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 6%;
`;

const SmallDescription = styled.div`
    color: #1A1B1F;
    opacity: 0.6;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    margin: 8% 0 2% 0;
`;

const LargeDescription = styled.div`
    color: #1A1B1F;
    font-size: 2rem;
    text-align: center;
`;

const ContactUsButtonContainer = styled.div`
    margin-top: 32px;
`;

export default () => <Preview>
    <Banner>
        <Title>BuildApps</Title>
        <SubTitle>A close-knit team with extensive experience and understanding of what is necessary for you</SubTitle>
        <ContactUsButtonContainer><ContactUs isOutline={true}/></ContactUsButtonContainer> 
    </Banner>
    <SmallDescription>What we believe in</SmallDescription>
    <LargeDescription>Grow your business, establish your brand, and put your customers first.</LargeDescription>
</Preview>
