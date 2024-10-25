import { renderToString } from 'solid-js/web';
import App from './App';

export function render({ initialPostData }) {
	const html = renderToString(() => <App initialPostData={initialPostData} />);
	return { html };
}
