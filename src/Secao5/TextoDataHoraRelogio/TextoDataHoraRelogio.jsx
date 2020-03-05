import React, { Component } from 'react'
import * as moment from 'moment'

class TextoDataHoraRelogio extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tempo: ''
     };

     this.relogio = this.relogio.bind(this);
     this.iniciarRelogio = this.iniciarRelogio.bind(this);

     this.iniciarRelogio();
  }

  iniciarRelogio() {
    this.relogio();
    setInterval(() => {
      this.relogio();
    }, 1000);
  }

  relogio() {
    let state = this.state;
    state.tempo = this.formatarTempo();

    this.setState(state);
  }

  formatarTempo(inicio, fim) {
    let duration = moment.duration(moment(moment.now()).diff((moment(this.props.tempo.inicio))));
    // let duration = moment.duration(moment(fim).diff((moment(inicio))));
    
    var hours = duration.asHours() >= 10 ? `${Math.floor(duration.asHours())}` : `0${Math.floor(duration.asHours())}`;
    var minutes = duration.minutes() > 9 ? `${duration.minutes()}` : `0${duration.minutes()}`;
    var seconds = duration.seconds() > 9 ? `${duration.seconds()}` : `0${duration.seconds()}`;

    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
        <div>
          {this.state.tempo}
        </div>
      );
  }
}
  
export default TextoDataHoraRelogio;