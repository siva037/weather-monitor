import { createAction } from '../../libraries/actions';

export const WEATHER_FETCH = "WEATHER_FETCH";
export const WEATHER_FETCH_COMPLETED = "WEATHER_FETCH_COMPLETED";

export function fetchWeather() {
    return createAction(WEATHER_FETCH, false);
}

export default function fetchWeatherSucceeded(weather) {
    return createAction(WEATHER_FETCH_COMPLETED, false, { weather });
}
