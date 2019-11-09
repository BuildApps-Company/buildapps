import { theme } from '../styles/theme';

export function smoothScrollTo(event, id) {
	event.preventDefault();

	const section = document.getElementById(id);
	if (section) {
		window.scrollTo({
			top: section.offsetTop - theme.headerHeight,
			behavior: 'smooth',
		});
	}
}

export function setHash(hash) {
	window.history.replaceState(null, null, `#${hash}`);
}
