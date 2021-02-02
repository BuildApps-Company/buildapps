import React from 'react'
import styled from 'styled-components';
import { MainBanner } from './Banner'
import { Clients } from './Clients';
import { clients } from '../../data/clients';

export function MainPage()
{
    return(
        <>
            <MainBanner />
            <Clients clientsData={clients} />
        </>
    );
};