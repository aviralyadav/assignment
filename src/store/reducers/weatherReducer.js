import { FETCH_WEATHER, FETCH_WEATHER_FAIL, FETCH_WEATHER_RESET, FETCH_WEATHER_SUCCESS } from "../constants";

const INITIAL_STATE = {
    data: {},
    error: '',
    isLoading: false
}

export default function weatherReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_WEATHER: 
            return {
                ...state,
                isLoading: true
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_WEATHER_FAIL:
            return {
                ...state,
                error: action.payload,
                data: {},
                isLoading: false
            };
        case FETCH_WEATHER_RESET:
            return {
                ...state,
                error: '',
                data:{},
                isLoading: false
            };
       
        default: return state;
    }
}
