import React from 'react';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{padding:10}}>
        <p style={{textAlign:"center"}}>{this.props.txt}</p>
        <img src={this.props.icon} key={this.props.icon} style={{marginLeft:"20%"}}></img>
        <p style={{textAlign:"center"}}>Max: {this.props.temp_max} Min: {this.props.temp_min}</p>
      </div>
    )
  }
}

export default Forecast;
