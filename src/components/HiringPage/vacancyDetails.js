import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Page } from '../../components/shared/Page';
import { Toolbar } from '../../components/shared/Toolbar';
import { PreFooter } from '../../components/MainPage/PreFooter';
import { breakpoints } from '../../styles/breakpoints';
import { useVacancies } from '../../data';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby-plugin-react-i18next';
import { routes } from '../../utilities/routes';
import { colors } from '../../styles/colors';
import arrow from '../../../static/images/hiring/contactus-arrow.png';
import linkedIn from '../../../static/images/hiring/linkedin.png';
import dou from '../../../static/images/hiring/dou.png';
import djinni from '../../../static/images/hiring/djinni.png';
import mapLogo from '../../../static/images/hiring/map.png';

export function VacancyDetails({ vacancyId }) {
	const { t } = useTranslation();
	const vacancies = useVacancies();
	const currentVacancy = useMemo(
		() => Object.values(vacancies).find(vacancy => vacancy.id === vacancyId),
		[vacancies, vacancyId]
	);

	const { title, description } = currentVacancy;
	const {
		location,
		requirements,
		tasks,
		willBeAPlus,
		conditions,
	} = currentVacancy.pageContent;

	return (
		<Page pageName={'Vacancy Details'}>
			<Toolbar />
			<ContainerWrap>
				<Content>
					<TitleContainer>
						<BackLink to={routes.hiring}>{t('vacancy.goBack')}</BackLink>
						<Title>{title}</Title>
						{currentVacancy.requirements && (
							<StyledButtonsList>
								{currentVacancy.requirements.map(el => (
									<StyledLi key={el}>{el}</StyledLi>
								))}
							</StyledButtonsList>
						)}
						<AboutPage>{description}</AboutPage>
					</TitleContainer>
					<Hr />
					<ContentBlock>
						<BlockTitle>{t('vacancy.location')}</BlockTitle>
						<LocationButtonsWrap>
							{location.remote && (
								<LocationBtn>{t('vacancy.anyCity')}</LocationBtn>
							)}
							{location.office && (
								<LocationBtn href={location.mapLink}>
									<img alt="mapLogo" src={mapLogo} />
									{location.office}
									<span>→</span>
								</LocationBtn>
							)}
						</LocationButtonsWrap>
					</ContentBlock>
					{requirements.length > 0 && (
						<>
							<Hr />
							<ContentBlock>
								<BlockTitle>{t('vacancy.requirements')}</BlockTitle>
								<ContentList>
									{requirements.map((elem, index) => {
										return <ContentElement key={index}>{elem}</ContentElement>;
									})}
								</ContentList>
							</ContentBlock>
						</>
					)}
					{tasks.length > 0 && (
						<>
							<Hr />
							<ContentBlock>
								<BlockTitle>{t('vacancy.tasks')}</BlockTitle>
								<ContentList>
									{tasks.map((elem, index) => {
										return <ContentElement key={index}>{elem}</ContentElement>;
									})}
								</ContentList>
							</ContentBlock>
						</>
					)}
					{willBeAPlus.length > 0 && (
						<>
							<Hr />
							<ContentBlock>
								<BlockTitle>{t('vacancy.willBePlus')}</BlockTitle>
								<ContentList>
									{willBeAPlus.map((elem, index) => {
										return <ContentElement key={index}>{elem}</ContentElement>;
									})}
								</ContentList>
							</ContentBlock>
						</>
					)}
					<Hr />
					{conditions.length > 0 && (
						<>
							<ContentBlock>
								<BlockTitle>{t('vacancy.ourConditions')}</BlockTitle>
								<ContentList>
									{conditions.map((elem, index) => {
										return <ContentElement key={index}>{elem}</ContentElement>;
									})}
								</ContentList>
							</ContentBlock>
						</>
					)}
					<Hr />

					<ContentBlock>
						<ContactUsTitle>{t('vacancy.applyJob')}</ContactUsTitle>
						<LogoBlock>
							<ContactUsWrap>
								<img alt="arrow" src={arrow} />
								<ContactUsLink href={routes.contactForm}>
									{t('vacancy.contactUs')}
								</ContactUsLink>
								<span>{t('vacancy.contactUsOr')}</span>
							</ContactUsWrap>
							<PlatformsWrap>
								<LogoLink href="https://www.linkedin.com/">
									<img alt="linkedIn" src={linkedIn} />
								</LogoLink>
								<LogoLink href="https://dou.ua/">
									<img alt="dou" src={dou} />
								</LogoLink>
								<LogoLink href="https://djinni.co/my/dashboard/">
									<img alt="djinni" src={djinni} />
								</LogoLink>
							</PlatformsWrap>
						</LogoBlock>
					</ContentBlock>
					<Hr />
				</Content>
			</ContainerWrap>
			<PreFooter />
		</Page>
	);
}

