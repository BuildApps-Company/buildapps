import React from 'react';
import styled from 'styled-components';
import { Toolbar } from '../shared/Toolbar';
import { routes } from '../../utilities/routes';
import { useWindowSize } from '../../utilities/useWindowSize';
import main_background from '../../../static/images/main_background.png';
import design from '../../../static/images/design.svg';
import arrows from '../../../static/images/arrows.svg';
import { PrimaryButton } from '../../styles/buttons';
import { H1, Body1, UnderlinedH } from '../../styles/styled-headers';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';

export function MainBanner() {
	const { width } = useWindowSize();

	return (
		<HeroHeader>
			<Toolbar isWhite />

			<StyledPageContainer>
				<TitlesWrap>
					<div>
						<StyledH1>Web</StyledH1>
						<StyledH1>Mobile</StyledH1>
						<StyledH1>Desktop</StyledH1>
						<StyledBody>Design & Development</StyledBody>
					</div>

					{width > 450 && <Design src={design}></Design>}
				</TitlesWrap>

				<ButtonsWrap>
					<StyledButton href={routes.contactForm}>Сontact us</StyledButton>
					<StyledButton href={routes.prices}>Prices</StyledButton>
				</ButtonsWrap>

				<ArrowContainer>
					<Arrows src={arrows}></Arrows>
				</ArrowContainer>
			</StyledPageContainer>
		</HeroHeader>
	);
}

const HeroHeader = styled.div`
	background: linear-gradient(72.44deg, rgba(17, 3, 34, 0.92) 38.02%, rgba(17, 3, 34, 0.6) 100%)
            , url("${main_background}");
	background-size: cover;
`;

const StyledPageContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		padding-left: 215px;
		padding-right: 215px;
	}
`;

const TitlesWrap = styled.div`
	margin-top: 155px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media all and (min-width: ${breakpoints.phone}) {
		margin-top: 130px;
	}
`;

const StyledH1 = styled(UnderlinedH(H1))`
	margin: 0 0 45px 0;
	padding: 0;
	font-size: 3rem;
	text-transform: uppercase;
	color: ${colors.light.white};

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 4rem;
	}
`;

const StyledBody = styled(Body1)`
	margin: 0 0 30px 0;
	font-size: 1 rem;
	text-transform: uppercase;
	color: ${colors.light.white};

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 1.5rem;
	}
`;

const Design = styled.img`
	width: 240px;
	height: 100px;
`;

const ButtonsWrap = styled.div`
	display: flex;
	margin-bottom: 64px;
`;

const StyledButton = styled(PrimaryButton)`
	padding: 16px 32px;
	font-size: 1rem;

	&:not(:last-child) {
		margin-right: 16px;
	}

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 1.5rem;
	}
`;

const ArrowContainer = styled.div`
	padding-bottom: 32px;
	text-align: center;
`;

const Arrows = styled.img`
	width: 27px;
	height: 32px;

	@media all and (min-width: ${breakpoints.phone}) {
		width: 48px;
		height: 56px;
	}
`;
