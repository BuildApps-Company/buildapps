import React from 'react';
import styled from 'styled-components';
import { SubH2 } from '../styled-headers';
import { colors } from '../../data/colors';
import { breakpoints } from '../../data/breakpoints';

export function Clients({ clientsData })
{
    return (
			<BlockWrapper>
				<StyledHeader>Clients</StyledHeader>
				<ClientsWrapper>
					{clientsData.map((client, i) => (
						<Image src={client.url} key={i} />
					))}
				</ClientsWrapper>
			</BlockWrapper>
		);
}

const BlockWrapper = styled.div`
    background: #EFF0F3;
    width: 100%;
`;

const ClientsWrapper = styled.div`
    margin-top: 2.5rem;
    justify-content: space-evenly;
    flex-wrap: wrap;
    display: flex;
    background: #EFF0F3;
`;

const Image = styled.img`
    width: 200px;
    height: 80px;
`;

const StyledHeader = styled(SubH2)`
	&:after {
		content: '';
		background: ${colors.Main};
		height: 0.5vh;
		width: 3.5rem;
		display: block;
    }
    margin: 0 0 0 10%;
    padding-top: 3rem;
	color: ${colors.Font};
	font-size: 3.5rem;
	@media all and (max-width: ${breakpoints.phone}) {
		font-size: 3rem;
	}
`;