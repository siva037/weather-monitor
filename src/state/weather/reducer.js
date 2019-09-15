import { Map } from 'immutable';
import * as actions from './actions';

const initialState = Map({
  weather: null,
  isWeatherLoading: true

});

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case actions.WEATHER_FETCH:
          return state.set("isWeatherLoading", true);

        case actions.WEATHER_FETCH_COMPLETED:
          return state
            .set("weather", action.payload)
            .set("isWeatherLoading", false);

        // default
        default:
          return state;

      }

}
