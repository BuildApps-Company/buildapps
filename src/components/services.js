import React from 'react';
import styled from 'styled-components';
import ServiceCard from './service-card';
import SectionHeader from './section-header';
import desktop_image from '../../static/images/ic_desktop.svg';
import mobile_image from '../../static/images/ic_mobile.svg';
import design_image from '../../static/images/ic_design.svg';

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 auto 0 auto;
    margin-bottom: 128px;
`;

export default () =>
    <>
        <SectionHeader smallDescription="services" largeDescription="UI/UX Design, Web and mobile development" />
        <CardsContainer>
            <ServiceCard text="mobile <br /> development" image={mobile_image} description="Flutter, Xamarin Native, MVVMCross" />
            <ServiceCard text="web <br /> development" image={desktop_image} description="HTML/CSS, JavaScript + frameworks, React, NodeJS, jQuery" />
            <ServiceCard text="UX/UI <br /> design" image={design_image} description="UX, UI, Prototyping, Supporting, Mobile, Web, Desktop" />
            <ServiceCard text="desktop <br /> development" image={desktop_image} description="WPF, UWP, Xamarin.Forms for Windows" />
        </CardsContainer>
    </>