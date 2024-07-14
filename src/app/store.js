import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import counterReducer from '../features/counter/counterSlice'
import clickableReducer from '../features/clickables/clickableSlice'
import reduxSaga from 'redux-saga'
import rootSaga from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        // Each key-value pair in reducer defines a slice of
        // the Redux state.
        // The key is the name of the slice.
        // The value is the reducer function that manages
        // that slice.
        // This is telling the store to use the counterReducer
        // function to handle all updates to the counter state.
        counter: counterReducer,
        clickable: clickableReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);