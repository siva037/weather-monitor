export function isWeatherLoading(state) {
  return state.getIn(["weather", "isWeatherLoading"]);
}

export function getWeather(state, schoolID) {
  return state.getIn(["weather", "weather"]);
}
