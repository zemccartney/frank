import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as M from './middle-end';
import Theme from './theme';
import './index.css';

const middleEnd = M.create({
    basePath: import.meta.env.BASE_PATH,
    logErrors: import.meta.env.MODE !== 'test'
}).initialize();

ReactDOM.render(
    <React.StrictMode>
        <App
            middleEnd={middleEnd}
            history={middleEnd.mods.router._createHistory(middleEnd.store)}
            theme={Theme}
        />
    </React.StrictMode>,
    document.getElementById('root')
);
