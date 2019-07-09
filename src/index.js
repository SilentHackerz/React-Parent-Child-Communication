import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FriendsContainer from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FriendsContainer />, document.getElementById('root'));

serviceWorker.unregister();
