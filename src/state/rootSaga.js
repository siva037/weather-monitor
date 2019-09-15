import { all, takeLatest } from 'redux-saga/effects';

import fetchWeatherSaga from "./weather/sagas/fetchWeatherSaga";

export default function* rootSaga() {
	yield all([
		takeLatest('WEATHER_FETCH', fetchWeatherSaga)
	]);
}
