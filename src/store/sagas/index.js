import { fork, all } from 'redux-saga/effects'
import weatherSaga from './WeatherSaga'

export default function* rootSaga(){
    yield all([
        fork(weatherSaga)
    ]);
}