import spbProperty from '../../static/images/portfolio/spbProperty.jpg';
import viol from '../../static/images/portfolio/viol.jpg';
import askod from '../../static/images/portfolio/askod.jpg';
import prankchat from '../../static/images/portfolio/prankchat.png';
import sushi from '../../static/images/portfolio/sushi.png';
import ppf from '../../static/images/portfolio/ppf.png';

export const Portfolio = {
	prankChat: {
		image: prankchat,
		title: 'PrankChat смешные видео',
		description:
			'PrankChat is a social video network where users shoot and post very funny and absolutely unique videos.',
		responsibility: ['Mobile Development', 'IOS', 'Android', 'DevOps'],
	},
	ppf: {
		image: ppf,
		title: 'Lead management software',
		description: 'Internal CRM for organizing an ecosystem of work with leads.',
		responsibility: ['Web application', 'Web API', 'DevOps'],
	},
	sushi: {
		image: sushi,
		title: 'СУШИШОП',
		description:
			'Client application for selling sushi directly from your phone.',
		responsibility: ['Mobile application', 'IOS', 'Android'],
	},
	spbProperty: {
		image: spbProperty,
		title: 'Петербургская Недвижимость',
		responsibility: ['Mobile application', 'IOS', 'Android'],
	},
	askod: {
		image: askod,
		title: 'Askod Online',
		responsibility: ['Website design'],
	},
	viol: {
		image: viol,
		title: 'VIOL Commander',
		responsibility: ['Desktop application', 'Windows App'],
	},
};
