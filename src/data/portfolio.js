import spbProperty from '../../static/images/portfolio/spbProperty.jpg';
import viol from '../../static/images/portfolio/viol.jpg';
import askod from '../../static/images/portfolio/askod.jpg';
import prankchat from '../../static/images/portfolio/prankchat.png';
import sushi from '../../static/images/portfolio/sushi.png';
import ppf from '../../static/images/portfolio/ppf.png';

export const Portfolio = {
	ppf: {
		image: ppf,
		title: 'Lead management software',
		description: `CRM for full-fledged work of a credit institution. Full
		cycle of work with leads, acceptance of an
		application and its full support. Lead processing
		automation, integration with various government
		and private partners.`,
		responsibility: ['Web Development', 'Web API Development', 'DevOps'],
	},
	sushi: {
		image: sushi,
		title: 'СУШИШОП',
		description: `Online service for ordering of sushi. The SushiShop
			system automatically determines your geolocation
			for the nearest sushi store to make the delivery
			time more comfortable for the user. The system
			also provides a bonus program, an accumulative
			system and various discounts for different holidays
			or seasons.`,
		responsibility: ['Mobile Development', 'IOS', 'Android'],
	},
	prankChat: {
		image: prankchat,
		title: 'PrankChat смешные видео',
		description:
			'PrankChat is a social video network where users shoot and post very funny and absolutely unique videos.',
		responsibility: ['Mobile Development', 'IOS', 'Android', 'DevOps'],
	},
	spbProperty: {
		image: spbProperty,
		title: 'Петербургская Недвижимость',
		description: `Mobile client for finding an apartment in residential
		complex, St. Petersburg and Moscow. The system
		allows you to book apartments, make pre-orders
		and find apartments at competitive prices`,
		responsibility: ['Mobile Development', 'IOS', 'Android'],
	},
	askod: {
		image: askod,
		title: 'Askod Online',
		description: `ASKOD Online service is designed to
		automate the processes of document
		circulation between legal entities and
		individuals and provides review,
		approval, signing, sending, receiving
		and storing documents in a cloud
		environment.`,
		responsibility: ['Website Design'],
	},
	viol: {
		image: viol,
		title: 'VIOL Commander',
		responsibility: ['Desktop Development', 'Windows App'],
	},
};
