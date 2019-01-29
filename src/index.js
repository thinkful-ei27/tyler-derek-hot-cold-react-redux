import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { restartGame, makeGuess, generateAuralUpdate } from './actions';
import {Provider} from 'react-redux'
import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Provider store={store}>
  <Game />
  </Provider>,
  document.getElementById('root')
);

