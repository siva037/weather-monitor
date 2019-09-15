import React from "react";
import { connect } from "react-redux";
import {fetchWeather} from '../../state/weather/actions';
import {
    isWeatherLoading,
    getWeather
} from '../../state/weather/selectors/weather';
import { bindActionCreators } from "redux";


class Weather extends React.Component {

    componentDidMount() {
        this.props.fetchWeather();
        console.log(1);
    }

    render() {

        const {isWeatherLoading, weather} = this.props;
        console.log(isWeatherLoading, weather);

        return (
            <div>Weather Data</div>
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
