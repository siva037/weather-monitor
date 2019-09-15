
export const WEATHER_FETCH = "WEATHER_FETCH";
export const WEATHER_FETCH_COMPLETED = "WEATHER_FETCH_COMPLETED";

export function fetchWeather() {
    // Create a Flux Standard Action
    return createAction(WEATHER_FETCH, false);
}

export function fetchWeatherSucceeded(weather) {
    return { WEATHER_FETCH_COMPLETED, false, { weather }};
}
