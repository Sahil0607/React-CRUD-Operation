import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthContext from './Context/auth-context';

ReactDOM.render(
    <AuthContext>
        <App />
    </AuthContext>, document.getElementById('root'));

serviceWorker.unregister();
