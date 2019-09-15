import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {fetchWeather} from '../../state/weather/actions';
import {
    isWeatherLoading,
    getWeather
} from '../../state/weather/selectors/weather';

import WeatherHeader from "./WeatherHeader";

import "./Weather.css";

class Weather extends React.Component {

    componentDidMount() {
        this.props.fetchWeather();
        console.log(1);
    }

    getFormattedWeatherLabel(weatherKey){
        switch (weatherKey) {
            case "temp"        : return "Temperature";
            case "pressure"    : return "Pressure";
            case "humidity"    : return "Humidity";
            case "temp_min"    : return "Temperature Minimum";
            case "temp_max"    : return "Temperature Maximum";
            default            : return ""
        }
    }

    getFormattedWeatherData(weatherkey, weatherData){
        return ["temp", "temp_max", "temp_min"].includes(weatherkey) ? weatherData + "\u00B0" : weatherData;
    }

    renderWeatherDetails(weatherItems) {
        const weatherKeyList = Object.keys(weatherItems);
        const weatherDataList = Object.values(weatherItems);

        return weatherKeyList.map((key, index) => (
            <tr key={index}>
                <td className="weather-item__detail-label">{ this.getFormattedWeatherLabel(key) }</td>
                <td className="weather-item__detail-value">{ this.getFormattedWeatherData(key, weatherDataList[index]) }</td>
            </tr>
        ));
    }

    render() {

        const {isWeatherLoading, weather} = this.props;
        console.log(isWeatherLoading, weather);

        return (
                <div className="weather-container">
                {
                    isWeatherLoading ? <div>Loading...</div> :
                    <div>
                        <WeatherHeader cityName={weather.weather.name} weatherDescription={weather.weather.weather[0]} />
                        <table className="weather-item__details">
                            <tbody>
                                { this.renderWeatherDetails(weather.weather.main) }
                            </tbody>
                        </table>
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
