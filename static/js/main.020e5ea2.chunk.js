(this["webpackJsonpfcc-pomodoro"]=this["webpackJsonpfcc-pomodoro"]||[]).push([[0],{11:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),r=s(3),a=s(4),c=s(1),o=s(6),d=s(5),l=s(0);var h=function(e){return Object(l.jsxs)("div",{id:"len",children:[Object(l.jsxs)("div",{id:"break-label",children:[Object(l.jsx)("label",{children:"Break Length"}),Object(l.jsxs)("div",{id:"lenL",children:[Object(l.jsx)("div",{id:"break-increment",disabled:e.isPlay?"disabled":"",onClick:function(){60!==e.breakLength&&e.breakIncrement()},children:"\u2963"}),Object(l.jsx)("div",{children:e.breakLength}),Object(l.jsx)("div",{id:"break-decrement",disabled:e.isPlay?"disabled":"",onClick:function(){1!==e.breakLength&&e.breakDecrement()},children:"\u2965"})]})]}),Object(l.jsxs)("div",{id:"session-label",children:[Object(l.jsx)("label",{children:"Session Length"}),Object(l.jsxs)("div",{id:"lenR",children:[Object(l.jsx)("div",{id:"session-increment",disabled:e.isPlay?"disabled":"",onClick:function(){60!==e.sessionLength&&e.sessionIncrement()},children:"\u2963"}),Object(l.jsx)("div",{children:e.sessionLength}),Object(l.jsx)("div",{id:"session-decrement",disabled:e.isPlay?"disabled":"",onClick:function(){1!==e.sessionLength&&e.sessionDecrement()},children:"\u2965"})]})]})]})},u=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={isSession:!0,timerSecond:0,intervalId:""},e.play=e.play.bind(Object(c.a)(e)),e.stop=e.stop.bind(Object(c.a)(e)),e.reset=e.reset.bind(Object(c.a)(e)),e}return Object(a.a)(s,[{key:"play",value:function(){0===this.state.timerSecond&&this.props.timerMinute===this.props.sessionLength&&this.decreaseTimer()}},{key:"stop",value:function(){clearInterval(this.state.intervalId)}},{key:"decreaseTimer",value:function(){var e=this,t=setInterval((function(){switch(e.state.timerSecond){case 0:0===e.props.timerMinute?(e.playAudio(),e.state.isSession?(e.setState({isSession:!1}),e.props.updateTimerMinute(e.props.breakLength)):(e.setState({isSession:!0}),e.props.updateTimerMinute(e.state.isSession))):(e.props.updateTimerMinute(e.props.timerMinute-1),e.setState({timerSecond:59}));break;default:e.setState({timerSecond:e.state.timerSecond-1})}}),1e3);this.setState({intervalId:t})}},{key:"reset",value:function(){clearInterval(this.state.intervalId),this.props.reset(),this.props.playOn(!1),this.setState({timerSecond:0})}},{key:"playAudio",value:function(){document.querySelector("audio").play()}},{key:"render",value:function(){var e=0===this.props.timerMinute?"timer-alert":"";return e+=" session-timer",Object(l.jsxs)("div",{id:"sen",children:[Object(l.jsx)("div",{id:"timer-label",children:this.state.isSession?"Session":"Break"}),Object(l.jsxs)("div",{id:"time-left",children:[Object(l.jsx)("span",{className:e,children:this.props.timerMinute}),Object(l.jsx)("span",{className:e,children:":"}),Object(l.jsx)("span",{className:e,children:0===this.state.timerSecond?"00":this.state.timerSecond<10?"0"+this.state.timerSecond:this.state.timerSecond})]}),Object(l.jsxs)("div",{id:"start_stop",children:[Object(l.jsx)("button",{"data-type":"play",id:"start",onClick:this.play,children:"\u25b6"}),Object(l.jsx)("button",{"data-type":"stop",id:"stop",onClick:this.stop,children:"\u2b1b"}),Object(l.jsx)("button",{id:"reset",onClick:this.reset,children:"\u27f3"})]}),Object(l.jsx)("audio",{id:"beep",children:Object(l.jsx)("source",{src:"http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a",type:"audio/wav"})})]})}}]),s}(i.a.Component),b=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={breakLength:5,sessionLength:25,timerMinute:25,isPlay:!1},e.onIncreaseBreak=e.onIncreaseBreak.bind(Object(c.a)(e)),e.onDecreaseBreak=e.onDecreaseBreak.bind(Object(c.a)(e)),e.onSessionIncrement=e.onSessionIncrement.bind(Object(c.a)(e)),e.onSessionDecrement=e.onSessionDecrement.bind(Object(c.a)(e)),e.updateTimerMinute=e.updateTimerMinute.bind(Object(c.a)(e)),e.resetTimer=e.resetTimer.bind(Object(c.a)(e)),e.playOn=e.playOn.bind(Object(c.a)(e)),e}return Object(a.a)(s,[{key:"playOn",value:function(e){this.setState({isplay:e})}},{key:"onIncreaseBreak",value:function(){this.setState((function(e){return{breakLength:e.breakLength+1}}))}},{key:"onDecreaseBreak",value:function(){this.setState((function(e){return{breakLength:e.breakLength-1}}))}},{key:"onSessionIncrement",value:function(){this.setState((function(e){return{sessionLength:e.sessionLength+1,timerMinute:e.sessionLength+1}}))}},{key:"onSessionDecrement",value:function(){this.setState((function(e){return{sessionLength:e.sessionLength-1,timerMinute:e.sessionLength-1}}))}},{key:"updateTimerMinute",value:function(e){this.setState({timerMinute:e})}},{key:"resetTimer",value:function(){this.setState({sessionLength:25,timerMinute:25,breakLength:5})}},{key:"render",value:function(){return Object(l.jsxs)("div",{id:"container",children:[Object(l.jsx)(u,{timerMinute:this.state.timerMinute,sessionLength:this.state.sessionLength,breakLength:this.state.breakLength,updateTimerMinute:this.updateTimerMinute,playOn:this.playOn,reset:this.resetTimer}),Object(l.jsx)(h,{breakLength:this.state.breakLength,breakIncrement:this.onIncreaseBreak,breakDecrement:this.onDecreaseBreak,isPlay:this.state.isPlay,sessionLength:this.state.sessionLength,sessionIncrement:this.onSessionIncrement,sessionDecrement:this.onSessionDecrement})]})}}]),s}(i.a.Component),j=(s(11),s(8));s.n(j).a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.020e5ea2.chunk.js.map