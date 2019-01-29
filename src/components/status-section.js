import React from 'react';
import {connect} from 'react-redux'
import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';

function StatusSection(props) {
  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={props.guessCount} />
      <GuessList guesses={props.guesses} />
      <AuralStatus auralStatus={props.auralStatus} />
    </section>
  );
}

const mapStateToProps = state => {
  return {
    guesses: state.guesses,
    guessCount:state.guesses.length,
    auralStatus: state.auralStatus,
  }

}
export default connect(mapStateToProps)(StatusSection)