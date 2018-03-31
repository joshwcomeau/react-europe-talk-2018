import React from 'react';
import ReactDOM from 'react-dom';

import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';

import './assets/prism.js';
import './assets/prism.css';

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();
