import React, { useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { routes } from '../../utilities/routes';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import { VacancyCard } from './vacancyCard';
import { Link } from 'gatsby-plugin-react-i18next';
import { useVacancies } from '../../data';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const VacanciesList = ({ selectedCategories }) => {
	const { t } = useTranslation();

	const vacancies = useVacancies();
	const availableVacancies = useMemo(
		() =>
			Object.entries(vacancies).filter(
				x =>
					selectedCategories.length === 0 ||
					selectedCategories.every(category =>
						x[1].requirements.some(req => req === category)
					)
			),
		[vacancies, selectedCategories]
	);

	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<StyledVacanciesList>
			{availableVacancies &&
				availableVacancies.map(([key, vacancy], index) => {
					return (
						<ListItem
							key={key}
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay={index * 150}
						>
							<VacancyCard vacancy={vacancy} />
							{/* <Link to={`${routes.hiring}${vacancy.id}/`} state={{ project: vacancy }} style={{display: 'block' }}>
						</Link> */}
						</ListItem>
					);
				})}
		</StyledVacanciesList>
	);
};

const ListItem = styled.div`
	display: block;
`;

const StyledVacanciesList = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0 0 46px;
	list-style: none;
	flex-wrap: wrap;

	a {
		text-decoration: none;
	}
`;
