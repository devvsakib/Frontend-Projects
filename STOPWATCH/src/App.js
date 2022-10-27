import './App.scss';
import './App.css';
import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0, 
      minutes: 25,
      value: 25, 
      clicked: false, 
      active: false,
      break: 5,
      breakNow: false,
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.addBreak = this.addBreak.bind(this);
    this.subtractBreak = this.subtractBreak.bind(this);
    this.sec = this.sec.bind(this);
    this.min = this.min.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.reset = this.reset.bind(this);
  }

  //responsible for seconds
  sec() { 
    this.interval = setInterval(() => {
        if (this.state.seconds === 0){           
          this.setState(state => ({      
            seconds: 60
          }));
          }    
        this.setState(prevState => ({
          seconds: prevState.seconds - 1,
          }));
      }, 1000); 
  }

  //responsible for minutes
  min() {    
    if (this.state.seconds === 0 && this.state.minutes > 0){
    setTimeout(() => {
    this.setState(state => ({
      minutes: state.minutes - 1,
    }))
    }, 1000);//waits 1 sec then subtracts 1
    } else if (this.state.minutes <= 0){
      this.setState({minutes: this.state.value})
    }
    this.interval2 = setInterval(() => {
      if (this.state.breakNow === false) {
        if (this.state.minutes === 0 && this.state.seconds === 0){
          this.setState({breakNow: true})
          this.audioBeep.play();
          setTimeout(() => {
            this.setState({minutes: this.state.break -1})
          }, 1000);
        }
      }else {
        if (this.state.minutes === 0 && this.state.seconds === 0){
        this.setState({breakNow: false})
        setTimeout(() => {
        this.setState({minutes: this.state.value -1})
        }, 1000);
        }
      }
        if (this.state.minutes > 0){
          this.setState(prevState => ({
          minutes: prevState.minutes - 1
          }));}
    }, 60000);
}

  //adds minutes
  add(){   
      if(this.state.clicked === false){
        if (this.state.breakNow === false){
        if (this.state.seconds !== 0){
          this.setState({seconds: 0});
        }
        if (this.state.minutes !== this.state.value){
          this.setState({minutes: this.state.value})
        }
        this.setState(state => ({
          minutes: state.minutes + 1,
        }));
      }
        this.setState(state => ({
          value: state.value + 1,
      }));
    }
  }

  //subtracts minutes
  subtract(){   
    if(this.state.clicked === false){
      if (this.state.breakNow === false){
      if (this.state.seconds !== 0){
        this.setState({seconds: 0});
      }
      if (this.state.minutes !== this.state.value){
        this.setState({minutes: this.state.value})
      }
      if (this.state.minutes > 1){
      this.setState(state => ({
          minutes: state.minutes - 1,
        }));} else {
          this.setState({minutes: 1})
        }
      }
        this.setState(state => ({
          value: state.value - 1,
      }));
    }
  }

    //adds minutes
    addBreak(){   
      if(this.state.clicked === false){
        if (this.state.breakNow === true){
          if (this.state.seconds !== 0){
            this.setState({seconds: 0});
          }
          if (this.state.minutes !== this.state.break){
            this.setState({minutes: this.state.break})
          }
          this.setState(state => ({
              minutes: state.minutes + 1,
          }));
        }  
        this.setState(state => ({
          break: state.break + 1,
      }));
    }
  }

  //subtracts minutes
  subtractBreak(){   
    if(this.state.clicked === false){
      if (this.state.breakNow === true){
        if (this.state.seconds !== 0){
          this.setState({seconds: 0});
        }
        if (this.state.minutes !== this.state.break){
          this.setState({minutes: this.state.break})
        }
        if (this.state.minutes > 1){
        this.setState(state => ({
            minutes: state.minutes - 1,
          }));} else {
            this.setState({minutes: 1})
          }  
      }
      this.setState(state => ({
          break: state.break - 1,
      }));
    }
  }


  //pauses time
  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }
  
  //assigns pause and play to the same button
  pausePlay() {
    if (this.state.minutes < 0 ){ this.setState({minutes: 0})}
    if (this.state.active === false){
      this.sec(); this.min();
      this.setState({active: true});
      this.setState({clicked: true});
    } else{
      this.componentWillUnmount();
      this.setState({active: false});
      this.setState({clicked: false});
    }
  }

  reset(){
    this.setState({
      seconds: 0, 
      minutes: 25,
      value: 25, 
      clicked: false, 
      active: false,
      break: 5,
      breakNow: false,
    });
    this.componentWillUnmount();
    this.audioBeep.pause(); 
    this.audioBeep.currentTime = 0; 
  }

  render() {  
    return (
      <div>
        <div class="length-control">
        <div id="break-label">
          Break Length
          </div>
          <button id="break-increment" onClick={this.addBreak}>+</button>
          <div id='break-length'> 
            {this.state.break < 1 ? this.setState({break: 1}): this.state.break && this.state.break > 60 ? this.setState({break: 60}): this.state.break}
          </div>
          <button id="break-decrement" onClick={this.subtractBreak}>-</button>
        </div>
        <div class="length-control">
          <div id='session-label'>
          Session Length
          </div>
          <button id="session-increment" onClick={this.add}>+</button>
          <div id='session-length'>  
            {this.state.value < 1 ? this.setState({value: 1}): this.state.value && this.state.value > 60 ? this.setState({value: 60}): this.state.value}
          </div>
          <button id="session-decrement" onClick={this.subtract}>-</button>
        </div>
        <div class="time-wrapper">
          <div id='timer-label'>
            {this.state.breakNow? 'Break' : 'Session'}
          </div>  
          <div id="time-left">
            {this.state.minutes < 10 ? '0' + this.state.minutes: this.state.minutes && this.state.minutes > 60 ? this.setState({minutes: 60}): this.state.minutes}:
            {this.state.seconds < 10 ? '0' + this.state.seconds: this.state.seconds}
          </div>
        </div>
        <div class="timer-control">
          <button
          id="start_stop"  
          onClick={() => {this.pausePlay();}}>
            start//pause
          </button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <audio
          id="beep"
          preload="auto"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />  
      </div>
    );
  }
}


export default Timer;
