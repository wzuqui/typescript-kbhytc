import { React, render } from './lib/react';

import App from './app';

console.log(App);
render(React.createElement(App, null), document.querySelector('#app'));
