import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';
import styled from 'styled-components';

export const LanguageSelector = () => {
	const { languages, changeLanguage, language, originalPath } = useI18next();

	return (
		<LanguagesWrap>
			{languages.map(lang => (
				<Language
					key={lang}
					to={originalPath}
					language={lang}
					isActive={lang === language}
					onClick={event => {
						event.preventDefault();
						changeLanguage(lang);
					}}
				>
					{lang}
				</Language>
			))}
		</LanguagesWrap>
	);
};


const LanguagesWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	margin-top: 25px;
`;

const Language = styled(Link)`
	padding: 0 10px 0 0;
	line-height: 120%;
	color: #ffffff;
	opacity: 0.5;
	cursor: pointer;
	text-transform: uppercase;
	text-decoration: none;

	${({ isActive }) => isActive && `opacity: 0.8;`}

	&:hover {
		opacity: 1;
	}
`;
