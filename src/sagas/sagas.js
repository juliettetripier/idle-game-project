import { eventChannel } from 'redux-saga';
import { take, put, call, fork, takeEvery } from 'redux-saga/effects';
import { update } from '../features/counter/counterSlice';
import { add, remove } from '../features/clickables/clickableSlice';

function setUpWebSocket(socket) {
    return eventChannel(emitter => {
        socket.onopen = () => {
            console.log('connection open');
            socket.send('Hi server');
        };
        socket.onmessage = (evt) => {
            console.log(evt.data);
            emitter(evt.data);
        };
        return { emitter, socket };
    });
}

function* readFromSocket(socket) {
    const socketEventChan = yield call(setUpWebSocket, socket);
    try {
        while (true) {
            let message = yield take(socketEventChan);
            yield put(update(message));
        }
    } catch (error) {
        console.error(error);
    }
}

function* interceptClickables(socket) {
    // react to every action that says a clickable has been removed
    console.log("yay it's working");
    console.log(socket);
}

function* watchClickables(socket) {
    // mySlice.actions.myAction.match(action)
    yield takeEvery(remove, interceptClickables, socket);
}

export default function* rootSaga() {
    const socket = new WebSocket('/ws');
    yield fork(readFromSocket, socket);
    yield fork(watchClickables, socket);
}


// have saga that takes ws connection and adds event listener to socket
// whenever event listener fires, get outside saga to yield dispatch action
// it's complicated to yield event handlers

// in another saga, take that connection and yield takeevery remove
// and send message to websocket

// last one: on a time interval, puts action that creates clickable
// make sure to have a max level of clickables at any time

// top level saga needs to make sure they can all run concurrently
