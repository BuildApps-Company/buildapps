import React from 'react';
import styled from 'styled-components';
import { useSocialMediaListData } from '../../data';
import { breakpoints } from '../../styles/breakpoints';

export const SocialMediaList = () => {
	const socialMediaListData = useSocialMediaListData();

	return (
		<StyledSocialMediaList>
			{socialMediaListData.map(el => (
				<li key={el.key}>
					<a href={el.href} target="_blank">
						<img src={el.img} alt={el.key} />
					</a>
				</li>
			))}
		</StyledSocialMediaList>
	);
};

const StyledSocialMediaList = styled.ul`
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;

	li:not(:last-child) {
		margin-right: 28px;
	}

	@media all and (max-width: ${breakpoints.phone}) {
		justify-content: center;
		padding: 32px 0 32px 0;
	}

	@media all and (min-width: ${breakpoints.phone}) {
		padding-top: 25px;
	}
`;
