import React from "react";
import PropTypes from "prop-types";

import './WeatherItem.css'

export default class WeatherItem extends React.Component {

    static propTypes = {
        weatherItems: PropTypes.object.isRequired
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
    

    renderWeatherDetails() {
        const weatherItems = this.props.weatherItems;
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

        return (

            <table className="weather-item__details">
                <tbody>
                    { this.renderWeatherDetails() }
                </tbody>
            </table>

        )
    }
}
