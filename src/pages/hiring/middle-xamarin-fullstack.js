import React from 'react';
import { VacancyDetails } from '../../components/HiringPage/vacancyDetails';
import { graphql } from 'gatsby';

const Vacancy = () => {
	return <VacancyDetails vacancyId={ 'middleXamarinFullstackDeveloper' } />;
};

export default Vacancy;

export const query = graphql`
	query($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
