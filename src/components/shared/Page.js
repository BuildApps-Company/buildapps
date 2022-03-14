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
				<meta name="Keywords" content="buildapp, mobile form development, расчет стоимости разработки сайта, business loan lead management software, askod, аскод онлайн, cardano hompage, application development portfolio"></meta>
			</Helmet>
			{children}
			<Footer />
			<script
				dangerouslySetInnerHTML={{
					__html:
						"(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('Xbp1oaErM9g8EdVj'); ",
				}}
			></script>
		</>
	);
}
