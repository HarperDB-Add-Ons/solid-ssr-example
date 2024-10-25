import { hydrate } from 'solid-js/web';
import App from './App';

hydrate(() => <App initialPostData={window.__INITIAL_POST_DATA__} />, document.getElementById('root'));
