import {Map} from "immutable";

import weatherReducer from "./weather/reducer";

const initialState = new Map();

export default function(state = initialState, action) {
    return state.set("weather", weatherReducer(state.get("weather"), action));
}
