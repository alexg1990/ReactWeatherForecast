import React from 'react';
import {test} from './weather.js';
import Forecast from './forecast.js';
//const APIcall = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=b633dd9c3c66d5c50f0fccd7c33cd2e7&units=metric";
console.log(test);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    };
  }
  componentDidMount() {
    this.setState({weather: test.list.map(forecast => {
      let date = new Date(forecast.dt*1000);
      let days = ["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."];
      let day = days[date.getDay()];
      let icon = "http://openweathermap.org/img/wn/" + forecast.weather[0].icon + "@2x.png";
      return ({
        utc: forecast.dt,
        txt: forecast.dt_txt,
        day: day,
        icon: icon,
        temp_max: forecast.main.temp_max,
        temp_min: forecast.main.temp_min
      })
    })});

    // this.setState({weather: test.list.map((forecast, index) => {
    //   // let date = new Date(forecast.dt*1000);
    //   // let days = ["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]
    //   // let day = days[date.getDay()];
    //   let icon = "http://openweathermap.org/img/wn/" + forecast.weather[0].icon + "@2x.png";
    //   return(
    //     <div style={{padding:10}}>
    //       <p style={{textAlign:"center"}}>{forecast.dt_txt}</p>
    //       <img src={icon} key={icon + index} style={{marginLeft:"20%"}}></img>
    //       <p style={{textAlign:"center"}}>Max: {forecast.main.temp_max} Min: {forecast.main.temp_min}</p>
    //     </div>);
    //     //<li key={index}>{forecast.dt}</li>)
    // })});
  }
  render() {
    let weather = this.state.weather.map(item => <Forecast txt={item.txt} icon={item.icon} temp_max={item.temp_max} temp_min={item.temp_min}></Forecast>)
    return (
      <div style={{display:"flex",flexWrap:"wrap"}}>{weather}</div>
    );
  }
}

export default App;
