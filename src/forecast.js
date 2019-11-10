import React from 'react';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{padding:10}}>
        <p style={{textAlign:"center"}}>{this.props.day}</p>
        <img src={this.props.icon} key={this.props.icon} style={{marginLeft:"20%"}}></img>
        <p style={{textAlign:"center"}}>Max: {this.props.temp_max} °C Min: {this.props.temp_min} °C</p>
      </div>
    )
  }
}

export default Forecast;
