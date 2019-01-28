import { RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case RESTART_GAME:
    case MAKE_GUESS:
    case GENERATE_AURAL_UPDATE:
      return state;
    default:
      return state;
  }
}