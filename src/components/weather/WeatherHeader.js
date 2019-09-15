import React from "react";
import PropTypes from "prop-types";

import './WeatherHeader.css'

export default class WeatherHeader extends React.Component {

    static propTypes = {
        cityName: PropTypes.string.isRequired,
        weatherDescription: PropTypes.object.isRequired
    }

    getDateTime(){
        const locale = "en-GB";
        const timeZone = "Europe/London";
        const currentDateTime = new Date();
        return currentDateTime.toLocaleString(locale, { timeZone: timeZone });
    }

    buildWeatherDescription(){
        const weatherDescriptionObject = this.props.weatherDescription;
        const weatherDescription = weatherDescriptionObject.main + ", " + weatherDescriptionObject.description;
        return weatherDescription;
    }

    render() {

        return (

            <div className="weather-header__details">
                <div className="weather-header__city">
                    <div className="weather-header__city-name">{this.props.cityName}</div>
                    <div>{this.getDateTime()}</div>
                </div>
                <div className="weather-header__description">
                    {this.buildWeatherDescription()}
                </div>
            </div>

        )
    }
}
