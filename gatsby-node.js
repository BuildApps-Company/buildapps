const localeCodes = {
	ua: 'uk-UA',
};

exports.createPages = async function({ actions, graphql }) {
	const { data } = await graphql(`
		query MyQuery {
			locale {
				language
			}
			api {
				useCases {
					data {
						attributes {
							slug
							locale
						}
						id
					}
				}
			}
		}
	`);

	data.api.useCases.data.forEach(elem => {
		const {
			attributes: { slug },
			id,
		} = elem;
		actions.createPage({
			path: `products/${slug}`,
			component: require.resolve(`./src/templates/portfolio-post.js`),
			context: { slug, id },
		});
	});
};

exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions;

	if (!page.context.locale) {
		const language = page.context.i18n.language;
		const locale = localeCodes[language] || language;
		deletePage(page);
		createPage({
			...page,
			context: {
				...page.context,
				locale,
			},
		});
	}
};
