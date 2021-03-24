import React from 'react';

class Session extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: ''
    }

    this.play = this.play.bind(this);
    this.stop=this.stop.bind(this);
    this.reset = this.reset.bind(this);

  }


  play(){
    if(this.state.timerSecond===0 && this.props.timerMinute===this.props.sessionLength){
        this.decreaseTimer();
      }
    }

  stop(){
        clearInterval(this.state.intervalId);
  }

  decreaseTimer() {
    let intervalId = setInterval(()=>{
      switch(this.state.timerSecond) {
        case 0:
          if(this.props.timerMinute===0){
            this.playAudio();
            if(this.state.isSession){
              this.setState({
                isSession: false
              });
              this.props.updateTimerMinute(this.props.breakLength);
          } else {
            this.setState({
              isSession: true
            });
            this.props.updateTimerMinute(this.state.isSession);
          }
        } else {
            this.props.updateTimerMinute(this.props.timerMinute-1);
            this.setState({
              timerSecond: 59
          })
        }
        break;
      default:
        this.setState({
            timerSecond: this.state.timerSecond-1
        })
        break;
      }
    },1000);
    this.setState({
      intervalId: intervalId
    });
  }


  reset() {
    clearInterval(this.state.intervalId);

    this.props.reset();
    this.props.playOn(false);

    this.setState({
      timerSecond: 0
    })

  }

  playAudio(){
  let audio = document.querySelector("audio");
  audio.play();
}





  render() {
    let timerClass = this.props.timerMinute === 0 ? "timer-alert" : "";
    timerClass += " session-timer";
    return(
      <div id="sen">
        <div id="timer-label">{this.state.isSession ? "Session":"Break"}</div>
        <div id="time-left">
          <span className={timerClass}>{this.props.timerMinute}</span>
          <span className={timerClass}>:</span>
          <span className={timerClass}>{this.state.timerSecond === 0 ? "00"
            : this.state.timerSecond < 10
            ? "0" + this.state.timerSecond
            : this.state.timerSecond}
          </span>
        </div>
        <div id="start_stop">
          <button data-type="play" id="start" onClick={this.play}>&#x25B6;</button>
          <button data-type="stop" id="stop" onClick={this.stop}>&#x2B1B;</button>
          <button id="reset" onClick={this.reset}>&#x27F3;</button>
        </div>
        <audio id="beep">
          <source src="http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a" type="audio/wav"/>
        </audio>
      </div>
    );
  }
}

export default Session;
