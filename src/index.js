import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data from './components/db/data';
import { addPosts, addMessages } from './components/db/data';

ReactDOM.render(<App data={data} addPosts={addPosts} addMessages={addMessages} />, document.getElementById('root'));

serviceWorker.unregister();
