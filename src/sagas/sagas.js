import { eventChannel } from 'redux-saga';
import { call } from 'redux-saga/effects';
import store from '../app/store';
import { update } from '../features/counter/counterSlice';

// create saga that yields dispatched actions when getting websocket message


// function print() {
//     console.log('saga is working');
// }

function setUpWebSocket() {
    return eventChannel(emitter => {
        const socket = new WebSocket('/ws');
        socket.onopen = () => {
            console.log('connection open');
            socket.send('Hi server');
        }
        socket.onmessage = (evt) => {
            console.log(evt.data);
            store.dispatch(update(evt.data));
        }
    })
}

function* testSaga() {
    yield call(setUpWebSocket);
}

// have saga that takes ws connection and adds event listener to socket
// whenever event listener fires, get outside saga to yield dispatch action
// it's complicated to yield event handlers

// in another saga, take that connection and yield takeevery remove
// and send message to websocket

// last one: on a time interval, puts action that creates clickable
// make sure to have a max level of clickables at any time

// top level saga needs to make sure they can all run concurrently

export default testSaga
