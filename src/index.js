import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { restartGame, makeGuess, generateAuralUpdate } from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// Redux tests
console.log(store.getState());
store.dispatch(makeGuess(72));
console.log(store.getState());
store.dispatch(generateAuralUpdate());
console.log(store.getState());
store.dispatch(restartGame());
console.log(store.getState());