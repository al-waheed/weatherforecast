import React, { Component, createContext } from "react";

export const WeatherDataContext = createContext();

export class WeatherProvider extends Component {
  state = {
    apiKey: "c173054579f97ce5b2826f318e5cf6f8",
    apiUrl: "https://api.openweathermap.org/data/2.5/",
    query: "",
    weather: {},
  };

  handleSearch = (event) => {
    const { apiUrl, apiKey, query } = this.state;
    if (event.key === "Enter") {
      fetch(`${apiUrl}weather?q=${query}&units=metric&APPID=${apiKey}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ weather: res });
          this.setState({ query: "" });
        });
    }
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query, weather } = this.state;
    const { handleChange, handleSearch } = this;
    return (
      <WeatherDataContext.Provider
        value={{ query, weather, handleChange, handleSearch }}
      >
        {this.props.children}
      </WeatherDataContext.Provider>
    );
  }
}
