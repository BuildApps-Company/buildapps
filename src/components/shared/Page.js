import React from 'react';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export function Page({ children, pageName }) {

  const { t } = useTranslation();
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
				<meta http-equiv="Content-Language" content="ru"></meta>
			</Helmet>
			  {children}
			<Footer />
		</>
	);
}
