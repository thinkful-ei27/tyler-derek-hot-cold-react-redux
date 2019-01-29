import { RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RESTART_GAME:
      return Object.assign({}, initialState, {
        correctAnswer: Math.floor(Math.random() * 100) + 1
      });
    case MAKE_GUESS:
      const guess = parseInt(action.guess, 10);
      if (isNaN(guess)) {
        return Object.assign({}, state, {
          feedback: 'Please enter a valid number'
        });
      }

      const difference = Math.abs(guess - state.correctAnswer);

      let feedback;
      if (difference >= 50) {
        feedback = "You're Ice Cold...";
      } else if (difference >= 30) {
        feedback = "You're Cold...";
      } else if (difference >= 10) {
        feedback = "You're Warm.";
      } else if (difference >= 1) {
        feedback = "You're Hot!";
      } else {
        feedback = 'You got it!';
      }

      return Object.assign({}, state, {
        feedback,
        guesses: [...state.guesses, guess]
      });
    case GENERATE_AURAL_UPDATE:
      const { guesses } = state;
      const pluralize = guesses.length !== 1;

      let auralStatus = `Here's the status of the game right now: ${
        state.feedback
      } You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

      if (guesses.length > 0) {
        auralStatus += ` ${
          pluralize ? 'In order of most- to least-recent, they are' : 'It was'
        }: ${guesses.reverse().join(', ')}`;
      }

      return Object.assign({}, state, { auralStatus });
    default:
      return state;
  }
}
