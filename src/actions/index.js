'use strict';

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => {
  return {
    type: RESTART_GAME
  };
};

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => {
  return {
    type: MAKE_GUESS,
    guess
  };
};

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => {
  return {
    type: GENERATE_AURAL_UPDATE
  }
};

