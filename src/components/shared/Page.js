import React from 'react';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useActiveLanguage } from '../../data/hooks';
import { useI18next } from 'gatsby-plugin-react-i18next';

var getLanguagePath = function getLanguagePath(context, language) {
	return context.generateDefaultLanguagePage ||
		language !== context.defaultLanguage
		? '/' + language
		: '';
};

export function Page({ children, pageName }) {
	const context = useI18next();
	const { languages, originalPath, siteUrl } = context;
	const { t } = useTranslation();
	const activeLanguage = useActiveLanguage();

	return (
		<>
			<Helmet>
				{languages.map(lang => (
					<link
						rel="alternate"
						hreflang={lang}
						href={siteUrl + getLanguagePath(context, lang) + originalPath}
					/>
				))}
				<title>
					{pageName ? `${pageName} | ` : ''}
					{t('helmet.title')}
				</title>
				<meta name="description" content={t('helmet.description')} />
				<meta http-equiv="Content-Language" content={activeLanguage}></meta>
			</Helmet>
			{children}
			<Footer />
		</>
	);
}
