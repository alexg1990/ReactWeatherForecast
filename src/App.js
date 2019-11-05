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
      })})
      .reduce((prev, curr) => {
        prev[curr.day] = [...prev[curr.day] || [], curr];
        return prev;
      },[])
    });
  }
  render() {

    //let weather = this.state.weather.map(item => <Forecast txt={item.txt} icon={item.icon} temp_max={item.temp_max} temp_min={item.temp_min}></Forecast>)
    console.log(this.state.weather);
    // console.log(this.state.weather[0]);
    // if(this.state.weather.length > 0) {
    //   let weather = this.state.weather.forEach(day => day.reduce(((prev, curr) => {
    //     return prev + curr;
    //   },{})));
    //   console.log(weather);
    //   console.log(this.state.weather);
    // }
    return (
      <div>hi</div>
      //<div style={{display:"flex",flexWrap:"wrap"}}>{weather}</div>
    );
  }
}

export default App;
