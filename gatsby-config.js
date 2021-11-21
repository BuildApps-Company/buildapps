/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const trackId = process.env.googleTrackId;
const siteUrl = 'https://buildapps.pro/' || `http://localhost:8000`;

module.exports = {
	siteMetadata: {
		// If you didn't use the resolveSiteUrl option this needs to be set
		siteUrl,
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/locales`,
				name: `locale`,
			},
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`,
				languages: [`en`, `ua`, `ru`],
				defaultLanguage: `en`,
				siteUrl,
				i18nextOptions: {
					interpolation: {
						escapeValue: false,
					},
					keySeparator: false,
					nsSeparator: false,
				},
			},
		},
		...(trackId
			? [
				{
					resolve: `gatsby-plugin-google-analytics`,
					options: {
						trackingId: trackId,
						// Defines where to place the tracking script - `true` in the head and `false` in the body
						head: true,
						// Setting this parameter is optional
						// anonymize: true,
						// Setting this parameter is also optional
						respectDNT: true,
						// Avoids sending pageview hits from custom paths
						// exclude: ['/preview/**', '/do-not-track/me/too/'],
						// Delays sending pageview hits on route update (in milliseconds)
						// pageTransitionDelay: 0,
						// Enables Google Optimize using your container Id
						// optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
						// Enables Google Optimize Experiment ID
						// experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
						// Set Variation ID. 0 for original 1,2,3....
						// variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
						// Any additional optional fields
						// sampleRate: 5,
						// siteSpeedSampleRate: 10,
						// cookieDomain: 'example.com',
					},
				},
			]
			: []),
	],
};
