import { React, render } from './lib/react';

import App from './app';

render(React.createElement(App, null), document.querySelector('#app'));
