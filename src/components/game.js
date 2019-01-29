import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

  class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  render() {
    const { guesses, auralStatus } = this.state;

    return (
      <div>
        <Header/>
        <main role="main">
          <GuessSection />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}


export default connect()(Game)