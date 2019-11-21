/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.googleTrackId,
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
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
	],
};
