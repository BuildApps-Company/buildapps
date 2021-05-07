import spbProperty from '../../static/images/portfolio/spbProperty.jpg';
import spbLong from '../../static/images/portfolio/spb_long.png';
import viol from '../../static/images/portfolio/viol.jpg';
import askod from '../../static/images/portfolio/askod.jpg';
import prankchat from '../../static/images/portfolio/prankchat.png';
import prankchatLong from '../../static/images/portfolio/prankchat_long.png';
import sushi from '../../static/images/portfolio/sushi.png';
import sushiLong from '../../static/images/portfolio/sushi_long.png';
import ppf from '../../static/images/portfolio/ppf.png';
import ppfLong from '../../static/images/portfolio/ppf_long.png';

export const Portfolio = {
	ppf: {
		image: ppf,
		longImage: ppfLong,
		title: 'Lead management software',
		description: `CRM for full-fledged work of a credit institution. Full
		cycle of work with leads, acceptance of an
		application and its full support. Lead processing
		automation, integration with various government
		and private partners.`,
		responsibility: ['Web', 'Desktop'],
	},
	sushi: {
		image: sushi,
		longImage: sushiLong,
		title: 'СУШИШОП',
		description: `Online service for ordering of sushi. The SushiShop
			system automatically determines your geolocation
			for the nearest sushi store to make the delivery
			time more comfortable for the user. The system
			also provides a bonus program, an accumulative
			system and various discounts for different holidays
			or seasons.`,
		responsibility: ['Mobile'],
	},
	prankChat: {
		image: prankchat,
		longImage: prankchatLong,
		title: 'PrankChat смешные видео',
		description:
			'PrankChat is a social video network where users shoot and post very funny and absolutely unique videos.',
		responsibility: ['Mobile'],
	},
	spbProperty: {
		image: spbProperty,
		longImage: spbLong,
		title: 'Петербургская Недвижимость',
		description: `Mobile client for finding an apartment in residential
		complex, St. Petersburg and Moscow. The system
		allows you to book apartments, make pre-orders
		and find apartments at competitive prices`,
		responsibility: ['Mobile'],
	},
	askod: {
		image: askod,
		longImage: askod,
		title: 'Askod Online',
		description: `ASKOD Online service is designed to
		automate the processes of document
		circulation between legal entities and
		individuals and provides review,
		approval, signing, sending, receiving
		and storing documents in a cloud
		environment.`,
		responsibility: ['Design'],
	},
	viol: {
		image: viol,
		longImage: viol,
		title: 'VIOL Commander',
		description: `Semper porta viverra arcu, pharetra. Scelerisque consectetur faucibus nibh dictum mi sodales ac ornare. Mauris maecenas dignissim enim, pharetra, tortor, sed. Adipiscing felis et sit dolor volutpat nulla volutpat, at etiam.`,
		responsibility: ['Desktop'],
	},
};
