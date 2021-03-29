import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { H2Block, UnderlinedH } from '../../styles/styled-headers';

export function Clients({ clients }) {
	return (
		<BlockWrapper>
			<Header>Clients</Header>
			<ClientsWrapper>
				{clients.map(client => (
					<ImageContainer key={client.name}>
						<Image src={client.url} alt={client.name} />
					</ImageContainer>
				))}
			</ClientsWrapper>
		</BlockWrapper>
	);
}

const Header = UnderlinedH(H2Block);

const BlockWrapper = styled.div`
	background: ${colors.grey.background};
	width: 100%;
	padding: 40px 10%;
`;

const ClientsWrapper = styled.div`
	justify-content: space-evenly;
	flex-wrap: wrap;
	display: flex;
	margin: 40px 0;
`;

const ImageContainer = styled.div`
	width: 220px;
	overflow: hidden;
	text-align: center;
`;

const Image = styled.img`
	height: 92px;
	max-width: 200px;
`;
