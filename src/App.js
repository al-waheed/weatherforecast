import React, { Component } from 'react'
import moment from 'moment';
import { WeatherDataContext } from './WeatherDataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  static contextType = WeatherDataContext;

  render() {
    const { query, weather, handleChange, handleSearch } = this.context;
    return (
      <div className="app">
        <main>
        <div>
          <div className="searchbox">
            <h1><span className='w'>W</span><span className='e'>e</span>
              <span className='a'>a</span><span className='t'>t</span>
              <span className='h'>h</span><span className='e'>e</span>
              <span className='r'>r</span></h1>
            <input type="text"
              className="searchbar"
              onChange={handleChange}
              value={query}
              onKeyPress={handleSearch} />
             <FontAwesomeIcon className="icon" icon={faSearch} />
             <FontAwesomeIcon className="icon2" icon={faMicrophone} />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
              <div className="locationbox">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{moment().format('LLLL')}</div>
              </div>
              <div className="weatherbox">
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            <div className='hint'>
              <div className='searchbtn'>
                <div className='btn1'>Weather Search</div>
                <div className='btn'>I'm Feeling Cold</div>
              </div>
              <div className='searchhint'>
                <div>Weather search hint: </div>
                <div className='info'>State</div>
                <div className='info'>City</div>
                <div className='info'>Town</div>
                <div className='info'>Country</div>
              </div>
            </div>
          )}
          </div>
        </main>
      </div>
    )
  }
}

export default App
