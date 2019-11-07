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
      //let icon = "http://openweathermap.org/img/wn/" + forecast.weather[0].icon + "@2x.png";
      let icon = forecast.weather[0].icon;
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
    }, () => {
      let arr = [];
      for (let key in this.state.weather) {
        arr = [...arr, this.state.weather[key].reduce((prev,curr) => {
          prev.temp_max += curr.temp_max;
          prev.temp_min += curr.temp_min;
          prev.icon.push(curr.icon);
          return prev;
        },{
          day: key,
          icon: [],
          temp_max: 0,
          temp_min: 0
        })];
      }
      this.setState({weather: arr}, () => console.log(this.state.weather));
    });
  }
  render() {

    let weather = this.state.weather.map(item => <Forecast txt={item.txt} icon={item.icon} temp_max={item.temp_max} temp_min={item.temp_min}></Forecast>)
    return (
      <div style={{display:"flex",flexWrap:"wrap"}}>{weather}</div>
    );
  }
}

export default App;
