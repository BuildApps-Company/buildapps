import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import instagramIcon from '../../../static/images/ic_instagram.svg';
import facebookIcon from '../../../static/images/ic_facebook.svg';

const socialMediaLinks = [
	{
		key: 'instagram',
		img: instagramIcon,
		href: '',
	},
	{
		key: 'facebook',
		img: facebookIcon,
		href: '',
	},
];

export const SocialMediaList = () => (
	<StyledSocialMediaList>
		{socialMediaLinks.map(el => (
			<li key={el.key}>
				<a href={el.href}>
					<img src={el.img} alt={el.key} />
				</a>
			</li>
		))}
	</StyledSocialMediaList>
);

const StyledSocialMediaList = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;

	li:not(:last-child) {
		margin-right: 30px;
	}

	@media all and (max-width: ${breakpoints.phone}) {
		justify-content: center;
		padding: 32px 0 32px 0;
		border-top: 1px solid rgba(255, 255, 255, 0.5);
	}

	@media all and (min-width: ${breakpoints.phone}) {
		padding-top: 25px;
	}
`;
