import React from 'react';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useActiveLanguage } from '../../data/hooks';

export function Page({ children, pageName }) {

  const { t } = useTranslation();
  const activeLanguage = useActiveLanguage();
	return (
		<>
			<Helmet>
				<title>
					{pageName ? `${pageName} | ` : ''}{t('helmet.title')}
				</title>
				<meta
					name="description"
					content={t('helmet.description')}
				/>
				<meta http-equiv="Content-Language" content={activeLanguage}></meta>
			</Helmet>
			  {children}
			<Footer />
		</>
	);
}
