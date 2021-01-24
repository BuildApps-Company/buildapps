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
		responsibility: ['Web Development', 'Web API Development', 'DevOps'],
	},
	sushi: {
		image: sushi,
		title: 'СУШИШОП',
		description:
			'Client application for selling sushi directly from your phone.',
		responsibility: ['Mobile Development', 'IOS', 'Android'],
	},
	spbProperty: {
		image: spbProperty,
		title: 'Петербургская Недвижимость',
		responsibility: ['Mobile Development', 'IOS', 'Android'],
	},
	askod: {
		image: askod,
		title: 'Askod Online',
		responsibility: ['Website Design'],
	},
	viol: {
		image: viol,
		title: 'VIOL Commander',
		responsibility: ['Desktop Development', 'Windows App'],
	},
};
