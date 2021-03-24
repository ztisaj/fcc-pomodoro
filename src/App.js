import React, {Component} from 'react';
import Len from "./Length.js";
import Session from './Session.js';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
    }

    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onSessionIncrement = this.onSessionIncrement.bind(this);
    this.onSessionDecrement = this.onSessionDecrement.bind(this);
    this.updateTimerMinute = this.updateTimerMinute.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.playOn = this.playOn.bind(this);

  }

  playOn(isPlay){
    this.setState({
      isplay: isPlay
    })
  }

  onIncreaseBreak() {
    this.setState((prevState)=>{
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreaseBreak() {
    this.setState((prevState)=>{
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  onSessionIncrement() {
    this.setState((prevState)=>{
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      }
    })
  }

  onSessionDecrement() {
    this.setState((prevState)=>{
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    })
  }

  updateTimerMinute(minuteChange){
    this.setState({
        timerMinute: minuteChange
    })
  }

  resetTimer() {
    this.setState({
      sessionLength: 25,
      timerMinute: 25,
      breakLength: 5
    })
  }

  render() {
    return(
      <div id="container">
        <Session timerMinute={this.state.timerMinute}
                  sessionLength={this.state.sessionLength}
                  breakLength={this.state.breakLength}
                  updateTimerMinute={this.updateTimerMinute}
                  playOn={this.playOn}
                  reset={this.resetTimer}
        />

        <Len breakLength={this.state.breakLength}
              breakIncrement={this.onIncreaseBreak}
              breakDecrement={this.onDecreaseBreak}
              isPlay = {this.state.isPlay}
              sessionLength={this.state.sessionLength}
              sessionIncrement={this.onSessionIncrement}
              sessionDecrement={this.onSessionDecrement}
              />

      </div>
    );
  }
}

export default App;
