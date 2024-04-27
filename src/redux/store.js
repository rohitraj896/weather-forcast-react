import { createStore, applyMiddleware } from 'redux';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import weatherReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
    weather: weatherReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

export default store;

// const store = createStore(weatherReducer, applyMiddleware(thunk));

// export default store;