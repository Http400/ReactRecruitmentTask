import React from 'react';
import ReactDOM from 'react-dom';

import Home from './containers/Home';

const App = (): JSX.Element => {
    return <Home />;
}

const root = document.getElementById('app-root');
ReactDOM.render(<App />, root);