const LocationBtn = styled.a`
	display: flex;
	gap: 12px;
	padding: 4px 12px;
	background-color: ${colors.grey.background};
	border-radius: 4px;
	line-height: 160%;
	cursor: default;
`;

const LocationButtonsWrap = styled.div`
	display: flex;
	gap: 12px;
`;

const ContactUsLink = styled.a`
	display: block;
	margin: 0 24px 0 12px;
	padding: 0;
`;

const LogoLink = styled.a`
	display: block;
	margin: 0;
	margin-right: 32px;

	&:last-child {
		margin-right: 0;
	}
`;

const ContactUsWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media all and (min-width: ${breakpoints.tablet}) {
		justify-content: center;
	}
`;

const PlatformsWrap = styled.div`
	display: flex;
	margin: 0;

	@media all and (min-width: ${breakpoints.tablet}) {
		margin-left: 32px;
	}
`;

const LogoBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		gap: 0;
	}
`;

const ContentList = styled.ul`
	display: block;
	box-sizing: border-box;
	margin: 0;
	padding: 0 1rem;
`;

const ContentElement = styled.li`
	font-size: 1rem;
	margin-bottom: 6px;

	&:last-child {
		margin-bottom: 0px;
	}
`;

const BlockTitle = styled.h3`
	font-size: 1rem;
	font-weight: bold;
	margin: 0 0 12px 0;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 1.25rem;
	}
`;

const Hr = styled.hr`
	width: 100%;
	margin: 0;
	color: ${colors.grey.background};

	&:last-child {
		margin-bottom: 96px;

		@media all and (min-width: ${breakpoints.tablet}) {
			margin-bottom: 196px;
		}
	}

	@media all and (min-width: ${breakpoints.phone}) {
		width: 80%;
	}
`;

const StyledLi = styled.li`
	display: block;
	margin-right: 8px;
	border-radius: 4px;
	white-space: nowrap;
	padding: 12px 10px 8px;
	font-weight: 700;
	line-height: 120%;
	text-transform: uppercase;
	background-color: transparent;
	border: 1px solid #d9dbe4;
	cursor: default;
`;

const StyledButtonsList = styled.ul`
	overflow: auto;
	margin: 0 0 16px 0;
	padding: 0;
	display: flex;
	align-items: center;
	list-style: none;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 700px;
`;

const ContentBlock = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	padding: 32px 0;
`;

const ContainerWrap = styled.div`
	overflow: hidden;
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 12px;

	@media all and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.notebook}) {
		padding: 0 40px;
	}
`;

const TitleContainer = styled.div`
	margin-bottom: 16px;

	@media all and (min-width: ${breakpoints.phone}) {
		margin-bottom: 64px;
	}
`;

const BackLink = styled(Link)`
	display: block;
	margin: 0 0 28px 0;
	padding: 0;
	font-size: 0.75rem;
	font-weight: bold;
	line-height: 160%;
	color: ${colors.Main};
	text-transform: uppercase;
`;

const AboutPage = styled.p`
	margin: 0;
	padding: 0;
	line-height: 160%;
	font-size: 1rem;

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 1.5rem;
	}
`;

const ContactUsTitle = styled.h2`
	margin: 0 0 24px 0;
	padding: 0;
	font-size: 1.5rem;
	font-weight: bold;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.phone}) {
		font-size: 2.5rem;
	}
`;

const Title = styled.h1`
	margin: 0 0 8px 0;
	padding: 0;
	font-size: 1.5rem;
	font-weight: bold;
	line-height: 160%;
	text-transform: uppercase;

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: 2.5rem;
	}
`;
