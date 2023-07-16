'use client';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducer } from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

// Tạo middleware Saga
const sagaMiddleware = createSagaMiddleware();

// Tạo Redux Store và áp dụng Saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Chạy Saga
sagaMiddleware.run(rootSaga);

export default store;
