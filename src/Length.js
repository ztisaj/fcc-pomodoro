import React from 'react';

function Len(props) {
  function breakIncrement() {
    if (props.breakLength === 60) {
      return;
    }
    props.breakIncrement();
  }

  function breakDecrement() {
    if(props.breakLength === 1) {
      return;
    }
    props.breakDecrement();
  }

  function sessionIncrement() {
    if(props.sessionLength === 60) {
      return;
    }
    props.sessionIncrement();
  }

  function sessionDecrement() {
    if(props.sessionLength === 1) {
      return;
    }
    props.sessionDecrement();
  }

    return (
      <div id="len">
        <div id="break-label">
          <label>Break Length</label>
          <div id="lenL">
            <div id="break-increment" disabled={props.isPlay?"disabled":""} onClick={breakIncrement}>&#x2963;</div>
            <div>{props.breakLength}</div>
            <div id="break-decrement" disabled={props.isPlay?"disabled":""} onClick={breakDecrement}>&#x2965;</div>
          </div>
        </div>
        <div id="session-label">
          <label>Session Length</label>
          <div id="lenR">
            <div id="session-increment" disabled={props.isPlay?"disabled":""} onClick={sessionIncrement}>&#x2963;</div>
            <div>{props.sessionLength}</div>
            <div id="session-decrement" disabled={props.isPlay?"disabled":""} onClick={sessionDecrement}>&#x2965;</div>
          </div>
        </div>
      </div>
    );
}

export default Len;
