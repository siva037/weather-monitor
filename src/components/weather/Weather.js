import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {fetchWeather} from '../../state/weather/actions';
import {
    isWeatherLoading,
    getWeather
} from '../../state/weather/selectors/weather';

import WeatherHeader from "./WeatherHeader";
import WeatherItem from "./WeatherItem";

import "./Weather.css";

class Weather extends React.Component {

    componentDidMount() {
        this.props.fetchWeather();
    }

    render() {

        const {isWeatherLoading, weather} = this.props;

        return (
                <div className="weather-container">
                {
                    isWeatherLoading ? <div>Loading...</div> :
                    <div>
                        <WeatherHeader cityName={weather.weather.name} weatherDescription={weather.weather.weather[0]} />
                        <WeatherItem weatherItems={weather.weather.main} />
                    </div>
                }
                </div>
                )
    }
}

export default connect(
    (state) => ({
        isWeatherLoading: isWeatherLoading(state),
        weather: getWeather(state)
    }),
  (dispatch) => bindActionCreators({
    fetchWeather
  }, dispatch)
)(Weather);
