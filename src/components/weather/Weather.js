import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {fetchWeather} from '../../state/weather/actions';
import {
    isWeatherLoading,
    getWeather
} from '../../state/weather/selectors/weather';

import "./Weather.css";

class Weather extends React.Component {

    componentDidMount() {
        this.props.fetchWeather();
        console.log(1);
    }

    getDateTime(){
        const locale = "en-GB";
        const timeZone = "Europe/London";
        const currentDateTime = new Date();
        return currentDateTime.toLocaleString(locale, { timeZone: timeZone });
    }

    buildWeatherDescription(weather){
        const weatherDescriptionObject = weather.weather.weather[0];
        const weatherDescription = weatherDescriptionObject.main + ", " + weatherDescriptionObject.description;
        return <div>{weatherDescription}</div>;
    }

    render() {

        const {isWeatherLoading, weather} = this.props;
        console.log(isWeatherLoading, weather);

        return (
                <div>
                {
                    isWeatherLoading ? <div>Loading...</div> :
                    <div>
                        <div className="weather-header__details">
                            <div className="weather-header__city">
                                <div className="weather-header__city-name">{weather.weather.name}</div>
                                <div>{this.getDateTime()}</div>
                            </div>
                            <div className="weather-header__description">
                                {this.buildWeatherDescription(weather)}
                            </div>
                        </div>
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
