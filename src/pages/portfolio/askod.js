import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';
// import { Page } from '../../components/shared/Page';
// import { Toolbar } from '../../components/shared/Toolbar';
// import { PreFooter } from '../../components/MainPage/PreFooter';
// import { routes } from '../../utilities/routes';
// import { breakpoints } from '../../styles/breakpoints';
// import { Portfolio } from '../../data/projects';
import { PortfolioDetails } from '../../components/PortfolioPage/index';

const askod = () => {
	return <AskodDetails id={'askod'}></AskodDetails>;
};

export default askod;

const AskodDetails = styled(PortfolioDetails)`
	img {
		width: 60%;
		/* transform: rotate(-16deg); */
	}
`;
