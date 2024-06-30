import { call } from 'redux-saga/effects'

function print() {
    console.log('saga is working');
}

function* testSaga() {
    yield call(print);
}

export default testSaga
