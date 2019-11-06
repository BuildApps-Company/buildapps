import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    height: 620px;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
`;

const Title = styled.div`
    color: #FFFFFF;
    font-size: 3rem;
    text-align: center;
`;

const SubTitle = styled.div`
    color: #FFFFFF;
    opacity: 0.6;
    margin: 2% 5% 0 5%;
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
    margin: 3% 5% 6% 5%;
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

export default () => <Preview>
    <Banner>
        <Title>Grow your business.</Title>
        <SubTitle>Give your business a boost with a beautifully crafted homepage.</SubTitle>
    </Banner>
    <SmallDescription>What we believe in</SmallDescription>
    <LargeDescription>Grow your business, establish your brand, and put your customers first.</LargeDescription>
</Preview>
