import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Marquee from './Marquee';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby-plugin-react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const PreFooter = () => {
	const { t } = useTranslation();

	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<>
			<Marquee />
			<Container>
				<FlexWrap
					data-aos="fade-down"
					data-aos-anchor-placement="bottom-bottom"
				>
					<StyledText>{t('preFooter.title')}</StyledText>
					<StyledLink to={routes.contactForm}>
						{t('preFooter.contactButton')}
					</StyledLink>
				</FlexWrap>
			</Container>
		</>
	);
};

const Container = styled.div`
	padding: 40px 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.grey.background};

	@media all and (min-width: ${breakpoints.notebook}) {
		padding: 54px 0;
	}
`;

const FlexWrap = styled.div`
	display: flex;
	align-items: center;
	white-space: nowrap;
	padding: 2px 5px 2px 5px;
`;

const StyledText = styled.h3`
	margin: 0;
	padding: 2px 10px 2px 2px;
	font-size: 1.25rem;
	line-height: 160%;

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 2rem;
		padding: 2px 10px 2px 2px;
	}
`;

const StyledLink = styled(Link)`
	font-size: 1.25rem;
	line-height: 160%;
	text-decoration: none;
	border-bottom: 3px solid #874aad;

	@media all and (min-width: ${breakpoints.notebook}) {
		font-size: 2rem;
	}
	&:hover {
		color: #874aad;
	}
`;
